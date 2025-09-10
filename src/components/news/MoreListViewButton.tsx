interface MoreListViewButtonProps {
  onClick: () => void;
}

const MoreListViewButton = ({ onClick }: MoreListViewButtonProps) => {
  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={onClick}
        className="border-[color:var(--color-primary-700)] border text-center text-[color:var(--color-primary-800)] max-w-[335px] lg:max-w-[180px] w-full px-5 py-4 lg:px-[22px] lg:py-[20px] rounded-md hover:bg-[color:var(--color-primary-50)] transition-colors"
      >
        더보기
      </button>
    </div>
  );
};

export default MoreListViewButton;
