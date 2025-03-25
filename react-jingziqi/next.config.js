/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 使用静态导出以便于部署
  images: {
    unoptimized: true, // GitHub Pages不支持Next.js的图像优化
  },
  // 如果您的项目在子目录中托管，请设置此选项
  // 例如：如果您的GitHub Pages URL是 username.github.io/react-jingziqi
  // 则设置为 '/react-jingziqi'
  basePath: process.env.NODE_ENV === 'production' ? '/react-jingziqi' : '',
  // 用于确保静态资产路径正确
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-jingziqi' : '',
  // 禁用默认的自动更新，这在静态托管上可能会有问题
  experimental: {
    // 移除不支持的appDir选项
  },
  trailingSlash: true, // 添加尾部斜杠，有助于解决某些路径问题
}

module.exports = nextConfig 