import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H4, H4Pre, Body1Pre } from "src/components/Typography";
import { colors } from "src/styles/colors";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  background: #3c3c3c;
  ${media.mobile`
    min-width: auto;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1168px;
  height: 389px;
  margin: auto;
  ${media.desktop`
    padding-left: 88px;
    padding-right: 136px;
  `}
  ${media.mobile`
    height: 348px;
  `}
`;

const KBLogo = styled.img`
  width: 285px;
  height: 47px;
  margin-bottom: 48px;
  object-fit: contain;
  ${media.mobile`
    width: 182px;
    height: 30px;
    margin-bottom: 32px;
  `}
`;

const Title = styled(H4Pre)`
  color: ${colors.text1.light};
  text-align: center;
  margin-bottom: 8px;
  ${media.mobile`
    align-self: center;
  `}
`;

const Content = styled(Body1Pre)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  color: ${colors.text2.light};
  ${media.mobile`
    width: 327px;
  `}
`;

const KBBankSection = (props: Props) => {
  const { i18n, t } = props;

  const onKBBankLink = () => {
    window.open("https://www.kbstar.com/");
  };

  return (
    <Container>
      <MediaQuery minWidth={desktopWidth}>
        <Inner>
          <KBLogo
            alt={"KBLogo"}
            src={images.kbLogoSrc}
            srcSet={images.kbLogo}
          />
          <Title>{`국내 금융기관이 설립한 디지털 자산 전문 기업`}</Title>
          <Content>{`금융권 수준의 준법감시, 자금세탁방지, 내부통제 체계를 운영하고 있습니다.`}</Content>
        </Inner>
      </MediaQuery>
      <MediaQuery maxWidth={mobileWidth}>
        <Inner>
          <KBLogo
            alt={"KBLogo"}
            src={images.kbLogoSrc}
            srcSet={images.kbLogo}
          />
          <Title>{`국내 금융기관이 설립한 디지털 자산 전문 기업`}</Title>
          <Content>{`금융권 수준의 준법감시, 자금세탁방지, 
내부통제 체계를 운영하고 있습니다.`}</Content>
        </Inner>
      </MediaQuery>
    </Container>
  );
};

export default withTranslation()(KBBankSection);
