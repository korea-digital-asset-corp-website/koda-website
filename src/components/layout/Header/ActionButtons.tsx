import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslations } from 'next-intl/server';

const ActionButtons = async () => {
  const t = await getTranslations('header.button');
  return (
    <div className="flex items-center gap-12">
      <Link
        href=""
        className="gap-2.5 px-4 py-3 rounded bg-[var(--color-gray-900)] text-white hover:bg-[var(--color-gray-800)] transition-colors"
      >
        {t('contact')}
      </Link>

      <LanguageSwitcher />
    </div>
  );
};

export default ActionButtons;
