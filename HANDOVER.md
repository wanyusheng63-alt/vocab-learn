# VocabLearn 项目接手指南

## 快速接手（3个命令）

```bash
# 1. 下载项目
wget https://cornwall-itunes-keywords-average.trycloudflare.com/vocab-learn.bundle -O vocab-learn.bundle

# 2. 克隆项目
git clone vocab-learn.bundle vocab-learn

# 3. 进入项目并初始化
cd vocab-learn
./.genie/scripts/bash/setup-project.sh web
```

完成后访问 `http://localhost:5173` 即可预览网站。

---

## 详细步骤

### 步骤1：下载项目包

```bash
wget https://cornwall-itunes-keywords-average.trycloudflare.com/vocab-learn.bundle -O vocab-learn.bundle
```

### 步骤2：解压项目

```bash
# 方法A：使用 git clone
git clone vocab-learn.bundle vocab-learn

# 方法B：或者直接解压（如果没有 git）
mkdir vocab-learn && cd vocab-learn
git bundle unbundle ../vocab-learn.bundle
```

### 步骤3：初始化运行

```bash
cd vocab-learn

# 初始化项目（会自动安装依赖并启动服务）
./.genie/scripts/bash/setup-project.sh web
```

### 步骤4：访问网站

- 开发环境：`http://localhost:5173`
- 或者使用 Cloud Studio 的预览功能

---

## 项目包含

- ✅ 100个完整解析的单词数据
- ✅ React + TypeScript + Tailwind CSS 前端
- ✅ 响应式设计，支持手机/电脑
- ✅ 英美双发音功能
- ✅ 7个维度的单词深度解析

---

## 继续开发

项目数据文件：`frontend/src/data/words.ts`

添加新单词后，会自动热重载，无需重启服务。
