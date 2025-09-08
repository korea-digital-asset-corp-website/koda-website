import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/ko.json',
  },
});

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // SVG를 React 컴포넌트로 변환
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // react 개발자 모드 비활성
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
