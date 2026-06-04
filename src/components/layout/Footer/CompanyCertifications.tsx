import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Isms from '@/public/assets/images/img_isms_bw.png';
import Certification from '@/public/assets/icons/img_certification_bw.svg';
import VentureIcon from '@/public/assets/icons/ventureicon.svg';
import Soc from '@/public/assets/images/img_soc_footer.png';

const CompanyCertifications = async () => {
  const t = await getTranslations('footer');

  return (
    <div className="grid grid-cols-[auto_auto] justify-start place-items-start gap-7 sm:flex sm:flex-row sm:place-items-stretch lg:gap-10">
      <Image src={Isms} width={95} height={86} alt={t('certifications.isms')} className="lg:w-[113px] lg:h-[103px]" />
      <Certification className="w-[72px] h-[86px] lg:w-[85px] lg:h-[102px]" aria-label={t('certifications.other')} />
      <VentureIcon className="w-[101px] h-[85px] lg:w-[120px] lg:h-[101px]" aria-label={t('certifications.venture')} />
      <Image src={Soc} width={95} height={86} alt={t('certifications.soc')} className="lg:w-[113px] lg:h-[103px]" />
    </div>
  );
};

export default CompanyCertifications;
