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

const page = async () => {
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
    </>
  );
};

export default page;
