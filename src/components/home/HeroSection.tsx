'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';
import { DepositWithdrawNoticeModal } from '@/components/modal/DepositWithdrawNoticeModal';
import SplineScene from '../common/SplineScene';
import { PopupButton } from '@typeform/embed-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      openModal(<DepositWithdrawNoticeModal />);
    }
  }, [isMounted, openModal]);

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
              법인·기관을 위한
              <br className="hidden lg:block" />
              가장 신뢰할 수 있는
              <br className="hidden lg:block" />
              디지털 자산 파트너
            </h1>
            <p className="text-center text-body-md lg:text-left lg:text-body-lg">
              비트코인부터 스테이블 코인, 자체 발행 코인 등 법인·기관 투자자를 위한
              <br />
              디지털 자산 관리 종합 서비스를 제공합니다
            </p>
            <PopupButton
              id="bZKbfTne"
              className="text-white flex justify-center lg:max-w-[180px] w-full px-5 lg:px-[22px] py-4 lg:py-5 bg-[var(--color-primary-800)] hover:bg-[var(--color-primary-900)] transition-colors rounded-[4px] cursor-pointer"
            >
              서비스 문의
            </PopupButton>
          </div>
          <SplineScene
            scene="https://prod.spline.design/H3gqptL5Dz0k641R/scene.splinecode"
            className="order-1 lg:order-2 [&_canvas]:!w-full [&_canvas]:!h-auto pointer-events-none [&_canvas]:!scale-[1.0] lg:[&_canvas]:!scale-[1.2]"
            onSplineLoaded={handleSplineLoaded}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
