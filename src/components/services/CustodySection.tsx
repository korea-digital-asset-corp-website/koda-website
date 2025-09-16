'use client';

import Image from 'next/image';
import ColdWalletImg from '@/public/assets/images/img_service_coldwallet.png';
import MpcImg from '@/public/assets/images/img_service_mpc.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CustodySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`flex flex-col lg:justify-start justify-center items-center lg:items-start max-w-[1440px] w-full px-[40px] mx-auto mt-[170px] mb-[200px] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <h2 className="text-center lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-[120px]">
        KODA 커스터디로
        <br className="hidden lg:block" />
        디지털 자산을 안전하게 보관할 수 있습니다
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
        <div className="flex-1 max-w-[664px]">
          <div className="mb-4 lg:mb-8">
            <Image
              src={ColdWalletImg}
              alt="콜드월렛 서비스"
              width={664}
              height={400}
              className="w-full max-w-[664px] h-auto"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">콜드월렛</h3>
            <ul className="space-y-2">
              <li className="text-body-md lg:text-body-xl list-disc ml-5">
                고객의 모든 자산은 100% 콜드월렛에 보관됩니다.
              </li>
              <li className="text-body-md lg:text-body-xl list-disc ml-5">
                네트워크와 완전히 단절되었을 뿐만 아니라 물리적으로도 격리된 콜드월렛을 통해 관리됩니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4 lg:mb-8">
            <Image src={MpcImg} alt="MPC 시스템" width={664} height={400} className="w-full max-w-[664px] h-auto" />
          </div>
          <div className="space-y-2">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">MPC</h3>
            <ul className="space-y-2">
              <li className="text-body-md lg:text-body-xl list-disc ml-5">
                다중 서명이 필요하여 하나의 키가 유출되어도 자산이 탈취되지 않습니다.
              </li>
              <li className="text-body-md lg:text-body-xl list-disc ml-5">
                키가 분실되어도 백업키를 통해 복구 가능합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustodySection;
