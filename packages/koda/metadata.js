/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require("lodash");
const isProduction = process.env.GATSBY_ENV === "production";

const metadata = {
  description: `한국디지털에셋(KODA, 코다)는 KB국민은행이 직접 출자한 법인으로, 비트코인 수탁 등 법인·기관 투자자를 위한 디지털 자산 원스탑 서비스를 제공합니다.`,
  keywords:
    "KODA, 코다, 한국디지털에셋, 가상자산, 커스터디, 국민은행, KB국민은행, 해시드, hashed, 법인·기관 투자자, 비트코인, 수탁, 디지털 자산, 테슬라 비트코인, 암호화폐, 넥슨 비트코인, 가상자산사업자, 보관사업자",
  og_image: "https://kodax.com/meta_img.png",
  siteUrl: "https://kodax.com",
  title:
    "한국디지털에셋(KODA, 코다) | 법인·기관 투자자를 위한 디지털 자산 파트너",
  titleTemplate: "%s",
  logo: "src/images/logo/logo.png",
  backgroundColor: `#fff`,
  themeColor: `#060607`,
};

const siteMetadataMap = _.cond([
  [_.matches({ isProduction: false }), _.constant(metadata)],
  [_.matches({ isProduction: true }), _.constant(metadata)],
]);

module.exports = siteMetadataMap({ isProduction });
