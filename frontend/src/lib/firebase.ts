import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase 配置
// Wayne: 替换为你自己的 Firebase 项目配置
// 获取方式：Firebase Console → 项目设置 → 你的应用 → SDK 设置和配置
const firebaseConfig = {
  apiKey: "AIzaSyDemo_VocabLearn_Replace_With_Your_Key",
  authDomain: "vocablearn-demo.firebaseapp.com",
  projectId: "vocablearn-demo",
  storageBucket: "vocablearn-demo.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 导出 Auth 和 Firestore 实例
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
