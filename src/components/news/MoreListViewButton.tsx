import { useTranslations } from 'next-intl';

interface MoreListViewButtonProps {
  onClick: () => void;
}

const MoreListViewButton = ({ onClick }: MoreListViewButtonProps) => {
  const t = useTranslations('news');
  return (
    <div className="flex justify-center mt-8 lg:mt-14">
      <button
        onClick={onClick}
        className=" cursor-pointer border-[color:var(--color-primary-700)] border text-label-lg text-center font-semibold text-[color:var(--color-primary-800)] max-w-[335px] lg:max-w-[180px] w-full px-5 py-4 lg:px-[22px] lg:py-[20px] rounded-md hover:bg-[color:var(--color-primary-50)] transition-colors"
      >
        {t('moreListView')}
      </button>
    </div>
  );
};

export default MoreListViewButton;
