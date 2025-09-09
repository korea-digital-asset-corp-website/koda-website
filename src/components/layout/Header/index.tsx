import Navigation from './Navigation';
import ContactButton from './ContactButton';
import KodaMainLogo from './KodaMainLogo';
import MobileMenuButton from './MobileMenuButton';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  // todo aria label 다국어 지원 필요
  return (
    <header className="sticky bg-white top-0 w-full border-b-[color:var(--color-gray-50)] border-b border-solid z-50">
      <div className="max-w-[1440px] pt-[13.5px] pb-[10.5px] mx-auto px-[20px] lg:px-[40px]">
        <div className="flex items-center justify-between">
          <KodaMainLogo />

          <div className="flex items-center gap-3 lg:gap-14 text-label-lg font-semibold">
            <Navigation />
            <ContactButton />
            <LanguageSwitcher />
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
