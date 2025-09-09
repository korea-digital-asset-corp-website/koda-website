import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const ContactInfo = async () => {
  const t = await getTranslations('footer');

  return (
    <div aria-labelledby="contact-heading">
      <h3 id="contact-heading" className="font-semibold mb-3">
        {t('menu.contact.title')}
      </h3>
      <div>
        <Link
          href="mailto:hello@kodax.com"
          className="hover:text-white transition-colors"
          aria-label={t('menu.contact.emailAria')}
        >
          hello@kodax.com
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
