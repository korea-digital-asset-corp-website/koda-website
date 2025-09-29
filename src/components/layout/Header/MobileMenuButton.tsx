'use client';

import { useState } from 'react';
import HamburgerIcon from '@/public/assets/icons/hamburger.svg';
import CloseIcon from '@/public/assets/icons/close.svg';
import MobileSidebar from './MobileSidebar';

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="lg:hidden w-11 h-11 flex items-center justify-center gap-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
        onClick={handleToggle}
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <CloseIcon className="w-[16px] h-[16px]" /> : <HamburgerIcon />}
      </button>

      <MobileSidebar isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default MobileMenuButton;
