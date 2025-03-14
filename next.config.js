/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: process.env.NODE_ENV === 'production' ? '/click' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/click/' : '',
  images: {
    unoptimized: true, // 为了静态导出
  },
  trailingSlash: true
}

module.exports = nextConfig 