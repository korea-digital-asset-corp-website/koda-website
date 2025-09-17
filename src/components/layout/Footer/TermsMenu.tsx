import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const TermsMenu = async () => {
  const t = await getTranslations('footer');

  const menuItems = [
    { key: 'privacy', href: '/privacy-policy' },
    { key: 'ethics', href: '/ethical-management' },
    { key: 'guidelines', href: '/work-guidelines' },
    { key: 'cryptoNotice', href: '/crypto-warning' },
  ];

  return (
    <nav aria-labelledby="terms-heading">
      <h3 id="terms-heading" className="font-semibold mb-3">
        {t('menu.terms.title')}
      </h3>
      <ul className="space-y-1" role="list">
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link href={item.href} className="hover:text-white transition-colors">
              {t(`menu.terms.${item.key}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TermsMenu;
