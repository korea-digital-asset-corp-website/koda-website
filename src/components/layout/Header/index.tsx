'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ContactButton from './ContactButton';
import KodaMainLogo from './KodaMainLogo';
import MobileMenuButton from './MobileMenuButton';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 0보다 크면 true
      setIsScrolled(window.scrollY > 0);
    };

    // 초기 상태 체크
    handleScroll();

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 클린업
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky bg-white top-0 w-full z-50 ${
        isScrolled ? 'border-b-[color:var(--color-gray-50)] border-b border-solid' : ''
      }`}
    >
      <div className="max-w-[1440px] pt-[13.5px] pb-[10.5px] mx-auto pl-[20px] pr-[16px] lg:px-[40px]">
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
