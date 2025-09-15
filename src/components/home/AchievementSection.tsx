'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import Venture_Enterprise_badge from '@/public/assets/images/img_venture_badge_d.png';

const AchievementSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`relative mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto relative">
        <div className="absolute -top-[105px] lg:-top-[157px] right-10 lg:right-20">
          <Image
            src={Venture_Enterprise_badge}
            alt="벤처기업 확인서"
            width={244}
            height={274}
            className="lg:w-[288px] lg:h-[354px]"
            priority
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-28">
          <div className="space-y-6 mt-32 max-lg:mt-40 lg:mt-0">
            <h2 className="text-headline-lg font-bold">가상자산사업자 1호 벤처기업 확인 획득</h2>
            <p className="text-left text-body-md lg:text-body-lg">
              「벤처기업육성에 관한 특별법 시행령」 개정 기조에 따른 가상자산사업자 최초로 중소벤처기업부의
              &apos;벤처기업 확인&apos; 획득
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
