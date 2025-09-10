import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const BackToListButton = async () => {
  const t = await getTranslations('notice.detail');
  return (
    <div className="flex justify-center pb-16">
      <Link
        href="/notice"
        className="border-[color:var(--color-primary-700)] border text-center text-[color:var(--color-primary-800)] max-w-[335px] lg:max-w-[180px] w-full px-5 py-4 lg:px-[22px] lg:py-[20px] rounded-md hover:bg-[color:var(--color-primary-50)] transition-colors"
      >
        {t('backToList')}
      </Link>
    </div>
  );
};

export default BackToListButton;
