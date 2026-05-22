import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, firebaseConfigured } from "@/lib/firebase";

// 管理员邮箱列表（Wayne 可以在这里添加自己的邮箱）
const ADMIN_EMAILS = [
  "wanyu@vocablearn.com",
  "wanyusheng63@gmail.com",
  "wanyusheng63alt@gmail.com",
];

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  firebaseReady: boolean;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(firebaseConfigured);

  const isAdmin = user ? ADMIN_EMAILS.includes(user.email || "") : false;

  useEffect(() => {
    if (!firebaseConfigured || !auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, displayName: string) => {
    if (!auth) throw new Error("Firebase 尚未配置，请先设置 Firebase 项目");
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
  };

  const signIn = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase 尚未配置，请先设置 Firebase 项目");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin,
        firebaseReady: firebaseConfigured && !!auth,
        signUp,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
