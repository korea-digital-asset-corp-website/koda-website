'use client';

import Link from 'next/link';
import SplineScene from '../common/SplineScene';
import { useEffect, useState } from 'react';
import { PopupButton } from '@typeform/embed-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSplineLoaded = () => {
    setIsLoaded(true);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="max-w-[1440px] w-full px-10 mx-auto">
      <section className="mx-auto overflow-x-hidden">
        <div
          className={`grid lg:grid-cols-2 items-center lg:pt-10 transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-center lg:text-left text-headline-lg lg:text-display-lg font-bold">
              안전한 보관부터 스테이킹,
              <br className="hidden lg:block" />
              법인 맞춤 기능까지
              <br className="hidden lg:block" />
              디지털 자산 종합 솔루션
            </h1>
            <p className="text-center text-body-md lg:text-left lg:text-body-lg">
              가장 안전하고 편리하게 디지털 자산을 관리하세요
            </p>
            <PopupButton
              id="bZKbfTne"
              className="text-white flex justify-center lg:max-w-[180px] w-full px-5 lg:px-[22px] py-4 lg:py-5 bg-[var(--color-primary-800)] hover:bg-[var(--color-primary-900)] transition-colors rounded-[4px] cursor-pointer"
            >
              서비스 문의
            </PopupButton>
          </div>

          <SplineScene
            scene="https://prod.spline.design/O4BKSZb0nUY-tmcM/scene.splinecode"
            className="order-1 lg:order-2 [&_canvas]:!w-full [&_canvas]:!h-auto pointer-events-none [&_canvas]:!scale-[1.0] lg:[&_canvas]:!scale-[1.2]"
            onSplineLoaded={handleSplineLoaded}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
