import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/en'
    }
  }
});