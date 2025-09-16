'use client';

import DashBoardImg from '@/public/assets/images/img_dashboard.png';
import StorageIcon from '@/public/assets/icons/services_storage.svg';
import WithDrawalIcon from '@/public/assets/icons/services_withdrawal.svg';
import StakingIcon from '@/public/assets/icons/services_staking.svg';
import ManageIcon from '@/public/assets/icons/services_manage.svg';
import LockUpIcon from '@/public/assets/icons/services_lockup.svg';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DashBoardSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: StorageIcon,
      title: '보관',
      description: '자산을 안전하게 보관할 수 있습니다.',
    },
    {
      icon: WithDrawalIcon,
      title: '출금',
      description: '출금 시 올바른 출금 요청인지 검증 후에 처리됩니다.',
    },
    {
      icon: StakingIcon,
      title: '스테이킹',
      description: '자산을 위임하여 블록체인 네트워크에 참여하고 보상을 받을 수 있습니다.',
    },
    {
      icon: ManageIcon,
      title: '유통량 관리',
      description: '발행 물량을 수탁하면 유통량이 관리됩니다.',
    },
    {
      icon: LockUpIcon,
      title: '락업 관리',
      description: '락업 물량을 수탁하고 락업 스케줄에 따라 자신을 관리할 수 있습니다.',
    },
  ];

  return (
    <section
      ref={ref}
      className={`mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-[40px] mx-auto">
        <h2 className="text-center lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-[120px]">
          디지털 자산을 다양하게 관리할 수 있습니다
        </h2>

        <div className="mb-16 lg:mb-24">
          <Image
            src={DashBoardImg}
            alt="디지털 자산 관리 대시보드"
            width={1360}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-3 gap-8 lg:justify-items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row lg:flex-col w-full max-w-[425px] lg:max-w-auto gap-4 lg:gap-6">
              <div className="flex justify-center items-center w-12 h-12 lg:w-[72px] lg:h-[72px] bg-[var(--color-primary-50)] rounded-[4px] aspect-square">
                <feature.icon className="w-[26px] h-[26px] lg:w-[40px] lg:h-[40px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-headline-xs lg:text-headline-sm font-bold mb-2">{feature.title}</h3>
                <p className="text-body-md lg:text-body-xl font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashBoardSection;
