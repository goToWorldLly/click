/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/click', // 替换为你的仓库名
  images: {
    unoptimized: true, // 为了静态导出
  },
}

module.exports = nextConfig 