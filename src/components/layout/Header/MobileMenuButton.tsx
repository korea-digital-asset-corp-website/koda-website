'use client';

import HamburgerIcon from '@/public/assets/icons/hamburger.svg';

const MobileMenuButton = () => {
  const handleMenuToggle = () => {
    // todo: 사이드바 토글 기능 나중에 추가
  };

  return (
    <button
      className="lg:hidden w-11 h-11 flex items-center justify-center gap-3"
      onClick={handleMenuToggle}
      aria-label="메뉴 열기"
      aria-expanded="false"
      aria-controls="mobile-menu"
    >
      <HamburgerIcon />
    </button>
  );
};

export default MobileMenuButton;
