# 井字棋游戏

这是一个使用Next.js和React构建的井字棋游戏前端应用，可以部署到任何服务器上。

## 特性

- 使用TypeScript编写，确保类型安全
- 响应式设计，适配各种屏幕尺寸
- 使用Tailwind CSS进行样式设计
- 胜利时的庆祝动画效果
- 简洁美观的UI界面

## 如何运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 部署步骤

1. 构建项目：
```bash
npm run build
```

2. 构建完成后，`out`目录下的所有文件即为可部署的静态网站内容。

3. 将`out`目录中的文件上传至任何静态网站托管服务，如Vercel、Netlify、GitHub Pages等。

## 项目结构

- `/src/app`: Next.js应用入口
- `/src/components`: 游戏组件（棋盘、格子等）
- `/src/styles`: 样式文件

## 许可证

MIT 