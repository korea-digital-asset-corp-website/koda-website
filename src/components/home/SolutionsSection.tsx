'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ColdWalletIcon from '@/public/assets/icons/cold_wallet.svg';
import MpcIcon from '@/public/assets/icons/mpc.svg';
import StorageIcon from '@/public/assets/icons/storage.svg';
import StakingIcon from '@/public/assets/icons/staking.svg';
import BackUpIcon from '@/public/assets/icons/backup.svg';
import AuthorizationIcon from '@/public/assets/icons/authorization.svg';
import SecurityIcon from '@/public/assets/icons/security.svg';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col space-y-16">
          <div className="space-y-6">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold">
              디지털 자산의 안전한 보관부터
              <br className="block lg:hidden" /> 스테이킹, 법인 맞춤형 기능까지
              <br className="block lg:hidden" />
              <br className="hidden lg:block" />
              모두 제공하는 종합 솔루션입니다
            </h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">안전한 보관</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <ColdWalletIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">콜드월렛</h4>
                <p className="text-body-md lg:text-body-xl">
                  네트워크와 완전히 단절된 콜드월렛에서 모든 자산을 안전하게 보관
                </p>
              </div>

              <div className="flex flex-col space-y-1 lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <MpcIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">MPC 시스템</h4>
                <p className="text-body-md lg:text-body-xl">
                  하나의 키를 분실하거나 유출되어도 자산이 탈취되지 않으며 복구 가능
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">다양한 기능 제공</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <StorageIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">보관</h4>
                <p className="text-body-md lg:text-body-xl">
                  자산을 안전하게 보관할 수 있고, 출금 시 올바른 요청인지 검증 후 처리
                </p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <StakingIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">스테이킹</h4>
                <p className="text-body-md lg:text-body-xl">자산을 위임하여 블록체인 네트워크 참여 보상 획득</p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <BackUpIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">유통량/백업관리</h4>
                <p className="text-body-md lg:text-body-xl">발행 코인의 유통량, 투자 코인의 락업 스케줄 관리</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">법인 맞춤 기능</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <AuthorizationIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">권한분리</h4>
                <p className="text-body-md lg:text-body-xl">
                  법인 구조에 맞게 권한을 부여하고, 결재선으로 다중 승인 구조 설정 가능
                </p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <SecurityIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">각종 증명</h4>
                <p className="text-body-md lg:text-body-xl">법률, 회계, 세무를 위한 각종 증명서 발급</p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <SecurityIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">다중 보안</h4>
                <p className="text-body-md lg:text-body-xl">
                  OTP 인증, IP 주소 화이트리스팅 등 다양한 보안 인증 장치 적용
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button className="w-full lg:w-auto justify-center flex items-center text-[var(--color-primary-800)] font-semibold px-8 py-4 border border-[var(--color-primary-700)] rounded-[4px] hover:bg-[var(--color-primary-50)] transition-colors">
              서비스 더 알아보기
              <IcArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
