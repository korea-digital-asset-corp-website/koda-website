const makeSrcSet = (src: string) => {
  return `${`${src}.jpg`} 600w,
  ${`${src}@2x.jpg`} 1024w,
  ${`${src}@3x.jpg`} 1440w`;
};

const makeSrcSetMAX2x = (src: string) => {
  return `${`${src}.jpg`} 600w,
  ${`${src}@2x.jpg`} 1024w,
  ${`${src}@2x.jpg`} 1440w`;
};

const makeSrcSetSVG = (src: string) => {
  return `${`${src}.svg`} 600w,
  ${`${src}.svg`} 1024w,
  ${`${src}.svg`} 1440w`;
};

const makeSrcSVG = (src: string) => {
  return `${src}.svg`;
};

const makeSrcJPG = (src: string) => {
  return `${src}@2x.jpg`;
};

const makeSrcPNG = (src: string) => {
  return `${src}@2x.png`;
};

const images = {
  feature1Src: makeSrcJPG("images/feature1"),
  feature1: makeSrcSet("images/feature1"),
  mobileFeature1Src: makeSrcJPG("images/mobile_feature1"),
  mobileFeature1: makeSrcSet("images/mobile_feature1"),
  feature2Src: makeSrcJPG("images/feature2"),
  feature2: makeSrcSet("images/feature2"),
  mobileFeature2Src: makeSrcJPG("images/mobile_feature2"),
  mobileFeature2: makeSrcSet("images/mobile_feature2"),
  feature3Src: makeSrcJPG("images/feature3"),
  feature3: makeSrcSet("images/feature3"),
  mobileFeature3Src: makeSrcJPG("images/mobile_feature3"),
  mobileFeature3: makeSrcSet("images/mobile_feature3"),
  introSrc: makeSrcPNG("images/intro"),
  mobileIntroSrc: makeSrcPNG("images/mobile_intro"),
  hashedLogoSrc: makeSrcSetSVG("images/hashed_logo"),
  hashedLogo: makeSrcSetSVG("images/hashed_logo"),
  mobileHashedLogoSrc: makeSrcJPG("images/mobile_hashed_logo"),
  mobileHashedLogo: makeSrcSet("images/mobile_hashed_logo"),
  mobileKbLogoSrc: makeSrcJPG("images/mobile_kb_logo"),
  mobileKbLogo: makeSrcSet("images/mobile_kb_logo"),
  haechilabsLogoSrc: makeSrcSetSVG("images/haechilabs_logo"),
  haechilabsLogo: makeSrcSetSVG("images/haechilabs_logo"),
  mobileHaechilabsLogoSrc: makeSrcJPG("images/mobile_haechilabs_logo"),
  mobileHaechilabsLogo: makeSrcSet("images/mobile_haechilabs_logo"),
  ismsLogo: makeSrcPNG("images/isms_logo"),
  mobileIsmsLogo: makeSrcPNG("images/mobile_isms_logo"),
  localeSrc: makeSrcSVG("images/locale"),
  locale: makeSrcSetSVG("images/locale"),
  kodaA: makeSrcJPG("images/koda_a"),
  mobileKodaA: makeSrcJPG("images/mobile_koda_a"),
  closeSrc: makeSrcSVG("images/close"),
  close: makeSrcSetSVG("images/close"),
  keyboardArrowDownSrc: makeSrcSVG("images/keyboard_arrow_down"),
  keyboardArrowDown: makeSrcSetSVG("images/keyboard_arrow_down"),
  keyboardArrowUpSrc: makeSrcSVG("images/keyboard_arrow_up"),
  keyboardArrowUp: makeSrcSetSVG("images/keyboard_arrow_up"),
  keyboardArrowRightSrc: makeSrcSVG("images/keyboard_arrow_right"),
  keyboardArrowRight: makeSrcSetSVG("images/keyboard_arrow_right"),
  newsChosunSrc: makeSrcSVG("images/news_chosun"),
  newsChosun: makeSrcSetSVG("images/news_chosun"),
  newsCoindeskSrc: makeSrcSVG("images/news_coindesk"),
  newsCoindesk: makeSrcSetSVG("images/news_coindesk"),
  newsMaekyungSrc: makeSrcSVG("images/news_maekyung"),
  newsMaekyung: makeSrcSetSVG("images/news_maekyung"),
  news1Src: makeSrcPNG("images/news1"),
  news2Src: makeSrcPNG("images/news2"),
  news3Src: makeSrcPNG("images/news3"),
  news4Src: makeSrcPNG("images/news4"),
  news5Src: makeSrcPNG("images/news5"),
  news6Src: makeSrcPNG("images/news6"),
  news7Src: makeSrcPNG("images/news7"),
  news8Src: makeSrcPNG("images/news8"),
  news9Src: makeSrcPNG("images/news9"),
  news10Src: makeSrcPNG("images/news10"),
  news11Src: makeSrcPNG("images/news11"),
  news12Src: makeSrcPNG("images/news12"),
  kbLogoSrc: makeSrcSVG("images/kb_logo"),
  kbLogo: makeSrcSetSVG("images/kb_logo"),
  kbLogoBlackSrc: makeSrcSVG("images/kb_logo_black"),
  kbLogoBlack: makeSrcSetSVG("images/kb_logo_black"),
  consignmentBgSrc: makeSrcSVG("images/consignment_bg"),
  consignmentBg: makeSrcSetSVG("images/consignment_bg"),
  dashboardstructureBgSrc: makeSrcPNG("images/dashboardstructure_bg"),
  mobileDashboardstructureBgSrc: makeSrcPNG(
    "images/mobile_dashboardstructure_bg",
  ),
  emailLogoSrc: makeSrcSVG("images/email_logo"),
  emailLogo: makeSrcSetSVG("images/email_logo"),
  guidelineSrc: makeSrcSVG("images/guideline"),
  guideline: makeSrcSetSVG("images/guideline"),
  lawSrc: makeSrcSVG("images/law"),
  law: makeSrcSetSVG("images/law"),
  substractSrc: makeSrcPNG("images/substract"),
  dealingBgSrc: makeSrcSVG("images/dealing_bg"),
  dealingBg: makeSrcSetSVG("images/dealing_bg"),
  mobileDealingBgSrc: makeSrcSVG("images/mobile_dealing_bg"),
  mobileDealingBg: makeSrcSetSVG("images/mobile_dealing_bg"),
  kodaLogoSrc: makeSrcSVG("images/koda_logo"),
  kodaLogo: makeSrcSetSVG("images/koda_logo"),
  mobileKodaLogoSrc: makeSrcJPG("images/mobile_koda_logo"),
  mobileKodaLogo: makeSrcSet("images/mobile_koda_logo"),
  hamburgerSrc: makeSrcSVG("images/hamburger"),
  hamburger: makeSrcSetSVG("images/hamburger"),
  hamburgerCloseSrc: makeSrcSVG("images/hamburger_close"),
  hamburgerClose: makeSrcSetSVG("images/hamburger_close"),
};

export default images;
