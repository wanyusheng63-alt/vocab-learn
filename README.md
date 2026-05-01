# VocabLearn 单词学习网站

一个专业的英语单词深度解析学习工具，通过词根拆解、逻辑推理、用法对比等多维度帮助用户建立对单词的深刻理解。

## 快速开始

### 方式1：直接在 Cloud Studio 运行

```bash
# 克隆项目后进入目录
cd vocab-learn

# 初始化项目
./.genie/scripts/bash/setup-project.sh web

# 前端已自动启动，访问 http://localhost:5173
```

### 方式2：本地开发

```bash
# 进入前端目录
cd frontend

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 项目功能

- **单词列表页** - 网格卡片展示100个单词，支持搜索过滤
- **单词详情页** - 深度解析每个单词的7个维度：
  - 词根拆解
  - 底层逻辑
  - 核心用法
  - 词义辨析
  - 记忆方式
  - 常见误区
  - 一句话总结
- **英美双发音** - 集成浏览器语音朗读

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion 动画

## 项目结构

```
/workspace/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── data/     # 单词数据
│   │   ├── pages/    # 页面组件
│   │   └── ...
├── docs/             # 项目文档
└── README.md         # 本文件
```

## 继续开发

项目数据文件位于：`frontend/src/data/words.ts`

添加新单词时，按照 `WordAnalysis` 类型格式添加即可。
