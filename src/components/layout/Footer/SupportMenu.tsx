import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const SupportMenu = async () => {
  const t = await getTranslations('footer');

  const menuItems = ['notice', 'faq', 'news'];

  return (
    <nav aria-labelledby="support-heading" className="w-auto lg:w-[190px]">
      <h3 id="support-heading" className="font-semibold mb-3">
        {t('menu.support.title')}
      </h3>
      <ul className="space-y-1" role="list">
        {menuItems.map((item) => (
          <li key={item}>
            <Link href={`/${item}`} className="hover:text-white transition-colors">
              {t(`menu.support.${item}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SupportMenu;
