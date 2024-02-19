import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H2Pre, Body2 } from "src/components/Typography";
import { translate } from "src/locales";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 1440px;
  padding-top: 200px;
  padding-bottom: 100px;
  ${media.mobile`
    min-width: auto;
    padding-top: 100px;
    padding-bottom: 120px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1352px;
  height: 334px;
  margin: auto;
  ${media.desktop`
    padding-left: 92px;
    padding-right: 92px;
  `}
  ${media.mobile`
    height: auto;
  `}
`;

const Title = styled(H2Pre)`
  color: #151515;
  text-align: center;
  margin-bottom: 90px;
  ${media.mobile`
    width: 322px;
    align-self: center;
    margin-bottom: 16px;
  `}
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${media.mobile`
    flex-direction: column;
    justify-content: flex-start;
  `}
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const PartnerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.mobile`
    width: 360px;
    flex-direction: column;
    margin-top: 60px;
  `}
`;

const Logo = styled.div`
  ${media.mobile`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 129px;
  `}
  cursor: pointer;
`;

const KBLogo = styled.img`
  width: 239px;
  height: 49px;
  object-fit: contain;
  ${media.mobile`
    width: 195.1px;
    height: 40px;
  `}
`;

const HaechiLabsLogo = styled.img`
  width: 232px;
  height: 49px;
  ${media.mobile`
    width: 189.39px;
    height: 40px;
  `}
`;

const HashedLogo = styled.img`
  width: 211px;
  height: 49px;
  ${media.mobile`
    width: 172.24px;
    height: 40px;
  `}
`;

const PartnerTitle = styled(Body2)`
  color: #3f3f3f;
  margin-top: 16px;
  ${media.mobile`
    margin-top: 12px;
    text-align: center;
  `}
`;

const KBPartnerTitle = styled.div`
  ${media.mobile`
    width: 140px;
  `}
`;

type LogoType = "kbBank" | "haechilabs" | "hashed";

const PartnerSection = (props: Props) => {
  const { i18n, t } = props;
  const language = i18n.language;

  const onKBBankLink = () => {
    window.open("https://www.kbstar.com/");
  };

  const onHaechilabsLink = () => {
    window.open("https://haechi.io/");
  };

  const onHashedLink = () => {
    window.open("https://www.hashed.com/");
  };

  const renderPartnerItemByLanguageAndType = (
    language: string,
    type: LogoType
  ) => {
    const byLanguage: Record<
      LogoType,
      { KoPartnerItem: React.ReactNode; EnPartnerItem: React.ReactNode }
    > = {
      kbBank: {
        KoPartnerItem: (
          <PartnerItem>
            <Logo onClick={onKBBankLink}>
              <KBLogo
                alt={"KBLogo"}
                src={images.kbLogoBlackSrc}
                srcSet={images.kbLogoBlack}
              />
            </Logo>
            <PartnerTitle>
              <KBPartnerTitle>
                {translate(["partnerSection", "partner", "kbBank"], t)}
              </KBPartnerTitle>
            </PartnerTitle>
          </PartnerItem>
        ),
        EnPartnerItem: (
          <PartnerItem>
            <Logo onClick={onKBBankLink}>
              <KBLogo
                alt={"KBLogo"}
                src={images.kbLogoSrc}
                srcSet={images.kbLogo}
              />
            </Logo>
            <KBPartnerTitle>
              <KBPartnerTitle>
                {translate(["partnerSection", "partner", "kbBank"], t)}
              </KBPartnerTitle>
            </KBPartnerTitle>
          </PartnerItem>
        ),
      },
      haechilabs: {
        KoPartnerItem: (
          <PartnerItem>
            <Logo onClick={onHaechilabsLink}>
              <HaechiLabsLogo
                alt={"haechiLabsLogo"}
                src={images.haechilabsLogoSrc}
                srcSet={images.haechilabsLogo}
              />
            </Logo>
            <PartnerTitle>
              {translate(["partnerSection", "partner", "haechilabs"], t)}
            </PartnerTitle>
          </PartnerItem>
        ),
        EnPartnerItem: (
          <PartnerItem>
            <Logo onClick={onHaechilabsLink}>
              <HaechiLabsLogo
                alt={"haechiLabsLogo"}
                src={images.haechilabsLogoSrc}
                srcSet={images.haechilabsLogo}
              />
            </Logo>
            <PartnerTitle>
              {translate(["partnerSection", "partner", "haechilabs"], t)}
            </PartnerTitle>
          </PartnerItem>
        ),
      },
      hashed: {
        KoPartnerItem: (
          <PartnerItem>
            <Logo onClick={onHashedLink}>
              <HashedLogo
                alt={"hashedLogo"}
                src={images.hashedLogoSrc}
                srcSet={images.hashedLogo}
              />
            </Logo>
            <PartnerTitle>
              {translate(["partnerSection", "partner", "hashed"], t)}
            </PartnerTitle>
          </PartnerItem>
        ),
        EnPartnerItem: (
          <PartnerItem>
            <Logo onClick={onHashedLink}>
              <HashedLogo
                alt={"hashedLogo"}
                src={images.hashedLogoSrc}
                srcSet={images.hashedLogo}
              />
            </Logo>
            <PartnerTitle>
              {translate(["partnerSection", "partner", "hashed"], t)}
            </PartnerTitle>
          </PartnerItem>
        ),
      },
    };
    if (language === "ko") {
      return byLanguage[type].KoPartnerItem;
    }
    return byLanguage[type].EnPartnerItem;
  };

  return (
    <Container>
      <MediaQuery minWidth={desktopWidth}>
        <Inner>
          <Title>{translate(["partnerSection", "title"], t)}</Title>
          <RowContainer>
            {renderPartnerItemByLanguageAndType(language, "kbBank")}
            {renderPartnerItemByLanguageAndType(language, "haechilabs")}
            {renderPartnerItemByLanguageAndType(language, "hashed")}
          </RowContainer>
        </Inner>
      </MediaQuery>
      <MediaQuery maxWidth={mobileWidth}>
        <Inner>
          <Title>{translate(["partnerSection", "title"], t)}</Title>
          <RowContainer>
            <Row>{renderPartnerItemByLanguageAndType(language, "kbBank")}</Row>
            <Row>
              {renderPartnerItemByLanguageAndType(language, "haechilabs")}
            </Row>
            <Row>{renderPartnerItemByLanguageAndType(language, "hashed")}</Row>
          </RowContainer>
        </Inner>
      </MediaQuery>
    </Container>
  );
};

export default withTranslation()(PartnerSection);
