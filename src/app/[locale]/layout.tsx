import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { getMessages } from 'next-intl/server';

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
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
