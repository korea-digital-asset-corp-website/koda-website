import Ic_Logo from '@/public/assets/logo/ic_global.svg';

const LanguageSwitcher = () => {
  return (
    <button
      className="flex flex-row items-center gap-1"
      type="button"
      aria-label="언어 선택"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <Ic_Logo />
      KR
    </button>
  );
};

export default LanguageSwitcher;
