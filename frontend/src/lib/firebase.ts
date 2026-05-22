import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// ============================================================
// Firebase 配置
// Wayne: 请将下面的占位符替换为你自己的 Firebase 项目配置
// 获取方式：
//   1. 打开 https://console.firebase.google.com
//   2. 选择你的项目 → 项目设置 → 你的应用
//   3. 复制 SDK 设置和配置中的 firebaseConfig 对象
// ============================================================
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

// 检查 Firebase 是否已配置（非空占位符）
export const firebaseConfigured =
  !!firebaseConfig.apiKey &&
  !!firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes("Demo") &&
  !firebaseConfig.apiKey.includes("demo");

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

if (firebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
    dbInstance = getFirestore(app);
  } catch (e) {
    console.warn("Firebase initialization failed:", e);
  }
}

// 导出（可能为 null，各 hook 需做 null 检查）
export const auth = authInstance;
export const db = dbInstance;

export default app;
