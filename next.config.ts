import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ko.json'
  }
});

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false,
};

export default withNextIntl(nextConfig);


