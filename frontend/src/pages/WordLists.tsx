import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Trash2, Zap, BookOpen, List, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useWordLists } from "@/hooks/use-word-lists";
import { useAuth } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/AuthDialog";
import { toast } from "sonner";

export default function WordLists() {
  const { lists, loading, createList, deleteList } = useWordLists();
  const { user } = useAuth();
  const [createOpen, setCreateOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [creating, setCreating] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const handleCreate = async () => {
    if (!newListName.trim()) return;
    setCreating(true);
    const result = await createList(newListName);
    setCreating(false);
    if (result) {
      toast.success(`词单「${result.name}」已创建`);
      setCreateOpen(false);
      setNewListName("");
    } else {
      toast.error("创建失败，请重试");
    }
  };

  const handleDelete = async (id: string, name: string) => {
    await deleteList(id);
    toast.success(`词单「${name}」已删除`);
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
            <h1 className="text-lg font-semibold text-foreground">自定义词单</h1>
          </div>
          <Button size="sm" onClick={() => setCreateOpen(true)}>
            <Plus className="mr-1 h-4 w-4" />新建词单
          </Button>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Login prompt */}
          {!user && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">登录后可跨设备同步词单</p>
                  <p className="text-xs text-muted-foreground mt-0.5">未登录时词单仅保存在本地浏览器</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => setAuthOpen(true)}>
                  <LogIn className="mr-1 h-4 w-4" />登录
                </Button>
              </div>
            </motion.div>
          )}

          {loading ? (
            <div className="py-16 text-center text-muted-foreground">加载中...</div>
          ) : lists.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center"
            >
              <List className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
              <p className="text-lg font-medium text-foreground">还没有词单</p>
              <p className="mt-2 text-sm text-muted-foreground">
                创建词单来整理你想重点复习的单词
              </p>
              <Button className="mt-6" onClick={() => setCreateOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />创建第一个词单
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {lists.map((list, index) => (
                  <motion.div
                    key={list.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{list.name}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {list.words.length} 个单词
                          {list.words.length > 0 && (
                            <span className="ml-2 text-xs">
                              · {list.words.slice(0, 3).join("、")}{list.words.length > 3 ? "..." : ""}
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-3">
                        {list.words.length > 0 && (
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/flashcards/${list.id}`}>
                              <Zap className="mr-1 h-3 w-3" />复习
                            </Link>
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/?list=${list.id}`}>
                            <BookOpen className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDelete(list.id, list.name)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      {/* Create List Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>新建词单</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Input
              placeholder="词单名称，例如：PTE 高频词"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>取消</Button>
            <Button onClick={handleCreate} disabled={!newListName.trim() || creating}>
              {creating ? "创建中..." : "创建"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
}
