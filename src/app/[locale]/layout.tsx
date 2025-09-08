import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';

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
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          {/* todo footer 컴포넌트 추가  */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
