import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const SupportMenu = async () => {
  const t = await getTranslations('footer');

  const menuItems = ['notice', 'faq', 'press'];

  return (
    <nav aria-labelledby="support-heading" className="w-auto lg:w-[190px]">
      <h3 id="support-heading" className="font-semibold mb-3">
        {t('menu.support.title')}
      </h3>
      <ul className="space-y-1" role="list">
        {menuItems.map((item) => (
          <li key={item}>
            <Link href="#" className="hover:text-white transition-colors">
              {t(`menu.support.${item}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SupportMenu;
