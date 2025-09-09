'use client';

import Ic_Logo from '@/public/assets/icons/ic_global.svg';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: newLocale });
  };

  const displayText = locale === 'ko' ? 'KR' : 'EN';

  return (
    <button
      className="hidden px-1.5 py-2 lg:flex flex-row items-center gap-1 rounded-[4px] hover:bg-[var(--color-gray-5050)] transition-colors"
      type="button"
      onClick={toggleLanguage}
    >
      <Ic_Logo />
      {displayText}
    </button>
  );
};

export default LanguageSwitcher;
