import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, Sparkles, Heart, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allWordsData } from "@/data/allWords";
import { useFavorites } from "@/hooks/use-favorites";

const POS_LABELS: Record<string, string> = {
  n: "名词",
  v: "动词",
  adj: "形容词",
  adv: "副词",
  prep: "介词",
  conj: "连词",
};

const POS_FILTERS = ["all", "n", "v", "adj", "adv"];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posFilter, setPosFilter] = useState("all");
  const { favoriteCount, isFavorite, toggleFavorite } = useFavorites();

  const filteredWords = useMemo(() => {
    let words = allWordsData;

    if (posFilter !== "all") {
      words = words.filter((w) => w.partOfSpeech === posFilter);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      words = words.filter(
        (word) =>
          word.word.toLowerCase().includes(term) ||
          word.summary.toLowerCase().includes(term)
      );
    }

    return words;
  }, [searchTerm, posFilter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>深度学习 · 词根记忆</span>
            </div>
            <h1
              className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              VocabLearn
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              不只是背单词，而是深度理解每个词的词根、逻辑和用法
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary">
                {allWordsData.length}
              </div>
              <div className="text-sm text-muted-foreground">单词总数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-accent">7</div>
              <div className="text-sm text-muted-foreground">解析维度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-rose-500">
                {favoriteCount}
              </div>
              <div className="text-sm text-muted-foreground">已收藏</div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex justify-center gap-3"
          >
            <Link
              to="/favorites"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <Heart className="h-4 w-4 text-rose-500" />
              我的词单
              {favoriteCount > 0 && (
                <span className="rounded-full bg-rose-100 px-1.5 py-0.5 text-xs font-medium text-rose-600">
                  {favoriteCount}
                </span>
              )}
            </Link>
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              意见反馈
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索单词或释义..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* POS Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {POS_FILTERS.map((pos) => (
              <button
                key={pos}
                onClick={() => setPosFilter(pos)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  posFilter === pos
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {pos === "all" ? "全部" : `${pos}  ${POS_LABELS[pos] || ""}`}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              共 {filteredWords.length} 个
            </span>
          </div>
        </div>
      </section>

      {/* Word Grid */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWords.map((word, index) => (
              <motion.div
                key={word.word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      {word.root.components.slice(0, 2).map((comp, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                        >
                          {comp.part}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                {/* Favorite toggle */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(word.word);
                  }}
                  className={`absolute right-3 top-3 rounded-full p-1.5 transition-all ${
                    isFavorite(word.word)
                      ? "text-rose-500 opacity-100"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  } hover:bg-rose-50`}
                  title={isFavorite(word.word) ? "取消收藏" : "收藏"}
                >
                  <Heart
                    className={`h-4 w-4 ${isFavorite(word.word) ? "fill-current" : ""}`}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredWords.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">没有找到匹配的单词</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
