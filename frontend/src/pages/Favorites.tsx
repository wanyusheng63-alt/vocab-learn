import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Heart, Search, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { allWordsData } from "@/data/allWords";
import { useCloudFavorites } from "@/hooks/use-cloud-favorites";

export default function Favorites() {
  const { favorites, toggleFavorite } = useCloudFavorites();
  const [searchTerm, setSearchTerm] = useState("");

  const favoriteWords = useMemo(() => {
    const words = allWordsData.filter((w) => favorites.has(w.word));
    if (!searchTerm.trim()) return words;
    const term = searchTerm.toLowerCase();
    return words.filter(
      (w) =>
        w.word.toLowerCase().includes(term) ||
        w.summary.toLowerCase().includes(term)
    );
  }, [favorites, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              返回
            </Link>
            <h1 className="text-lg font-semibold text-foreground">我的收藏</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {favorites.size} 个单词
            </span>
            {favorites.size > 0 && (
              <Button variant="outline" size="sm" asChild>
                <Link to="/flashcards/favorites">
                  <Zap className="mr-1 h-3 w-3" />闪卡复习
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {favorites.size === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-24 text-center"
            >
              <Heart className="mx-auto mb-4 h-16 w-16 text-muted-foreground/30" />
              <h2 className="mb-2 text-xl font-semibold text-foreground">词单还是空的</h2>
              <p className="mb-6 text-muted-foreground">
                在单词详情页点击收藏按钮，把重要的单词加进来
              </p>
              <Link to="/">
                <Button>去浏览单词</Button>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Search */}
              <div className="mb-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="在词单中搜索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Word Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {favoriteWords.map((word, index) => (
                  <motion.div
                    key={word.word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="group relative"
                  >
                    <Link to={`/word/${word.word}`}>
                      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3
                                className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary"
                                style={{ fontFamily: "var(--font-family-display)" }}
                              >
                                {word.word}
                              </h3>
                              {word.partOfSpeech && (
                                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                  {word.partOfSpeech}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {word.phonetic.uk}
                            </p>
                          </div>
                          <BookOpen className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>
                        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                          {word.summary}
                        </p>
                      </div>
                    </Link>
                    {/* Remove from favorites button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(word.word);
                      }}
                      className="absolute right-3 top-3 rounded-full p-1.5 text-rose-500 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-rose-50"
                      title="从词单移除"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {favoriteWords.length === 0 && searchTerm && (
                <div className="py-16 text-center">
                  <p className="text-muted-foreground">词单中没有匹配的单词</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
