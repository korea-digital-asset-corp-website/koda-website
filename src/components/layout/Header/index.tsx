import Navigation from './Navigation';
import ActionButtons from './ActionButtons';
import KodaMainLogo from './KodaMainLogo';

const Header = () => {
  // todo aria label 등 시맨틱 태그 다국어 지원 필요
  return (
    <header className="sticky bg-white top-0 w-full border-b-[color:var(--color-gray-50)] border-b border-solid">
      <div className="max-w-[1440px] w-[1440px] pt-[13.5px] pb-[10.5px] mx-auto px-[40px]">
        <div className="flex items-center justify-between">
          <KodaMainLogo />
          <div className="flex items-center gap-14 text-label-lg font-semibold">
            <Navigation />
            <ActionButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
