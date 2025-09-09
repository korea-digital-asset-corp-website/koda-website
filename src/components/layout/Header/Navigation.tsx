import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'notice', href: '/notice' },
  { key: 'faq', href: '/faq' },
  { key: 'press', href: '/press' },
];

const Navigation = async () => {
  const t = await getTranslations('header.navigation');
  return (
    <nav className="hidden lg:block" role="navigation" aria-label="주요 메뉴">
      <ul className="flex items-center gap-14">
        {navItems.map((item) => (
          <li key={item.key}>
            <Link href={item.href} className="hover:text-[color:var(--color-primary-700)] transition-colors">
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
