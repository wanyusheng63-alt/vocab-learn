import { useState, useCallback } from "react";

const STORAGE_KEY = "vocablearn_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set<string>(JSON.parse(stored)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  const toggleFavorite = useCallback((word: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(word)) {
        next.delete(word);
      } else {
        next.add(word);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (word: string) => favorites.has(word),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite, favoriteCount: favorites.size };
}
