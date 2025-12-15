import {
  AchievementSection,
  ContactSection,
  HeroSection,
  InsuranceSection,
  InvestorsSection,
  MarketStatsSection,
  MediaSection,
  SecuritySection,
  SolutionsSection,
} from '@/components/home';
import { ImagePopup } from '@/components/modal/ImagePopup';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  const desktopImage =
    locale === 'en' ? '/assets/images/img_fundraisng_popup_en.png' : '/assets/images/img_fundraisng_popup_kr.png';

  const mobileImage =
    locale === 'en' ? '/assets/images/img_fundraisng_popup_en_m.png' : '/assets/images/img_fundraisng_popup_kr_m.png';

  return (
    <>
      <HeroSection />
      <AchievementSection />
      <InvestorsSection />
      <MarketStatsSection />
      <SecuritySection />
      <InsuranceSection />
      <SolutionsSection />
      <MediaSection />
      <ContactSection />

      <ImagePopup
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        imageAlt="KODA POPUP"
        backgroundColor="bg-white/60"
      />
    </>
  );
};

export default Page;
