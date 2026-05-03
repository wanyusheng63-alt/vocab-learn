import type { WordAnalysis } from "@/types/word";
import { wordsData as originalWords } from "./words";
import { batch1a } from "./batch1a";
import { batch1b } from "./batch1b";
import { batch1c } from "./batch1c";
import { batch2a } from "./batch2a";
import { batch2b } from "./batch2b";
import { batch2c } from "./batch2c";
import { batch3a } from "./batch3a";
import { batch3b } from "./batch3b";

// Merge all batches and deduplicate by word
const allBatches: WordAnalysis[] = [
  ...originalWords,
  ...batch1a,
  ...batch1b,
  ...batch1c,
  ...batch2a,
  ...batch2b,
  ...batch2c,
  ...batch3a,
  ...batch3b,
];

const seen = new Set<string>();
export const allWordsData: WordAnalysis[] = allBatches.filter((entry) => {
  const key = entry.word.toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
