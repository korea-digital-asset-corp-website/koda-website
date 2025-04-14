import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import { H2, H1Pre, Body1Pre, H4 } from "src/components/Typography";
import images from "src/images";
import { translate } from "src/locales";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import TypeformButton from "src/components/button/TypeformButton";
import { colors } from "src/styles/colors";
import PrimaryButton from "../button/PrimaryButton";
import { typeformUri } from "src/utils/uri";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";

type Props = WithTranslation;

const Container = styled.div`
  position: relative;
  display: flex;
  min-width: 2580px;
  margin-top: 240px;
  margin-bottom: 161px;
  ${media.mobile`
    min-width: auto;
    margin-top: 0px;
    margin-bottom: 76px;
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
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

const LeftGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  ${media.mobile`
    align-items: center;
  `}
`;

const InnerLeftGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 625px;
  margin-right: 103px;
  ${media.mobile`
    width: 327px;
    padding-top: 32px;
    margin-right: 0px;
  `}
`;

const Title = styled(H2)`
  color: ${colors.text1.dark};
  margin-bottom: 40px;
  ${media.mobile`
    letter-spacing: -0.01em;
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
  margin-top: 56px;
  ${media.mobile`
    margin-top: 30px;
  `}
`;

const ServiceButton = styled(PrimaryButton)`
  padding: 20px 30px;
`;

const RightGroup = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${media.mobile`
    align-items: center;
    width: 375px;
    height: 375px;
  `}
`;

const ConsignmentImage = styled.img`
  position: absolute;
  top: 60px;
  width: 333px;
  height: 436px;
  z-index: 1;
  ${media.mobile`
    position: static;
    width: 207px;
    height: 274px;
    margin-top: 56px;
  `}
`;

const BGImage = styled.div`
  position: absolute;
  top: 0px;
  left: 73px;
  width: 1064px;
  height: 600px;
  background: #f5f5f5;
  z-index: 0;
  ${media.mobile`
    width: 600px;
    height: 288px;
    left: auto;
  `}
`;

const ConsignmentSection = (props: Props) => {
  const { t } = props;

  const onLink = () => {
    gTagEvent({
      category: CategoryType.Service,
      action: ActionType.CTA,
      label: "디지털 자산 수탁",
    });
  };

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <InnerLeftGroup>
            <Title>디지털 자산 수탁</Title>
            <Item>
              <Label>콜드월렛 보관</Label>
              <Value>
                모든 자산은 인터넷과 완전히 단절된 콜드월렛에서 안전하게
                보관됩니다.
              </Value>
            </Item>
            <Item>
              <Label>MPC 시스템</Label>
              <Value>{`하나의 키를 분실하거나 유출되어도 자산이 탈취되지 않으며
복구가 가능합니다.`}</Value>
            </Item>
            <Item>
              <Label>제 1금융권 수준의 내부 통제 기능</Label>
              <Value>
                시중은행 전산센터 수준의 시설 보안을 구축하고 운영하고 있습니다.{" "}
              </Value>
            </Item>
            <MediaQuery minWidth={desktopWidth}>
              <Link typeformUri={typeformUri} onClick={onLink}>
                <ServiceButton name={"서비스 문의하기"} />
              </Link>
            </MediaQuery>
          </InnerLeftGroup>
        </LeftGroup>
        <RightGroup>
          <ConsignmentImage
            alt={"consignmentBg"}
            src={images.consignmentBgSrc}
            srcSet={images.consignmentBg}
          />
          <BGImage />
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(ConsignmentSection);
