import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const ContactButton = async () => {
  const t = await getTranslations('header.button');
  return (
    <div className="flex items-center gap-12">
      <Link
        href=""
        className="gap-2.5 px-4 py-3 rounded bg-[var(--color-gray-900)] hover:bg-[var(--color-gray-700)] transition-colors text-white"
      >
        {t('contact')}
      </Link>
    </div>
  );
};

export default ContactButton;
