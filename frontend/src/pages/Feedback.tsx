import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitting(true);

    // Store feedback locally (since we're on GitHub Pages, no backend)
    try {
      const feedbacks = JSON.parse(localStorage.getItem("vocablearn_feedbacks") || "[]");
      feedbacks.push({
        name: name.trim() || "匿名",
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("vocablearn_feedbacks", JSON.stringify(feedbacks));
    } catch {
      // ignore
    }

    // Simulate a brief delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            返回
          </Link>
          <h1 className="text-lg font-semibold text-foreground">意见反馈</h1>
        </div>
      </header>

      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm"
            >
              <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
              <h2 className="mb-2 text-2xl font-semibold text-foreground">感谢你的反馈！</h2>
              <p className="mb-6 text-muted-foreground">
                你的意见已收到，buddy 会认真阅读每一条反馈，持续改进 VocabLearn。
              </p>
              <div className="flex justify-center gap-3">
                <Link to="/">
                  <Button variant="outline">返回首页</Button>
                </Link>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                >
                  再提交一条
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">告诉我你的想法</h2>
                  <p className="text-sm text-muted-foreground">
                    发现 bug、想要新功能、或者只是想说声谢谢——都欢迎！
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      昵称 <span className="text-muted-foreground">（可选）</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="你的名字"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      邮箱 <span className="text-muted-foreground">（可选）</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="方便回复你"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    反馈内容 <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    className="min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                    placeholder="有什么想说的？比如：某个单词的解析不准确、希望增加某个功能、或者学习体验的建议..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={2000}
                    required
                  />
                  <p className="text-right text-xs text-muted-foreground">
                    {message.length} / 2000
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={!message.trim() || submitting}
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      提交中...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      提交反馈
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
