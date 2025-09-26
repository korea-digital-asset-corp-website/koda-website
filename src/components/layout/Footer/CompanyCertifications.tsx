import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Isms from '@/public/assets/images/img_isms_bw.png';
import Certification from '@/public/assets/icons/img_certification_bw.svg';
import VentureIcon from '@/public/assets/icons/ventureicon.svg';

const CompanyCertifications = async () => {
  const t = await getTranslations('footer');

  return (
    <div className="flex flex-row gap-7 lg:gap-10">
      <Image src={Isms} width={95} height={86} alt={t('certifications.isms')} className="lg:w-[113px] lg:h-[103px]" />
      <Certification className="w-[72px] h-[86px] lg:w-[85px] lg:h-[102px]" aria-label={t('certifications.other')} />
      <VentureIcon className="w-[101px] h-[85px] lg:w-[120px] lg:h-[101px]" aria-label={t('certifications.venture')} />
    </div>
  );
};

export default CompanyCertifications;
