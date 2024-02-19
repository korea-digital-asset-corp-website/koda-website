import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import { colors } from "src/styles/colors";
import { H1Pre, Body1Pre } from "src/components/Typography";
import { translate } from "src/locales";
import { media, mobileWidth, desktopWidth } from "src/utils/media";
import images from "src/images";
import TypeformButton from "src/components/button/TypeformButton";
import PrimaryButton from "../button/PrimaryButton";
import { typeformUri } from "src/utils/uri";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  min-width: 2580px;
  background: #02030d;
  height: 858px;
  margin-top: 107px;
  ${media.mobile`
    min-width: auto;
    height: 670px;
    margin-top: 56px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1168px;
  height: 858px;
  margin: auto;
  ${media.desktop``}
  ${media.mobile`
    flex-direction: column;
    height: 670px;
  `}
`;

const LeftGroup = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  ${media.mobile`
    position: absolute;
    top: 161px;
    bottom: 82px;
    left: 0;
    right: 0;
    width: 100%;
    height: 455px;
    align-items: center;
  `}
`;

const IntroDesktopImage = styled.img`
  position: absolute;
  top: 0px;
  left: -293px;
  width: 1753px;
  height: 858px;
`;

const IntroMobileImage = styled.img`
  width: 599px;
  height: 670px;
  object-fit: contain;
`;

const RightGroup = styled.div`
  display: flex;
  flex: 1;
  z-index: 10;
  ${media.desktop`
    margin-left: 6px;
  `}
`;

const InnerRightGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.mobile`
    width: 100%;
    justify-content: flex-start;
    margin-top: 100px;
  `}
`;

const Title = styled(H1Pre)`
  color: ${colors.text1.light};
  margin-bottom: 28px;
  ${media.mobile`
    text-align: center;
    min-height: auto;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  `}
`;

const Description = styled(Body1Pre)`
  color: ${colors.text2.light};
  ${media.mobile`
    width: 327px;
    white-space: normal;
    align-self: center;
    text-align: center;
  `}
`;

const Link = styled(TypeformButton)`
  margin-top: 32px;
  ${media.mobile`
    margin-top: 20px;
  `}
`;

const ServiceButton = styled(PrimaryButton)`
  width: 194px;
  min-height: 64px;
  padding: 20px 30px;
  text-align: center;
  ${media.mobile`
    width: 147px;
    min-height: 52px;
    padding: 16px 20px;
    margin: auto;
  `}
`;

const IntroSection = (props: Props) => {
  const { t } = props;

  const onLink = () => {
    gTagEvent({
      category: CategoryType.Intro,
      action: ActionType.CTA,
    });
  };

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <MediaQuery maxWidth={mobileWidth}>
            <IntroMobileImage alt={"introMobile"} src={images.mobileIntroSrc} />
          </MediaQuery>
          <MediaQuery minWidth={desktopWidth}>
            <IntroDesktopImage alt={"introDesktop"} src={images.introSrc} />
          </MediaQuery>
        </LeftGroup>
        <RightGroup>
          <InnerRightGroup>
            <Title>{`법인·기관을 위한
가장 신뢰할 수 있는
디지털 자산 파트너`}</Title>
            <Description>
              {`비트코인 수탁 등 법인·기관 투자자를 위한 
디지털 자산 수탁 원스탑 서비스를 제공합니다.`}
            </Description>
            <Link typeformUri={typeformUri} onClick={onLink}>
              <ServiceButton name={"서비스 문의하기"} />
            </Link>
          </InnerRightGroup>
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(IntroSection);
