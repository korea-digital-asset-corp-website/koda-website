'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PopupButton } from '@typeform/embed-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.contact');

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:pt-[180px] lg:pb-[170px] bg-[var(--color-primary-600)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-8 lg:space-y-11">
          <h2 className="text-headline-lg lg:text-display-md font-bold text-center lg:whitespace-pre-line">
            {t('title')}
          </h2>
          <PopupButton
            id="bZKbfTne"
            className="w-full lg:w-[165px] px-5 py-4 lg:px-[22px] lg:py-[20px] bg-[var(--color-gray-900)] text-label-md lg:text-label-lg rounded-[4px] text-white hover:bg-[var(--color-gray-700)] transition-colors cursor-pointer"
          >
            {t('cta.contact')}
          </PopupButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
