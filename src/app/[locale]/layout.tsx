import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/contexts/ModalContext';
import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      template: `%s | ${t('siteName')}`,
      default: t('siteName'),
    },
    description: t('home.description'),
    keywords: t.raw('home.keywords'),

    openGraph: {
      type: 'website',
      title: t('home.title'),
      description: t('home.description'),
      url: `https://kodax.com/${locale}`,
      siteName: t('siteName'),
      locale: locale,
      images: [
        {
          url: 'https://kodax.com/assets/images/favicon.png',
          width: 140,
          height: 140,
          alt: t('home.title'),
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['https://kodax.com/assets/images/favicon.png'],
    },

    alternates: {
      canonical: `https://kodax.com/${locale}`,
      languages: {
        ko: 'https://kodax.com/ko',
        en: 'https://kodax.com/en',
        'x-default': 'https://kodax.com/ko',
      },
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: [
        {
          url: '/assets/icons/favicon.svg',
          type: 'image/svg+xml',
        },
        {
          url: '/assets/icons/favicon.svg',
          sizes: '32x32',
          type: 'image/svg+xml',
        },
      ],
      shortcut: '/assets/icons/favicon.svg',
      apple: '/assets/icons/favicon.svg',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const fontClass = locale === 'ko' ? 'font-korean' : 'font-english';

  return (
    <html lang={locale || 'ko'} className={fontClass}>
      <body className="flex flex-col min-h-screen">
        <GoogleAnalytics />
        <ModalProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
