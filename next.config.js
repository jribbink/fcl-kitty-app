/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL: false,
    '0xFungibleToken': '0x9a0766d93b6608b7'
  }
}

module.exports = nextConfig
