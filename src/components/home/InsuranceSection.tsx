'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import InsuranceImg from '@/public/assets/images/img_insurance.png';
import KodaLogo from '@/public/assets/icons/koda.svg';
import CloseIcon from '@/public/assets/icons/close.svg';

const InsuranceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:min-h-[517px] space-y-12 lg:space-y-0">
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:justify-between h-full lg:min-h-[517px] lg:flex-1 lg:pr-8">
            <div className="space-y-3.5">
              <h2 className="text-headline-sm lg:text-headline-lg font-bold">
                삼성화재와 함께 약 300억원* 한도의
                <br />
                보험으로 고객 자산을 안전하게 보호합니다
              </h2>
              <p className="text-body-md lg:text-body-lg font-normal lg:font-medium">
                국내 최고 수준의 디지털 자산 보험 가입
                <br />
                가상자산사업자 중 의무 보험을 제외한 국내 최초 보험
              </p>
            </div>

            <div className="flex flex-col justify-center items-center border border-gray-50 rounded-[4px] w-full lg:w-[400px] h-[120px] lg:h-[188px] gap-4 lg:gap-6">
              <p className="flex flex-row items-center justify-center gap-3.5 lg:gap-[20px]">
                <KodaLogo />
                <CloseIcon />
                <span className="text-headline-sm text-[#003CDC] font-bold">삼성화재</span>
              </p>
              <p className="text-headline-md lg:text-display-md font-bold">$20M</p>
            </div>

            <div className="flex flex-col lg:hidden space-y-6">
              <div className="flex justify-center">
                <Image src={InsuranceImg} alt="보험 보장 안내" width={200} height={200} className="w-[200px] h-auto" />
              </div>
              <div className="space-y-4">
                <p className="text-caption-lg lg:text-body-md text-center text-[var(--color-gray-500)]">
                  * 현재 보험 보장 한도는 $20,000,000이며, 자산 규모에 따라 한도 증액 가능
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col lg:flex-1 lg:pl-8 gap-10">
            <div className="flex justify-center">
              <Image src={InsuranceImg} alt="보험 보장 안내" width={330} height={456} />
            </div>

            <div className="space-y-4">
              <p className="text-body-md text-center text-[var(--color-gray-500)]">
                * 현재 보험 보장 한도는 $20,000,000이며, 자산 규모에 따라 한도 증액 가능
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
