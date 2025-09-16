'use client';

import AauthorizationIcon from '@/public/assets/icons/services_authorization.svg';
import ProofIcon from '@/public/assets/icons/services_proof.svg';
import SecurityIcon from '@/public/assets/icons/services_security.svg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CorporateSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: AauthorizationIcon,
      title: '권한 분리',
      description: '법인 구조에 맞게 구성원의 권한을 부여하고, 결재선을 설정하여 다중 승인 구조를 만들 수 있습니다.',
    },
    {
      icon: ProofIcon,
      title: '각종 증명',
      description: '법률, 회계, 세무에 필요한 각종 증명 자료를 발급할 수 있습니다.',
    },
    {
      icon: SecurityIcon,
      title: '다중 보안',
      description: 'OTP 인증, IP 주소 화이트리스팅 등 다양한 보안 장치로 안전하게 관리할 수 있습니다.',
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-[1440px] w-full px-[40px] mx-auto mt-[170px] mb-[200px] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="text-center lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-0">
            법인 맞춤형 서비스를 제공합니다
          </h2>
        </div>

        <div className="lg:flex-1 flex flex-col items-center lg:items-start space-y-8 lg:space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto max-w-[425px] lg:max-w-none"
            >
              <div className="flex justify-center items-center w-16 h-16 lg:w-[90px] lg:h-[100px] flex-shrink-0">
                <feature.icon />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-headline-xs lg:text-headline-sm font-bold">{feature.title}</h3>
                <p className="text-body-md lg:text-body-xl text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
