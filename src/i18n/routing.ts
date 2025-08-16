import {defineRouting, type Pathnames} from 'next-intl/routing';

export const routing = defineRouting({

  locales: ['uk', 'en', 'pl'],
  
  defaultLocale: 'uk',

  pathnames: {
    '/': '/',
    '/contact': '/contact',
    '/rent-it': '/rent-it',
    '/case-studies': '/case-studies',
    '/services': '/services'
  } satisfies Pathnames<['uk','en','pl']>,

  localePrefix: 'always'
});
