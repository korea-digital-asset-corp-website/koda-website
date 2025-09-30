'use client';

import { navItems } from '@/data/navItems';
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Navigation = () => {
  const t = useTranslations('header.navigation');
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block" role="navigation" aria-label="주요 메뉴">
      <ul className="flex items-center gap-14">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname === item.href;

          return (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  isActive ? 'text-primary-700' : 'text-gray-800 hover:text-[color:var(--color-primary-700)]'
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
