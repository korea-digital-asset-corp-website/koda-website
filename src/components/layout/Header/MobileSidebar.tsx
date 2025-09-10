'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from '@/i18n/navigation';
import { navItems } from '@/data/navItems';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const t = useTranslations('header.navigation');
  const pathname = usePathname();

  const backdropClasses = `fixed inset-0 lg:hidden z-30 transition-opacity duration-300 ease-in-out ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`;

  const sidebarClasses = `fixed top-[72px] left-0 right-0 w-full bg-white lg:hidden shadow-lg z-40 transition-all duration-300 ease-in-out ${
    isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
  }`;

  return (
    <>
      <div className={backdropClasses} onClick={onClose} aria-hidden="true" />

      <div className={sidebarClasses} role="navigation" aria-label="모바일 메뉴">
        <div className="px-6">
          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li className="hover:bg-gray-50 transition-colors w-full" key={item.key}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`text-label-lg font-semibold px-5 py-4 block ${
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
          <div className="w-full px-5 py-4">
            <LanguageSwitcher showOnMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
