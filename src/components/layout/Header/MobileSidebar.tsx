'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from '@/i18n/navigation';
import { navItems } from '@/data/navItems';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const t = useTranslations('header.navigation');
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('header')) {
        return;
      }

      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const sidebarClasses = `fixed top-[70px] left-0 right-0 w-full bg-white lg:hidden shadow-lg z-20 transition-all duration-300 ease-in-out ${
    isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
  }`;

  const sidebarContent = (
    <div ref={sidebarRef} className={sidebarClasses} role="navigation" aria-label="모바일 메뉴">
      <div className="">
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li className="hover:bg-gray-50 transition-colors w-full" key={item.key}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`text-label-lg font-semibold px-6 py-4 block ${
                      isActive ? 'text-primary-700' : 'text-gray-800'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="w-full px-6 py-4">
          <LanguageSwitcher showOnMobile />
        </div>
      </div>
    </div>
  );

  if (!mounted) {
    return sidebarContent;
  }

  return createPortal(sidebarContent, document.body);
};

export default MobileSidebar;
