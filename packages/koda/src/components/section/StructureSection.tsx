import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";

import { H2, H2Pre, Body1Pre, H4 } from "src/components/Typography";
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
  min-width: 2580px;
  height: 1144px;
  background-color: #f5f5f5;
  ${media.mobile`
    min-width: auto;
    height: auto;
    padding-top: 80px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1168px;
  margin: auto;
  ${media.desktop``}
  ${media.mobile`
    flex-direction: column;
    width: 327px;
  `}
`;

const LeftGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${media.mobile`
    align-items: center;
  `}
`;

const InnerLeftGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 562px;
  margin-right: 238px;
  ${media.mobile`
    align-items: flex-start;
    width: auto;
    margin-right: 0px;
  `}
`;

const Title = styled(H2Pre)`
  color: ${colors.text1.dark};
  margin-bottom: 40px;
  ${media.mobile`
    letter-spacing: -0.01em;
    margin-bottom: 24px;
  `}
`;

const Item = styled.div`
  width: 420px;
  margin-bottom: 24px;
  ${media.mobile`
    width: auto;
    max-width: 327px;
    margin-bottom: 20px;
  `}
`;

const LastItem = styled(Item)`
  ${media.mobile`
    margin-bottom: 40px;
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
  align-items: center;
  ${media.mobile`
    min-width: 375px;
    min-height: 305px;
    padding-right: 50px;
  `}
`;

const StructureImage = styled.img`
  height: 944px;
  margin-top: 200px;
  ${media.mobile`
    position: absolute;
    bottom: 0px;
    margin-top: 0px;
    width: 599px;
    height: 305px;
  `}
`;

const StructureSection = (props: Props) => {
  const { t } = props;

  const onLink = () => {
    gTagEvent({
      category: CategoryType.Service,
      action: ActionType.CTA,
      label: "법인을 위해 설계된 디지털 자산 관리 시스템",
    });
  };

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <InnerLeftGroup>
            <MediaQuery minWidth={desktopWidth}>
              <Title>{`법인을 위해 설계된 
디지털 자산 관리 시스템`}</Title>
            </MediaQuery>
            <MediaQuery maxWidth={mobileWidth}>
              <Title>{`법인을 위해 설계된 
디지털 자산 관리 시스템`}</Title>
            </MediaQuery>
            <Item>
              <Label>직무에 맞는 권한 분리</Label>
              <Value>{`법인 내 직위, 직무에 따라 권한을 부여하고 
결재선을 설정할 수 있습니다.`}</Value>
            </Item>
            <Item>
              <Label>편리한 자산관리</Label>
              <Value>{`법인이 보유한 자산 내역, 입출금 내역, 결재 
내역을 손쉽게 확인할 수 있습니다.`}</Value>
            </Item>
            <LastItem>
              <Label>이중 보안 시스템</Label>
              <Value>
                {`OTP 이중인증, IP 주소 화이트리스팅 기능으로 회사 자산 정보 역시 안전하게 보관됩니다.`}
              </Value>
            </LastItem>
            <MediaQuery minWidth={desktopWidth}>
              <Link typeformUri={typeformUri} onClick={onLink}>
                <ServiceButton name={"서비스 문의하기"} />
              </Link>
            </MediaQuery>
          </InnerLeftGroup>
        </LeftGroup>
        <RightGroup>
          <MediaQuery minWidth={desktopWidth}>
            <StructureImage
              alt={"structureImage"}
              src={images.dashboardstructureBgSrc}
            />
          </MediaQuery>
          <MediaQuery maxWidth={mobileWidth}>
            <StructureImage
              alt={"structureImage"}
              src={images.mobileDashboardstructureBgSrc}
            />
          </MediaQuery>
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(StructureSection);
