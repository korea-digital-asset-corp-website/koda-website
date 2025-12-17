import type { MetadataRoute } from 'next';

type RouteSpec = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kodax.com';

  const routes: RouteSpec[] = [
    { path: '', changeFrequency: 'yearly', priority: 1 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/notice', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/ethical-management', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/work-guidelines', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/crypto-warning', changeFrequency: 'yearly', priority: 0.4 },
  ];

  const ko = (p: string) => `${baseUrl}/ko${p}`;
  const en = (p: string) => `${baseUrl}/en${p}`;

  return routes.map((r) => ({
    url: ko(r.path),
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        ko: ko(r.path),
        en: en(r.path),
        'x-default': ko(r.path),
      },
    },
  }));
}
