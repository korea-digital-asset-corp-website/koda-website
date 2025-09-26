'use client';

import { useTranslations } from 'next-intl';
import { PopupButton } from '@typeform/embed-react';

const ContactButton = () => {
  const t = useTranslations('header.button');
  return (
    <div className="flex items-center gap-12">
      <PopupButton
        id="bZKbfTne"
        className="gap-2.5 px-4 py-3 rounded bg-[var(--color-gray-900)] hover:bg-[var(--color-gray-700)] transition-colors text-white text-label-sm lg:text-label-lg font-semibold cursor-pointer"
      >
        {t('contact')}
      </PopupButton>
    </div>
  );
};

export default ContactButton;
