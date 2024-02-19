import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import { Body2, H1Pre, Body1Pre, H2, H4 } from "src/components/Typography";
import images from "src/images";
import { translate } from "src/locales";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import LinkButton from "src/components/button/LinkButton";
import TypeformButton from "src/components/button/TypeformButton";
import { colors } from "src/styles/colors";
import PrimaryButton from "src/components/button/PrimaryButton";
import { typeformUri } from "src/utils/uri";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";

type Props = WithTranslation;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 2580px;
  padding-top: 121px;
  padding-bottom: 190px;
  ${media.mobile`
    min-width: auto;
    padding-top: 0px;
    padding-bottom: 76px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1168px;
  margin: auto;
  ${media.desktop``}
  ${media.mobile`
    width: auto;
    height: auto;
    flex-direction: column;
    align-items: center;
  `}
`;

const LeftGroup = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.mobile`
    width: 375px;
  `}
`;

const DealingImage = styled.img`
  position: absolute;
  top: 250px;
  right: 84px;
  width: 549px;
  height: 459px;
  z-index: 1;
  ${media.mobile`
    position: static;
    display: flex;
    width: 333px;
    height: 230px;
    margin-top: 56px;
    align-self: center;
  `}
`;

const BGImage = styled.div`
  position: absolute;
  top: 220px;
  right: 216px;
  width: 1064px;
  height: 600px;
  background: #f5f5f5;
  z-index: 0;
  ${media.mobile`
    width: 600px;
    height: 250px;
    top: 0px;
    right: auto;
  `}
`;

const RightGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  ${media.mobile`
    align-items: center;
  `}
`;

const InnerRightGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-top: 220px;
  ${media.mobile`
    align-items: flex-start;
    width: 327px;
    padding-left: 0px;
    padding-top: 32px;
  `}
`;

const Title = styled(H2)`
  color: ${colors.text1.dark};
  margin-bottom: 40px;
  ${media.mobile`
    margin-bottom: 24px;
  `}
`;

const Item = styled.div`
  margin-bottom: 24px;
  ${media.mobile`
    margin-bottom: 20px;
  `}
`;

const Label = styled(H4)`
  color: ${colors.text2.dark};
  margin-bottom: 8px;
  ${media.mobile`
    margin-bottom: 4px;
  `}
`;

const Value = styled(Body1Pre)`
  color: ${colors.text3.dark};
  ${media.mobile`
    white-space: normal;
  `}
`;

const Link = styled(TypeformButton)`
  width: 194px;
  margin-top: 56px;
  ${media.mobile`
    margin-top: 30px;
  `}
`;

const ServiceButton = styled(PrimaryButton)`
  padding: 20px 30px;
`;

const DealingSection = (props: Props) => {
  const { t } = props;

  const onLink = () => {
    gTagEvent({
      category: CategoryType.Service,
      action: ActionType.CTA,
      label: "디지털 자산 매매 중개",
    });
  };

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <MediaQuery minWidth={desktopWidth}>
            <DealingImage
              alt={"dealBg"}
              src={images.dealingBgSrc}
              srcSet={images.dealingBg}
            />
          </MediaQuery>
          <MediaQuery maxWidth={mobileWidth}>
            <DealingImage
              alt={"dealBg"}
              src={images.dealingBgSrc}
              srcSet={images.dealingBg}
            />
          </MediaQuery>
          <BGImage />
        </LeftGroup>
        <RightGroup>
          <InnerRightGroup>
            <Title>{`디지털 자산 매매 중개`}</Title>
            <Item>
              <Label>신뢰할 수 있는 거래상대방</Label>
              <Value>{`한국디지털 에셋은 KB국민은행이 직접 출자한
신뢰할 수 있는 법인입니다.`}</Value>
            </Item>
            <Item>
              <Label>풍부한 유동성</Label>
              <Value>{`KODA의 엄격한 기준을 통과한 유동성 파트너들을 통하여
법인, 기관투자자의 수요에 맞게 풍부한 유동성을 지원합니다.`}</Value>
            </Item>
            <Item>
              <Label>다양한 구매 조건</Label>
              <Value>
                {`고객이 원하는 기간 동안 원하는 조건에 맞춰 매매할 수 있습니다.`}
              </Value>
            </Item>
            <MediaQuery minWidth={desktopWidth}>
              <Link typeformUri={typeformUri} onClick={onLink}>
                <ServiceButton name={"서비스 문의하기"} />
              </Link>
            </MediaQuery>
          </InnerRightGroup>
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(DealingSection);
