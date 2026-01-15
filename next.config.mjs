/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: false,
  },
  // Netlify用の設定
  images: {
    unoptimized: true, // Netlifyでは画像最適化を無効化（通常のimgタグを使用しているため）
  },
};

export default nextConfig;
