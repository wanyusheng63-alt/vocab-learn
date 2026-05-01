export interface WordAnalysis {
  word: string;
  phonetic: {
    uk: string;
    us: string;
  };
  root: {
    components: Array<{
      part: string;
      meaning: string;
      origin?: string;
    }>;
    explanation: string;
  };
  logic: {
    premise: string;
    feature: string;
    result: string;
    essence: string;
  };
  usage: Array<{
    context: string;
    example: string;
    explanation: string;
  }>;
  distinction: Array<{
    word: string;
    essence: string;
  }>;
  memory: {
    methods: string[];
    visualHint?: string;
  };
  pitfalls: string[];
  summary: string;
}
