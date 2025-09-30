'use client';

import Ic_Logo from '@/public/assets/icons/ic_global.svg';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageSwitcherBase = ({ className }: { className?: string }) => {
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
      onClick={toggleLanguage}
      className={`flex cursor-pointer items-center gap-2 font-semibold ${className || ''}`}
    >
      <Ic_Logo />
      {displayText}
    </button>
  );
};

const LanguageSwitcher = ({ showOnMobile = false }: { showOnMobile?: boolean }) => {
  return <LanguageSwitcherBase className={showOnMobile ? 'flex' : 'hidden lg:flex'} />;
};

export default LanguageSwitcher;
