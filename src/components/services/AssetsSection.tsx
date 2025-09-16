'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import BitcoinIcon from '@/public/assets/icons/services_bitcoin.svg';
import EthereumIcon from '@/public/assets/icons/services_ethereum.svg';
import BaseIcon from '@/public/assets/icons/services_base.svg';
import SolanaIcon from '@/public/assets/icons/services_solana.svg';
import Avalanche from '@/public/assets/icons/services_avalanche.svg';
import BinanceSmartChainIcon from '@/public/assets/icons/services_binance.svg';
import PolygonIcon from '@/public/assets/icons/services_polygon.svg';
import ArbitriumIcon from '@/public/assets/icons/services_arbitrum.svg';
import KaiaIcon from '@/public/assets/icons/services_kaia.svg';
import StoryIcon from '@/public/assets/icons/services_story.svg';
import CoreIcon from '@/public/assets/icons/services_core.svg';
import MoreMainnetsIcon from '@/public/assets/icons/services_mainnets.svg';

const AssetsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const mainnetAssets = [
    { icon: BitcoinIcon, name: 'Bitcoin' },
    { icon: EthereumIcon, name: 'Ethereum' },
    { icon: BaseIcon, name: 'Base' },
    { icon: SolanaIcon, name: 'Solana' },
    { icon: Avalanche, name: 'Avalanche' },
    { icon: BinanceSmartChainIcon, name: 'Binance Smart Chain' },
    { icon: PolygonIcon, name: 'Polygon' },
    { icon: ArbitriumIcon, name: 'Arbitrum' },
    { icon: KaiaIcon, name: 'Kaia' },
    { icon: StoryIcon, name: 'Story' },
    { icon: CoreIcon, name: 'Core' },
    { icon: MoreMainnetsIcon, name: 'More Mainnets' },
  ];

  return (
    <section
      ref={ref}
      className={`mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-[40px] mx-auto">
        <div className="lg:flex-1">
          <div className="space-y-4 mb-14 lg:mb-[120px]">
            <h2 className="text-center lg:text-left text-headline-sm lg:text-headline-lg font-bold">
              다양한 자산을 지원합니다
            </h2>
            <p className="text-center lg:text-left text-body-md lg:text-body-xl font-normal lg:font-medium">
              15개 이상의 메인넷에 발행된 자산을 보관하세요
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 mb-8 [&>*:last-child_span]:text-gray-300">
            {mainnetAssets.map((asset, index) => (
              <div
                key={index}
                className="flex flex-col items-center py-6 px-6 border border-gray-50 rounded-[4px] space-y-2.5"
              >
                <div className="flex justify-center items-center w-12 h-12 lg:w-14 lg:h-14">
                  <asset.icon className="w-full h-full" />
                </div>
                <span className="text-center text-body-sm lg:text-body-lg">{asset.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center lg:text-right text-caption-lg font-medium text-[var(--color-gray-500)]">
            현재 지원하지 않는 메인넷도 신속하게 지원됩니다.
            <br />
            (EVM 계열은 1주 이내, 그외는 2~3주 이내로 지원)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
