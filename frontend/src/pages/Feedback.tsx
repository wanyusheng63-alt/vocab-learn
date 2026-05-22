import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  MessageSquare,
  Trash2,
  Reply,
  User,
  LogIn,
  Shield,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMessages } from "@/hooks/use-messages";
import { useAuth } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/AuthDialog";
import { toast } from "sonner";

function timeAgo(date: Date): string {
  const now = Date.now();
  const diff = Math.floor((now - date.getTime()) / 1000);
  if (diff < 60) return "刚刚";
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`;
  return `${Math.floor(diff / 86400)} 天前`;
}

export default function Feedback() {
  const { user, isAdmin } = useAuth();
  const { messages, loading, postMessage, deleteMessage, postReply } = useMessages();
  const [authOpen, setAuthOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [guestName, setGuestName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [newMessage]);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setSubmitting(true);
    const ok = await postMessage(newMessage.trim(), guestName.trim() || undefined);
    setSubmitting(false);
    if (ok) {
      setNewMessage("");
      toast.success("留言已发布！");
    } else {
      toast.error("发布失败，请重试");
    }
  };

  const handleDelete = async (id: string) => {
    const ok = await deleteMessage(id);
    if (ok) toast.success("留言已删除");
  };

  const handleReply = async (messageId: string) => {
    if (!replyContent.trim()) return;
    const ok = await postReply(messageId, replyContent.trim(), guestName.trim() || undefined);
    if (ok) {
      setReplyContent("");
      setReplyingTo(null);
      setExpandedReplies((prev) => new Set([...prev, messageId]));
      toast.success("回复已发布！");
    } else {
      toast.error("回复失败，请重试");
    }
  };

  const toggleReplies = (id: string) => {
    setExpandedReplies((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
            <h1 className="text-lg font-semibold text-foreground">留言板</h1>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                <Shield className="h-3 w-3" />管理员
              </span>
            )}
            {!user && (
              <Button variant="outline" size="sm" onClick={() => setAuthOpen(true)}>
                <LogIn className="mr-1 h-4 w-4" />登录
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Post new message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">发表留言</h2>
            </div>

            {!user && (
              <div className="mb-3">
                <Input
                  placeholder="你的昵称（可选，留空则显示「匿名访客」）"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  maxLength={30}
                />
              </div>
            )}

            <form onSubmit={handlePost} className="space-y-3">
              <textarea
                ref={textareaRef}
                className="min-h-[80px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder={
                  user
                    ? "写下你的想法、建议或问题..."
                    : "发现 bug、想要新功能、或者只是想说声谢谢——都欢迎！"
                }
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                maxLength={1000}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {user ? (
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {user.displayName || user.email}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setAuthOpen(true)}
                      className="text-primary hover:underline"
                    >
                      登录后留言可显示你的名字
                    </button>
                  )}
                </span>
                <Button
                  type="submit"
                  size="sm"
                  disabled={!newMessage.trim() || submitting}
                >
                  {submitting ? (
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-1 h-4 w-4" />
                  )}
                  发布
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Messages list */}
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <Loader2 className="mx-auto mb-2 h-6 w-6 animate-spin" />
              加载留言中...
            </div>
          ) : messages.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <MessageSquare className="mx-auto mb-3 h-10 w-10 opacity-30" />
              <p>还没有留言，来做第一个！</p>
            </div>
          ) : (
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  {/* Message header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {msg.authorName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          {msg.authorName}
                        </span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          {timeAgo(msg.createdAt)}
                        </span>
                      </div>
                    </div>
                    {isAdmin && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-destructive opacity-60 hover:opacity-100"
                        onClick={() => handleDelete(msg.id)}
                        title="删除留言"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {/* Message content */}
                  <p className="mt-3 text-sm text-foreground whitespace-pre-wrap">
                    {msg.content}
                  </p>

                  {/* Replies */}
                  {msg.replies.length > 0 && (
                    <div className="mt-3">
                      <button
                        onClick={() => toggleReplies(msg.id)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {expandedReplies.has(msg.id) ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                        {msg.replies.length} 条回复
                      </button>

                      <AnimatePresence>
                        {expandedReplies.has(msg.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-2 border-l-2 border-border pl-4"
                          >
                            {msg.replies.map((reply) => (
                              <div key={reply.id} className="text-sm">
                                <span className="font-medium text-foreground">
                                  {reply.authorName}
                                </span>
                                <span className="ml-2 text-xs text-muted-foreground">
                                  {timeAgo(reply.createdAt)}
                                </span>
                                <p className="mt-0.5 text-muted-foreground">
                                  {reply.content}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Reply form */}
                  <div className="mt-3 flex items-center gap-2">
                    {replyingTo === msg.id ? (
                      <div className="flex-1 space-y-2">
                        <Input
                          placeholder="写下你的回复..."
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              handleReply(msg.id);
                            }
                          }}
                          autoFocus
                          maxLength={500}
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleReply(msg.id)}
                            disabled={!replyContent.trim()}
                          >
                            <Send className="mr-1 h-3 w-3" />回复
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setReplyingTo(null);
                              setReplyContent("");
                            }}
                          >
                            取消
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setReplyingTo(msg.id)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Reply className="h-3 w-3" />回复
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </main>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
}
