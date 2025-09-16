import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/contexts/ModalContext';

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
