'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:pt-[180px] lg:pb-[170px] bg-[var(--color-primary-600)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-8 lg:space-y-11">
          <h2 className="text-headline-lg lg:text-display-md font-bold text-center">
            가장 신뢰할 수 있는 KODA와 함께 <br className="hidden lg:block" />
            디지털 자산을 안전하게 보관·관리하세요
          </h2>
          <button className="w-full lg:w-[165px] px-5 py-4 lg:px-[22px] lg:py-[20px] bg-[var(--color-gray-900)] text-label-md lg:text-label-lg rounded-[4px] text-white hover:bg-[var(--color-gray-700)] transition-colors cursor-pointer">
            서비스 문의
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
