/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "abago",
  exportPathMap: () => ({
    //어떤 정적파일을 미리 만들어놓을래?
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
