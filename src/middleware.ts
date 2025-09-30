import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
