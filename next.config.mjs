/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  // 经过尝试在该文件增加下面的代码，不能解决 ESLint 的Error 问题，
  // 需要修改 eslint.config.mjs 文件中的配置。
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },

  // 为您的 Next.js 应用程序启用 PPR,“incremental”值允许您为特定路由采用 PPR
  // experimental: {
  //   ppr: 'incremental',
  // },
};

export default nextConfig;
