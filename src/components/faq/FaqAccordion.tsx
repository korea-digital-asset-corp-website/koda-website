'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import { faqData } from '@/data/faqItems';

const FaqAccordion = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const t = useTranslations('faq');

  const toggleItem = useCallback((id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <section className="space-y-0" aria-labelledby="faq-heading">
      {faqData.map((item) => {
        const isOpen = openItems.has(item.id);
        const contentId = `faq-content-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <article key={item.id} className="border-b border-gray-50 last:border-b-0">
            <header>
              <button
                id={buttonId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between pt-4 pb-5 lg:py-8 text-left cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                <h3 className="text-headline-xs lg:text-headline-sm font-bold pr-4 text-gray-900">
                  {t(item.questionKey)}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  <ArrowIcon className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                </span>
              </button>
            </header>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 pb-4 lg:pb-8' : 'max-h-0'
              }`}
            >
              <p className="text-body-md font-medium lg:font-normal lg:text-body-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {t(item.answerKey)}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default FaqAccordion;
