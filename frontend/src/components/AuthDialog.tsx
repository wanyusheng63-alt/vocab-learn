import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { firebaseConfigured } from "@/lib/firebase";
import { toast } from "sonner";
import { Loader2, LogIn, UserPlus, AlertCircle } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const isFirebaseReady = firebaseConfigured;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn(email, password);
        toast.success("登录成功！");
      } else {
        if (!displayName.trim()) {
          toast.error("请输入昵称");
          setLoading(false);
          return;
        }
        await signUp(email, password, displayName);
        toast.success("注册成功！欢迎加入 VocabLearn");
      }
      onOpenChange(false);
      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (err: unknown) {
      const error = err as { code?: string };
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
        toast.error("邮箱或密码错误");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("该邮箱已注册，请直接登录");
      } else if (error.code === "auth/weak-password") {
        toast.error("密码至少需要 6 位");
      } else if (error.code === "auth/invalid-email") {
        toast.error("邮箱格式不正确");
      } else if (error.code === "auth/network-request-failed") {
        toast.error("网络连接失败，请检查网络");
      } else {
        toast.error("操作失败，请稍后重试");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mode === "signin" ? (
              <><LogIn className="h-5 w-5" />登录 VocabLearn</>
            ) : (
              <><UserPlus className="h-5 w-5" />注册账号</>
            )}
          </DialogTitle>
        </DialogHeader>
        {!isFirebaseReady && (
          <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <div>
              <p className="font-medium">Firebase 尚未配置</p>
              <p className="mt-0.5 text-xs">请按照项目 README 中的指南配置 Firebase，才能使用账号功能。未登录时所有功能仍可正常使用（数据保存在本地浏览器）。</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {mode === "signup" && (
            <div className="space-y-1.5">
              <Label htmlFor="displayName">昵称</Label>
              <Input
                id="displayName"
                placeholder="你的昵称"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoComplete="email"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              placeholder={mode === "signup" ? "至少 6 位" : "你的密码"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />处理中...</>
            ) : mode === "signin" ? "登录" : "注册"}
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          {mode === "signin" ? (
            <>还没有账号？{" "}
              <button
                type="button"
                className="text-primary underline-offset-4 hover:underline"
                onClick={() => setMode("signup")}
              >立即注册</button>
            </>
          ) : (
            <>已有账号？{" "}
              <button
                type="button"
                className="text-primary underline-offset-4 hover:underline"
                onClick={() => setMode("signin")}
              >直接登录</button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
