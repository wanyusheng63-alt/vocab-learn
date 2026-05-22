import { useState, useEffect, useCallback } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  doc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

export interface Message {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
  replies: Reply[];
}

export interface Reply {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
}

// Local storage fallback
const LOCAL_KEY = "vocablearn_messages";

function getLocalMessages(): Message[] {
  try {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parsed.map((m: any) => ({
      ...m,
      createdAt: new Date(m.createdAt),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      replies: (m.replies || []).map((r: any) => ({
        ...r,
        createdAt: new Date(r.createdAt),
      })),
    })) as Message[];
  } catch {
    return [];
  }
}

function saveLocalMessages(msgs: Message[]) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(msgs));
  } catch {
    // ignore
  }
}

export function useMessages() {
  const { user, isAdmin } = useAuth();
  const [messages, setMessages] = useState<Message[]>(getLocalMessages);
  const [loading, setLoading] = useState(true);
  const [firebaseAvailable, setFirebaseAvailable] = useState(firebaseConfigured);

  // Real-time listener from Firestore
  useEffect(() => {
    // If Firebase is not configured, fall back to local storage immediately
    if (!firebaseConfigured || !db) {
      setMessages(getLocalMessages());
      setFirebaseAvailable(false);
      setLoading(false);
      return;
    }

    const colRef = collection(db, "messages");
    const q = query(colRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        const loaded: Message[] = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            authorId: data.authorId || "",
            authorName: data.authorName || "匿名",
            content: data.content || "",
            createdAt: data.createdAt instanceof Timestamp
              ? data.createdAt.toDate()
              : new Date(data.createdAt || Date.now()),
            replies: (data.replies || []).map((r: { id: string; authorId: string; authorName: string; content: string; createdAt: Timestamp | string | Date }) => ({
              ...r,
              createdAt: r.createdAt instanceof Timestamp
                ? r.createdAt.toDate()
                : new Date(r.createdAt || Date.now()),
            })),
          };
        });
        setMessages(loaded);
        saveLocalMessages(loaded);
        setFirebaseAvailable(true);
        setLoading(false);
      },
      (error) => {
        console.warn("Firestore unavailable, using local storage:", error);
        setFirebaseAvailable(false);
        setMessages(getLocalMessages());
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const postMessage = useCallback(
    async (content: string, guestName?: string) => {
      const authorName = user?.displayName || guestName || "匿名访客";
      const authorId = user?.uid || "guest_" + Date.now();

      const newMsg: Message = {
        id: Date.now().toString(),
        authorId,
        authorName,
        content,
        createdAt: new Date(),
        replies: [],
      };

      if (firebaseAvailable && db) {
        try {
          await addDoc(collection(db, "messages"), {
            authorId,
            authorName,
            content,
            createdAt: serverTimestamp(),
            replies: [],
          });
          return true;
        } catch (e) {
          console.warn("Firestore write failed, saving locally:", e);
        }
      }

      // Local fallback
      const updated = [newMsg, ...messages];
      setMessages(updated);
      saveLocalMessages(updated);
      return true;
    },
    [user, firebaseAvailable, messages]
  );

  const deleteMessage = useCallback(
    async (messageId: string) => {
      if (!isAdmin) return false;

      if (firebaseAvailable && db) {
        try {
          await deleteDoc(doc(db, "messages", messageId));
          return true;
        } catch (e) {
          console.warn("Firestore delete failed:", e);
        }
      }

      // Local fallback
      const updated = messages.filter((m) => m.id !== messageId);
      setMessages(updated);
      saveLocalMessages(updated);
      return true;
    },
    [isAdmin, firebaseAvailable, messages]
  );

  const postReply = useCallback(
    async (messageId: string, content: string, guestName?: string) => {
      const authorName = user?.displayName || guestName || "匿名访客";
      const authorId = user?.uid || "guest_" + Date.now();

      const newReply: Reply = {
        id: Date.now().toString(),
        authorId,
        authorName,
        content,
        createdAt: new Date(),
      };

      if (firebaseAvailable && db) {
        try {
          const msgRef = doc(db, "messages", messageId);
          await updateDoc(msgRef, {
            replies: arrayUnion({
              id: newReply.id,
              authorId,
              authorName,
              content,
              createdAt: new Date().toISOString(),
            }),
          });
          return true;
        } catch (e) {
          console.warn("Firestore reply failed:", e);
        }
      }

      // Local fallback
      const updated = messages.map((m) =>
        m.id === messageId
          ? { ...m, replies: [...m.replies, newReply] }
          : m
      );
      setMessages(updated);
      saveLocalMessages(updated);
      return true;
    },
    [user, firebaseAvailable, messages]
  );

  return { messages, loading, postMessage, deleteMessage, postReply, firebaseAvailable };
}
