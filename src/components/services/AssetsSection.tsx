'use client';

import { useTranslations } from 'next-intl';
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
import CoreIcon from '@/public/assets/icons/services_core.svg';
import AptosIcon from '@/public/assets/icons/services_aptos.svg';
import MoreMainnetsIcon from '@/public/assets/icons/services_mainnets.svg';

const AssetsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('service.assets');

  const mainnetAssets = [
    { icon: BitcoinIcon, name: 'Bitcoin' },
    { icon: EthereumIcon, name: 'Ethereum' },
    { icon: BaseIcon, name: 'Base' },
    { icon: SolanaIcon, name: 'Solana' },
    { icon: BinanceSmartChainIcon, name: 'Binance Smart Chain' },
    { icon: Avalanche, name: 'Avalanche' },
    { icon: AptosIcon, name: 'Aptos' },
    { icon: ArbitriumIcon, name: 'Arbitrum' },
    { icon: PolygonIcon, name: 'Polygon' },
    { icon: KaiaIcon, name: 'Kaia' },
    { icon: CoreIcon, name: 'Core' },
    { icon: MoreMainnetsIcon, name: t('mainnets.more') },
  ];

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-[40px] mx-auto">
        <div className="lg:flex-1">
          <div className="space-y-3 lg:space-y-4 mb-14 lg:mb-[120px]">
            <h2 className="text-left text-headline-sm lg:text-headline-lg font-bold">{t('title')}</h2>
            <p className="text-left font-medium lg:font-normal text-gray-700 text-body-md lg:text-body-xl">
              {t('description')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 mb-3 lg:mb-8 [&>*:last-child_span]:text-gray-300">
            {mainnetAssets.map((asset, index) => (
              <div
                key={index}
                className="flex flex-col items-center pt-8 pb-6 border border-gray-50 bg-white rounded-[4px] space-y-2.5"
              >
                <div className="flex justify-center items-center w-12 h-12 lg:w-14 lg:h-14">
                  <asset.icon className="w-full h-full" />
                </div>
                <span className="text-center text-gray-800 text-body-sm lg:text-body-lg">{asset.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center lg:text-right text-caption-lg font-medium text-[var(--color-gray-500)] whitespace-pre-line lg:whitespace-normal">
            {t('notice')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
