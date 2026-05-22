import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { allWordsData } from "@/data/allWords";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return allWordsData;
    const term = searchTerm.toLowerCase();
    return allWordsData.filter(
      (word) =>
        word.word.toLowerCase().includes(term) ||
        word.summary.toLowerCase().includes(term)
    );
  }, [searchTerm]);

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
              <div className="text-2xl font-semibold text-accent">
                7
              </div>
              <div className="text-sm text-muted-foreground">解析维度</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索单词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
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
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <Link to={`/word/${word.word}`}>
                  <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30">
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
