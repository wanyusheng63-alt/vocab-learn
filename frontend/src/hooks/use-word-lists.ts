import { useState, useEffect, useCallback } from "react";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

export interface WordList {
  id: string;
  name: string;
  words: string[];
  createdAt: Date;
}

const LOCAL_KEY = "vocablearn_wordlists";

function getLocalLists(): WordList[] {
  try {
    const stored = localStorage.getItem(LOCAL_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveLocalLists(lists: WordList[]) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(lists));
  } catch {
    // ignore
  }
}

export function useWordLists() {
  const { user } = useAuth();
  const [lists, setLists] = useState<WordList[]>(getLocalLists);
  const [loading, setLoading] = useState(false);

  // 登录后从 Firestore 加载词单
  useEffect(() => {
    if (!user || !firebaseConfigured || !db) {
      setLists(getLocalLists());
      return;
    }
    setLoading(true);
    const colRef = collection(db, "users", user.uid, "wordlists");
    const q = query(colRef, orderBy("createdAt", "desc"));
    getDocs(q)
      .then((snap) => {
        const loaded: WordList[] = snap.docs.map((d) => ({
          id: d.id,
          name: d.data().name,
          words: d.data().words || [],
          createdAt: d.data().createdAt?.toDate() || new Date(),
        }));
        setLists(loaded);
        saveLocalLists(loaded);
      })
      .catch(() => {
        setLists(getLocalLists());
      })
      .finally(() => setLoading(false));
  }, [user]);

  const createList = useCallback(
    async (name: string): Promise<WordList | null> => {
      const newList: Omit<WordList, "id"> = {
        name: name.trim(),
        words: [],
        createdAt: new Date(),
      };

      if (user && firebaseConfigured && db) {
        try {
          const colRef = collection(db, "users", user.uid, "wordlists");
          const docRef = await addDoc(colRef, {
            ...newList,
            createdAt: serverTimestamp(),
          });
          const created = { ...newList, id: docRef.id };
          setLists((prev) => {
            const updated = [created, ...prev];
            saveLocalLists(updated);
            return updated;
          });
          return created;
        } catch {
          return null;
        }
      } else {
        const created = { ...newList, id: Date.now().toString() };
        setLists((prev) => {
          const updated = [created, ...prev];
          saveLocalLists(updated);
          return updated;
        });
        return created;
      }
    },
    [user]
  );

  const deleteList = useCallback(
    async (listId: string) => {
      setLists((prev) => {
        const updated = prev.filter((l) => l.id !== listId);
        saveLocalLists(updated);
        return updated;
      });
      if (user && firebaseConfigured && db) {
        try {
          await deleteDoc(doc(db, "users", user.uid, "wordlists", listId));
        } catch {
          // ignore
        }
      }
    },
    [user]
  );

  const addWordToList = useCallback(
    async (listId: string, word: string) => {
      setLists((prev) => {
        const updated = prev.map((l) =>
          l.id === listId && !l.words.includes(word)
            ? { ...l, words: [...l.words, word] }
            : l
        );
        saveLocalLists(updated);
        return updated;
      });
      if (user && firebaseConfigured && db) {
        try {
          await updateDoc(doc(db, "users", user.uid, "wordlists", listId), {
            words: arrayUnion(word),
          });
        } catch {
          // ignore
        }
      }
    },
    [user]
  );

  const removeWordFromList = useCallback(
    async (listId: string, word: string) => {
      setLists((prev) => {
        const updated = prev.map((l) =>
          l.id === listId
            ? { ...l, words: l.words.filter((w) => w !== word) }
            : l
        );
        saveLocalLists(updated);
        return updated;
      });
      if (user && firebaseConfigured && db) {
        try {
          await updateDoc(doc(db, "users", user.uid, "wordlists", listId), {
            words: arrayRemove(word),
          });
        } catch {
          // ignore
        }
      }
    },
    [user]
  );

  const isInList = useCallback(
    (listId: string, word: string) => {
      const list = lists.find((l) => l.id === listId);
      return list ? list.words.includes(word) : false;
    },
    [lists]
  );

  return { lists, loading, createList, deleteList, addWordToList, removeWordFromList, isInList };
}
