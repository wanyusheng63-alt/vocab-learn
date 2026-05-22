import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// ============================================================
// Firebase 配置 - 使用用户的真实项目配置
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyAYiVHTdtgcxal66LIOYhUEZgaPlGodrGk",
  authDomain: "vocablearn-6b4ad.firebaseapp.com",
  projectId: "vocablearn-6b4ad",
  storageBucket: "vocablearn-6b4ad.firebasestorage.app",
  messagingSenderId: "350798372254",
  appId: "1:350798372254:web:dd3799943c119010394a8f",
};

// Firebase 已配置
export const firebaseConfigured = true;

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

try {
  app = initializeApp(firebaseConfig);
  authInstance = getAuth(app);
  dbInstance = getFirestore(app);
  console.log("✅ Firebase 已成功连接到项目: vocablearn-6b4ad");
} catch (e) {
  console.error("❌ Firebase 初始化失败:", e);
}

// 导出
export const auth = authInstance;
export const db = dbInstance;

export default app;
