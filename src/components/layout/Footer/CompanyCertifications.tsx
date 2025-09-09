import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Isms from '@/public/assets/images/img_isms_bw.png';
import Certification from '@/public/assets/icons/img_certification_bw.svg';

const CompanyCertifications = async () => {
  const t = await getTranslations('footer');

  return (
    <div className="flex flex-row gap-6">
      <Image src={Isms} width={113} height={103} alt={t('certifications.isms')} />
      <Certification aria-label={t('certifications.other')} />
    </div>
  );
};

export default CompanyCertifications;
