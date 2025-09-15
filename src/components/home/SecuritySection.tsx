'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import IsmsImg from '@/public/assets/images/img_isms_color.png';
import CertificationLogo from '@/public/assets/icons/img_certification_color.svg';
import SecurityCompLogo from '@/public/assets/icons/security_comp.svg';
import SecurityPplLogo from '@/public/assets/icons/security_ppl.svg';
import Image from 'next/image';

const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col lg:flex-row lg:min-h-[320px] space-y-12 lg:space-y-0">
          <div className="flex flex-col gap-6 mb-14 lg:mb-0 lg:gap-0 justify-between lg:min-h-[320px] lg:flex-1">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold">
              철저한 내부 통제 체계와
              <br className="hidden lg:block" />
              보안 기준을 갖추었습니다
            </h2>

            <div className="flex flex-row gap-11 items-center">
              <Image src={IsmsImg} width={113} height={103} alt="ISMS 인증" />
              <CertificationLogo />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-1 gap-8 lg:gap-0">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <SecurityCompLogo />
              </div>
              <div className="space-y-2">
                <h3 className="text-title-md lg:text-title-lg font-semibold">금융 기관 수준의 컴플라이언스</h3>
                <p className="text-body-md lg:text-body-xl">
                  ISMS 인증, VASP(가상자산보관사업자 취득), 이용자 보호법상 대통령령으로 정하는 보안 기준 충족
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <SecurityPplLogo />
              </div>
              <div className="space-y-2">
                <h3 className="text-title-md lg:text-title-lg font-semibold">은행 부장급 이상의 운영 인력</h3>
                <p className="text-body-md lg:text-body-xl">CISO, 준법감시인, 내부통제 등</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
