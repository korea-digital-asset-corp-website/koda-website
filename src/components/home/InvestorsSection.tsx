'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const InvestorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const investors = [
    {
      id: 1,
      description: '국내 1위 은행',
      image: '/assets/images/logo_kb.png',
    },
    {
      id: 2,
      description: '글로벌 탑티어 및 국내 1위 블록체인 VC',
      image: '/assets/images/img_hashed.png',
    },
    {
      id: 3,
      description: '탑티어 유명 VC',
      image: '/assets/images/img_altos.png',
    },
    {
      id: 4,
      description: '블록체인 기술 기업',
      image: '/assets/images/img_haechi.png',
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-left text-headline-sm lg:text-headline-lg font-bold">
              업계 최고의 주주 구성으로
              <br />
              가장 신뢰할 수 있는 서비스를 제공합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {investors.map((investor) => (
              <div key={investor.id} className="bg-white p-7 rounded-lg border border-gray-50 flex flex-col h-40">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <Image
                    src={investor.image}
                    alt={investor.description}
                    width={200}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-caption-lg text-[var(--color-gray-500)] text-center">{investor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
