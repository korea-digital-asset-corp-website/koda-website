/* eslint-disable @typescript-eslint/no-var-requires */
const makeSrcSet = (src: string) => {
  return `${require(`${src}.jpg`).default} 600w,
  ${require(`${src}@2x.jpg`).default} 1024w,
  ${require(`${src}@3x.jpg`).default} 1440w`;
};

const makeSrcSetMAX2x = (src: string) => {
  return `${require(`${src}.jpg`).default} 600w,
  ${require(`${src}@2x.jpg`).default} 1024w,
  ${require(`${src}@2x.jpg`).default} 1440w`;
};

const makeSrcSetSVG = (src: string) => {
  return `${require(`${src}.svg`).default} 600w,
  ${require(`${src}.svg`).default} 1024w,
  ${require(`${src}.svg`).default} 1440w`;
};

const makeSrcSVG = (src: string) => {
  return require(`${src}.svg`).default;
};

const makeSrcJPG = (src: string) => {
  return require(`${src}@2x.jpg`).default;
};

const makeSrcPNG = (src: string) => {
  return require(`${src}@2x.png`).default;
};

const images = {
  feature1Src: makeSrcJPG("./feature1"),
  feature1: makeSrcSet("./feature1"),
  mobileFeature1Src: makeSrcJPG("./mobile_feature1"),
  mobileFeature1: makeSrcSet("./mobile_feature1"),
  feature2Src: makeSrcJPG("./feature2"),
  feature2: makeSrcSet("./feature2"),
  mobileFeature2Src: makeSrcJPG("./mobile_feature2"),
  mobileFeature2: makeSrcSet("./mobile_feature2"),
  feature3Src: makeSrcJPG("./feature3"),
  feature3: makeSrcSet("./feature3"),
  mobileFeature3Src: makeSrcJPG("./mobile_feature3"),
  mobileFeature3: makeSrcSet("./mobile_feature3"),
  introSrc: makeSrcPNG("./intro"),
  mobileIntroSrc: makeSrcPNG("./mobile_intro"),
  hashedLogoSrc: makeSrcSetSVG("./hashed_logo"),
  hashedLogo: makeSrcSetSVG("./hashed_logo"),
  mobileHashedLogoSrc: makeSrcJPG("./mobile_hashed_logo"),
  mobileHashedLogo: makeSrcSet("./mobile_hashed_logo"),
  mobileKbLogoSrc: makeSrcJPG("./mobile_kb_logo"),
  mobileKbLogo: makeSrcSet("./mobile_kb_logo"),
  haechilabsLogoSrc: makeSrcSetSVG("./haechilabs_logo"),
  haechilabsLogo: makeSrcSetSVG("./haechilabs_logo"),
  mobileHaechilabsLogoSrc: makeSrcJPG("./mobile_haechilabs_logo"),
  mobileHaechilabsLogo: makeSrcSet("./mobile_haechilabs_logo"),
  ismsLogo: makeSrcPNG("./isms_logo"),
  mobileIsmsLogo: makeSrcPNG("./mobile_isms_logo"),
  localeSrc: makeSrcSVG("./locale"),
  locale: makeSrcSetSVG("./locale"),
  kodaA: makeSrcJPG("./koda_a"),
  mobileKodaA: makeSrcJPG("./mobile_koda_a"),
  closeSrc: makeSrcSVG("./close"),
  close: makeSrcSetSVG("./close"),
  keyboardArrowDownSrc: makeSrcSVG("./keyboard_arrow_down"),
  keyboardArrowDown: makeSrcSetSVG("./keyboard_arrow_down"),
  keyboardArrowUpSrc: makeSrcSVG("./keyboard_arrow_up"),
  keyboardArrowUp: makeSrcSetSVG("./keyboard_arrow_up"),
  keyboardArrowRightSrc: makeSrcSVG("./keyboard_arrow_right"),
  keyboardArrowRight: makeSrcSetSVG("./keyboard_arrow_right"),
  newsChosunSrc: makeSrcSVG("./news_chosun"),
  newsChosun: makeSrcSetSVG("./news_chosun"),
  newsCoindeskSrc: makeSrcSVG("./news_coindesk"),
  newsCoindesk: makeSrcSetSVG("./news_coindesk"),
  newsMaekyungSrc: makeSrcSVG("./news_maekyung"),
  newsMaekyung: makeSrcSetSVG("./news_maekyung"),
  news1Src: makeSrcPNG("./news1"),
  news2Src: makeSrcPNG("./news2"),
  news3Src: makeSrcPNG("./news3"),
  news4Src: makeSrcPNG("./news4"),
  news5Src: makeSrcPNG("./news5"),
  news6Src: makeSrcPNG("./news6"),
  news7Src: makeSrcPNG("./news7"),
  news8Src: makeSrcPNG("./news8"),
  news9Src: makeSrcPNG("./news9"),
  news10Src: makeSrcPNG("./news10"),
  news11Src: makeSrcPNG("./news11"),
  news12Src: makeSrcPNG("./news12"),
  news13Src: makeSrcJPG("./news13"),
  news14Src: makeSrcPNG("./news14"),
  news15Src: makeSrcPNG("./news15"),
  news16Src: makeSrcJPG("./news16"),
  news17Src: makeSrcPNG("./news17"),
  news18Src: makeSrcPNG("./news18"),
  news19Src: makeSrcPNG("./news19"),
  news20Src: makeSrcPNG("./news20"),
  news21Src: makeSrcJPG("./news21"),
  kbLogoSrc: makeSrcSVG("./kb_logo"),
  kbLogo: makeSrcSetSVG("./kb_logo"),
  kbLogoBlackSrc: makeSrcSVG("./kb_logo_black"),
  kbLogoBlack: makeSrcSetSVG("./kb_logo_black"),
  consignmentBgSrc: makeSrcSVG("./consignment_bg"),
  consignmentBg: makeSrcSetSVG("./consignment_bg"),
  dashboardstructureBgSrc: makeSrcPNG("./dashboardstructure_bg"),
  mobileDashboardstructureBgSrc: makeSrcPNG("./mobile_dashboardstructure_bg"),
  emailLogoSrc: makeSrcSVG("./email_logo"),
  emailLogo: makeSrcSetSVG("./email_logo"),
  guidelineSrc: makeSrcSVG("./guideline"),
  guideline: makeSrcSetSVG("./guideline"),
  lawSrc: makeSrcSVG("./law"),
  law: makeSrcSetSVG("./law"),
  substractSrc: makeSrcPNG("./substract"),
  dealingBgSrc: makeSrcSVG("./dealing_bg"),
  dealingBg: makeSrcSetSVG("./dealing_bg"),
  mobileDealingBgSrc: makeSrcSVG("./mobile_dealing_bg"),
  mobileDealingBg: makeSrcSetSVG("./mobile_dealing_bg"),
  kodaLogoSrc: makeSrcSVG("./koda_logo"),
  kodaLogo: makeSrcSetSVG("./koda_logo"),
  mobileKodaLogoSrc: makeSrcJPG("./mobile_koda_logo"),
  mobileKodaLogo: makeSrcSet("./mobile_koda_logo"),
  hamburgerSrc: makeSrcSVG("./hamburger"),
  hamburger: makeSrcSetSVG("./hamburger"),
  hamburgerCloseSrc: makeSrcSVG("./hamburger_close"),
  hamburgerClose: makeSrcSetSVG("./hamburger_close"),
};

export default images;
