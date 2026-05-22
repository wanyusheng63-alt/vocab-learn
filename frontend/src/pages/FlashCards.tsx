import { useState, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Shuffle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { allWordsData } from "@/data/allWords";
import { useCloudFavorites } from "@/hooks/use-cloud-favorites";
import { useWordLists } from "@/hooks/use-word-lists";
import type { WordAnalysis } from "@/types/word";

type CardState = "front" | "back";
type ReviewResult = "known" | "unknown";

interface CardProgress {
  word: string;
  result: ReviewResult | null;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashCards() {
  const { listId } = useParams<{ listId?: string }>();
  const { favorites } = useCloudFavorites();
  const { lists } = useWordLists();

  // Determine word set
  const sourceWords = useMemo((): WordAnalysis[] => {
    if (!listId) {
      // All words
      return allWordsData;
    }
    if (listId === "favorites") {
      return allWordsData.filter((w) => favorites.has(w.word));
    }
    const list = lists.find((l) => l.id === listId);
    if (!list) return allWordsData;
    return allWordsData.filter((w) => list.words.includes(w.word));
  }, [listId, favorites, lists]);

  const listName = useMemo(() => {
    if (!listId) return "全部单词";
    if (listId === "favorites") return "我的收藏";
    return lists.find((l) => l.id === listId)?.name || "自定义词单";
  }, [listId, lists]);

  const [cards, setCards] = useState<WordAnalysis[]>(() => shuffle(sourceWords));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardState, setCardState] = useState<CardState>("front");
  const [progress, setProgress] = useState<CardProgress[]>(() =>
    sourceWords.map((w) => ({ word: w.word, result: null }))
  );
  const [finished, setFinished] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentCard = cards[currentIndex];
  const knownCount = progress.filter((p) => p.result === "known").length;
  const unknownCount = progress.filter((p) => p.result === "unknown").length;

  const handleFlip = () => {
    setCardState((prev) => (prev === "front" ? "back" : "front"));
  };

  const handleResult = useCallback(
    (result: ReviewResult) => {
      setProgress((prev) =>
        prev.map((p) =>
          p.word === currentCard?.word ? { ...p, result } : p
        )
      );
      if (currentIndex < cards.length - 1) {
        setDirection(1);
        setCurrentIndex((i) => i + 1);
        setCardState("front");
      } else {
        setFinished(true);
      }
    },
    [currentCard, currentIndex, cards.length]
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((i) => i - 1);
      setCardState("front");
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setCurrentIndex((i) => i + 1);
      setCardState("front");
    }
  };

  const handleRestart = () => {
    setCards(shuffle(sourceWords));
    setCurrentIndex(0);
    setCardState("front");
    setProgress(sourceWords.map((w) => ({ word: w.word, result: null })));
    setFinished(false);
    setDirection(0);
  };

  const handleRestartUnknown = () => {
    const unknownWords = cards.filter((c) => {
      const p = progress.find((p) => p.word === c.word);
      return p?.result === "unknown";
    });
    if (unknownWords.length === 0) return;
    setCards(shuffle(unknownWords));
    setCurrentIndex(0);
    setCardState("front");
    setProgress(unknownWords.map((w) => ({ word: w.word, result: null })));
    setFinished(false);
    setDirection(0);
  };

  if (sourceWords.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <Zap className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
        <h2 className="text-xl font-semibold text-foreground">词单是空的</h2>
        <p className="mt-2 text-sm text-muted-foreground">先去添加一些单词吧</p>
        <Button asChild className="mt-6">
          <Link to="/">浏览单词</Link>
        </Button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center"
        >
          <div className="mb-6 text-6xl">🎉</div>
          <h2 className="text-2xl font-semibold text-foreground">复习完成！</h2>
          <p className="mt-2 text-muted-foreground">共复习了 {cards.length} 个单词</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-950/30">
              <div className="text-3xl font-bold text-green-600">{knownCount}</div>
              <div className="text-sm text-green-700 dark:text-green-400">已掌握</div>
            </div>
            <div className="rounded-xl bg-red-50 p-4 text-center dark:bg-red-950/30">
              <div className="text-3xl font-bold text-red-600">{unknownCount}</div>
              <div className="text-sm text-red-700 dark:text-red-400">需复习</div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {unknownCount > 0 && (
              <Button className="w-full" onClick={handleRestartUnknown}>
                <RotateCcw className="mr-2 h-4 w-4" />
                重新复习不熟的 {unknownCount} 个
              </Button>
            )}
            <Button variant="outline" className="w-full" onClick={handleRestart}>
              <Shuffle className="mr-2 h-4 w-4" />
              重新随机复习全部
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />返回首页
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to={listId === "favorites" ? "/favorites" : listId ? "/wordlists" : "/"}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              返回
            </Link>
            <span className="text-sm font-medium text-foreground">{listName}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-green-600 font-medium">{knownCount} ✓</span>
            <span className="text-red-500 font-medium">{unknownCount} ✗</span>
            <span>{currentIndex + 1} / {cards.length}</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mx-auto mt-2 max-w-2xl">
          <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((currentIndex) / cards.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Card Area */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentCard?.word + cardState}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
              onClick={handleFlip}
            >
              <div className="min-h-[280px] rounded-2xl border-2 border-border bg-card p-8 shadow-lg transition-shadow hover:shadow-xl">
                {cardState === "front" ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      点击翻转查看释义
                    </div>
                    <h2
                      className="text-5xl font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-family-display)" }}
                    >
                      {currentCard?.word}
                    </h2>
                    {currentCard?.partOfSpeech && (
                      <span className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {currentCard.partOfSpeech}
                      </span>
                    )}
                    <p className="mt-3 text-muted-foreground">{currentCard?.phonetic.uk}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                      <EyeOff className="h-4 w-4" />
                      <span>词根、释义已隐藏</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2
                        className="text-3xl font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-family-display)" }}
                      >
                        {currentCard?.word}
                      </h2>
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    </div>

                    {/* Summary */}
                    <div className="rounded-lg bg-primary/5 p-4">
                      <p className="font-medium text-foreground">{currentCard?.summary}</p>
                    </div>

                    {/* Root */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">词根</p>
                      <div className="flex flex-wrap gap-2">
                        {currentCard?.root.components.map((comp, i) => (
                          <span key={i} className="rounded-full bg-secondary px-3 py-1 text-sm">
                            <span className="font-mono font-semibold text-primary">{comp.part}</span>
                            <span className="text-muted-foreground"> → {comp.meaning}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logic essence */}
                    <div className="rounded-lg bg-secondary/50 p-3">
                      <span className="text-xs text-muted-foreground">本质：</span>
                      <span className="text-sm text-foreground">{currentCard?.logic.essence}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {cardState === "front" ? (
              <>
                <Button variant="outline" size="lg" onClick={handlePrev} disabled={currentIndex === 0}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button size="lg" onClick={handleFlip} className="px-8">
                  <Eye className="mr-2 h-4 w-4" />翻转
                </Button>
                <Button variant="outline" size="lg" onClick={handleNext} disabled={currentIndex === cards.length - 1}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={() => handleResult("unknown")}
                >
                  <XCircle className="mr-2 h-5 w-5" />
                  不熟
                </Button>
                <Button
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleResult("known")}
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  已掌握
                </Button>
              </>
            )}
          </div>

          {/* Restart */}
          <div className="mt-4 text-center">
            <button
              onClick={handleRestart}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="mr-1 inline h-3 w-3" />重新开始
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
