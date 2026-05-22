import { useState, useEffect, useCallback } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

const LOCAL_KEY = "vocablearn_favorites";

function getLocalFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem(LOCAL_KEY);
    return stored ? new Set<string>(JSON.parse(stored)) : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

function saveLocalFavorites(favs: Set<string>) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify([...favs]));
  } catch {
    // ignore
  }
}

export function useCloudFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Set<string>>(getLocalFavorites);
  const [syncing, setSyncing] = useState(false);

  // 登录后从 Firestore 加载收藏
  useEffect(() => {
    if (!user || !firebaseConfigured || !db) {
      setFavorites(getLocalFavorites());
      return;
    }
    setSyncing(true);
    const ref = doc(db, "users", user.uid, "data", "favorites");
    getDoc(ref)
      .then((snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const cloudFavs = new Set<string>(data.words || []);
          setFavorites(cloudFavs);
          saveLocalFavorites(cloudFavs);
        } else {
          // 新用户：把本地收藏同步到云端
          const localFavs = getLocalFavorites();
          if (localFavs.size > 0) {
            setDoc(ref, { words: [...localFavs] }).catch(() => {});
          }
          setFavorites(localFavs);
        }
      })
      .catch(() => {
        setFavorites(getLocalFavorites());
      })
      .finally(() => setSyncing(false));
  }, [user]);

  const toggleFavorite = useCallback(
    async (word: string) => {
      const isFav = favorites.has(word);
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(word)) {
          next.delete(word);
        } else {
          next.add(word);
        }
        saveLocalFavorites(next);
        return next;
      });

      if (user && firebaseConfigured && db) {
        const ref = doc(db, "users", user.uid, "data", "favorites");
        try {
          if (isFav) {
            await updateDoc(ref, { words: arrayRemove(word) });
          } else {
            await setDoc(ref, { words: arrayUnion(word) }, { merge: true });
          }
        } catch {
          // 云端同步失败时本地仍然有效
        }
      }
    },
    [user, favorites]
  );

  const isFavorite = useCallback((word: string) => favorites.has(word), [favorites]);

  return { favorites, toggleFavorite, isFavorite, favoriteCount: favorites.size, syncing };
}
