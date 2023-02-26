/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  distDir: 'build',
  swcMinify: true,
  // compiler: {
  //   removeConsole: true,
  // }
}

module.exports = nextConfig