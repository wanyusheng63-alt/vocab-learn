import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useFavorites } from "@/hooks/use-favorites";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Volume2,
  ChevronLeft,
  ChevronRight,
  TreePine,
  Brain,
  BookOpen,
  Scale,
  Lightbulb,
  AlertTriangle,
  Quote,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { allWordsData } from "@/data/allWords";

export default function WordDetail() {
  const { word } = useParams<{ word: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const wordData = useMemo(() => {
    return allWordsData.find((w) => w.word.toLowerCase() === word?.toLowerCase());
  }, [word]);

  const currentIndex = useMemo(() => {
    return allWordsData.findIndex((w) => w.word.toLowerCase() === word?.toLowerCase());
  }, [word]);

  const prevWord = currentIndex > 0 ? allWordsData[currentIndex - 1] : null;
  const nextWord = currentIndex < allWordsData.length - 1 ? allWordsData[currentIndex + 1] : null;

  const playAudio = (accent: "uk" | "us") => {
    if (wordData) {
      const utterance = new SpeechSynthesisUtterance(wordData.word);
      utterance.lang = accent === "uk" ? "en-GB" : "en-US";
      speechSynthesis.speak(utterance);
    }
  };

  if (!wordData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-semibold text-foreground">单词未找到</h1>
        <Link to="/" className="mt-4">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回列表
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant={wordData && isFavorite(wordData.word) ? "default" : "outline"}
              size="sm"
              onClick={() => wordData && toggleFavorite(wordData.word)}
              className="gap-1.5"
            >
              <Heart
                className={`h-4 w-4 ${wordData && isFavorite(wordData.word) ? "fill-current" : ""}`}
              />
              {wordData && isFavorite(wordData.word) ? "已收藏" : "收藏"}
            </Button>
            {prevWord && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/word/${prevWord.word}`)}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                上一词
              </Button>
            )}
            {nextWord && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/word/${nextWord.word}`)}
              >
                下一词
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Word Hero */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              {wordData.word}
            </h1>
            {wordData.partOfSpeech && (
              <div className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {wordData.partOfSpeech}
              </div>
            )}
            <div className="mt-4 flex justify-center gap-6">
              <button
                onClick={() => playAudio("uk")}
                className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm transition-colors hover:bg-secondary/80"
              >
                <Volume2 className="h-4 w-4" />
                <span>英 {wordData.phonetic.uk}</span>
              </button>
              <button
                onClick={() => playAudio("us")}
                className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm transition-colors hover:bg-secondary/80"
              >
                <Volume2 className="h-4 w-4" />
                <span>美 {wordData.phonetic.us}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analysis Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Root Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-primary/20 bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <TreePine className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">词根拆解</h2>
            </div>
            <div className="space-y-3">
              {wordData.root.components.map((comp, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-baseline gap-2 rounded-lg bg-secondary/50 p-3"
                >
                  <span className="font-mono text-lg font-semibold text-primary">
                    {comp.part}
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-foreground">{comp.meaning}</span>
                  {comp.origin && (
                    <span className="text-sm text-muted-foreground">
                      ({comp.origin})
                    </span>
                  )}
                </div>
              ))}
              <p className="mt-3 text-foreground">{wordData.root.explanation}</p>
            </div>
          </motion.div>

          {/* Logic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-accent" />
              <h2 className="text-lg font-semibold text-foreground">底层逻辑</h2>
            </div>
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-secondary/50 p-3">
                  <span className="text-xs font-medium text-muted-foreground">前提</span>
                  <p className="mt-1 text-foreground">{wordData.logic.premise}</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3">
                  <span className="text-xs font-medium text-muted-foreground">特征</span>
                  <p className="mt-1 text-foreground">{wordData.logic.feature}</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3">
                  <span className="text-xs font-medium text-muted-foreground">结果</span>
                  <p className="mt-1 text-foreground">{wordData.logic.result}</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <span className="text-xs font-medium text-primary">本质</span>
                  <p className="mt-1 font-medium text-foreground">{wordData.logic.essence}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-info" />
              <h2 className="text-lg font-semibold text-foreground">核心用法</h2>
            </div>
            <div className="space-y-4">
              {wordData.usage.map((use, index) => (
                <div key={index} className="rounded-lg bg-secondary/30 p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    {use.context}
                  </span>
                  <p className="mt-2 font-medium text-foreground">{use.example}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {use.explanation}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Distinction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-warning" />
              <h2 className="text-lg font-semibold text-foreground">词义辨析</h2>
            </div>
            <div className="divide-y divide-border">
              {wordData.distinction.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-3 ${
                    item.word.toLowerCase() === wordData.word.toLowerCase()
                      ? "rounded-lg bg-primary/5 px-3"
                      : ""
                  }`}
                >
                  <span
                    className={`font-medium ${
                      item.word.toLowerCase() === wordData.word.toLowerCase()
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.word}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">
                    {item.essence}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Memory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-success" />
              <h2 className="text-lg font-semibold text-foreground">记忆方式</h2>
            </div>
            <div className="space-y-3">
              {wordData.memory.methods.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-xs font-medium text-success">
                    {index + 1}
                  </span>
                  <p className="text-foreground">{method}</p>
                </div>
              ))}
              {wordData.memory.visualHint && (
                <div className="mt-4 rounded-lg bg-secondary/30 p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    画面联想
                  </span>
                  <p className="mt-1 text-foreground">{wordData.memory.visualHint}</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Pitfalls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-xl border border-destructive/20 bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h2 className="text-lg font-semibold text-foreground">常见误区</h2>
            </div>
            <ul className="space-y-2">
              {wordData.pitfalls.map((pitfall, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-destructive">•</span>
                  {pitfall}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl border border-primary/30 bg-primary/5 p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <Quote className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">一句话总结</h2>
            </div>
            <p className="text-lg font-medium text-foreground">
              {wordData.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          {prevWord ? (
            <button
              onClick={() => navigate(`/word/${prevWord.word}`)}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prevWord.word}</span>
              <span className="sm:hidden">上一词</span>
            </button>
          ) : (
            <div />
          )}
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {allWordsData.length}
          </span>
          {nextWord ? (
            <button
              onClick={() => navigate(`/word/${nextWord.word}`)}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="hidden sm:inline">{nextWord.word}</span>
              <span className="sm:hidden">下一词</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </div>
  );
}
