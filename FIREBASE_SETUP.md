# VocabLearn Firebase 设置指南

> 本指南适用于没有编程背景的用户，按步骤操作即可完成 Firebase 配置，全程约 10 分钟。

---

## 为什么需要 Firebase？

Firebase 是 Google 提供的免费云服务。配置后，VocabLearn 可以：

- **用户注册/登录**：邮箱+密码注册，跨设备同步数据
- **云端收藏**：收藏的单词保存在云端，换设备也不会丢失
- **自定义词单**：创建多个词单，云端同步
- **留言板**：所有用户的留言实时显示，管理员可删除

> **注意**：不配置 Firebase 时，网站所有功能仍然可以正常使用，只是数据只保存在本地浏览器（换设备会丢失）。

---

## 第一步：创建 Firebase 项目

1. 打开 [https://console.firebase.google.com](https://console.firebase.google.com)
2. 用 Google 账号登录
3. 点击 **"添加项目"**（或 "Create a project"）
4. 项目名称填写：`vocablearn`（或任意名称）
5. 关闭 Google Analytics（不需要），点击 **"创建项目"**
6. 等待创建完成，点击 **"继续"**

---

## 第二步：开启 Authentication（用户认证）

1. 在左侧菜单点击 **"Authentication"**
2. 点击 **"开始使用"**（Get started）
3. 在 **"Sign-in method"** 标签页，点击 **"电子邮件地址/密码"**
4. 将第一个开关打开（启用），点击 **"保存"**

---

## 第三步：创建 Firestore 数据库

1. 在左侧菜单点击 **"Firestore Database"**
2. 点击 **"创建数据库"**
3. 选择 **"以测试模式启动"**（Start in test mode）
4. 位置选择 **"asia-east1"**（台湾，速度最快）或 **"australia-southeast1"**
5. 点击 **"启用"**，等待创建完成

---

## 第四步：获取 Firebase 配置

1. 点击左上角的 **齿轮图标** → **"项目设置"**
2. 向下滚动到 **"你的应用"** 部分
3. 点击 **"</>"**（Web 应用图标）
4. 应用昵称填写：`vocablearn-web`，点击 **"注册应用"**
5. 你会看到类似这样的配置代码：

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "vocablearn-xxxxx.firebaseapp.com",
  projectId: "vocablearn-xxxxx",
  storageBucket: "vocablearn-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**把这些值复制下来，下一步会用到。**

---

## 第五步：配置 GitHub 仓库的环境变量

1. 打开你的 GitHub 仓库：[https://github.com/wanyusheng63-alt/vocab-learn](https://github.com/wanyusheng63-alt/vocab-learn)
2. 点击 **"Settings"**（设置）标签
3. 在左侧菜单找到 **"Secrets and variables"** → **"Actions"**
4. 点击 **"New repository secret"**，依次添加以下 6 个密钥：

| Name（名称）| Value（值）|
|---|---|
| `VITE_FIREBASE_API_KEY` | 你的 `apiKey` 值 |
| `VITE_FIREBASE_AUTH_DOMAIN` | 你的 `authDomain` 值 |
| `VITE_FIREBASE_PROJECT_ID` | 你的 `projectId` 值 |
| `VITE_FIREBASE_STORAGE_BUCKET` | 你的 `storageBucket` 值 |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | 你的 `messagingSenderId` 值 |
| `VITE_FIREBASE_APP_ID` | 你的 `appId` 值 |

---

## 第六步：创建 GitHub Actions 自动部署工作流

1. 在仓库中，点击 **"Actions"** 标签
2. 点击 **"New workflow"** → **"set up a workflow yourself"**
3. 文件名改为 `deploy.yml`
4. 粘贴以下内容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: cd frontend && npm install
        
      - name: Build
        run: cd frontend && npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

5. 点击 **"Commit changes"** 保存
6. 等待 2-3 分钟，Actions 会自动构建并部署

---

## 第七步：设置 Firestore 安全规则（重要！）

1. 回到 Firebase Console → **"Firestore Database"**
2. 点击 **"规则"** 标签
3. 将规则替换为以下内容：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 留言板：所有人可读，登录用户可写，管理员可删
    match /messages/{messageId} {
      allow read: if true;
      allow create: if true;  // 允许未登录用户留言
      allow delete: if request.auth != null && 
        request.auth.token.email in [
          'wanyu@vocablearn.com',
          'wanyusheng63@gmail.com',
          'wanyusheng63alt@gmail.com'
        ];
      allow update: if true;  // 允许回复
    }
    
    // 用户数据：只有本人可读写
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

4. 点击 **"发布"**

---

## 完成！

配置完成后，VocabLearn 将支持：

- ✅ 用户注册和登录
- ✅ 收藏单词云端同步
- ✅ 自定义词单云端同步
- ✅ 留言板实时更新
- ✅ 管理员删除留言（使用你配置的管理员邮箱登录即可）

---

## 管理员账号

以下邮箱注册的账号自动拥有管理员权限（可删除留言）：
- `wanyu@vocablearn.com`
- `wanyusheng63@gmail.com`
- `wanyusheng63alt@gmail.com`

如需添加其他管理员邮箱，修改 `frontend/src/contexts/AuthContext.tsx` 中的 `ADMIN_EMAILS` 数组即可。

---

## 遇到问题？

常见问题：
- **登录失败**：检查 Firebase Console → Authentication 是否已开启邮箱登录
- **数据不同步**：检查 Firestore 安全规则是否已发布
- **部署失败**：检查 GitHub Secrets 是否全部填写正确（6个）
