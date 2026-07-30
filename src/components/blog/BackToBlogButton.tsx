import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const BackToBlogButton = async () => {
  const t = await getTranslations('blog.detail');

  return (
    <div className="flex justify-center">
      <Link
        href="/blog"
        className="border border-primary-700 text-center text-label-lg font-semibold text-primary-800 max-w-[335px] lg:max-w-[180px] w-full px-5 py-4 lg:px-[22px] lg:py-[20px] rounded-[4px] hover:bg-primary-50 transition-colors"
      >
        {t('backToList')}
      </Link>
    </div>
  );
};

export default BackToBlogButton;
