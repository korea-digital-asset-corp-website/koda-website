import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H2, H2Pre, Body1Pre, H3Pre, H4 } from "src/components/Typography";
import { translate } from "src/locales";
import { colors } from "src/styles/colors";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  padding-top: 218px;
  padding-bottom: 220px;
  ${media.mobile`
    min-width: auto;
    padding-top: 48px;
    padding-bottom: 76px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1168px;
  margin: auto;
  ${media.mobile`
    height: auto;
    align-items: center;
  `}
`;

const Title = styled(H2Pre)`
  color: ${colors.text1.dark};
  margin-bottom: 125px;
  ${media.mobile`
    letter-spacing: -0.01em;
    width: 330px;
    white-space: normal;
    word-break: normal;
    align-self: center;
    margin-bottom: 40px;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  ${media.mobile`
    flex-direction: column;
    width: 327px;
  `}
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  margin-right: 32px;
  ${media.mobile`
    width: 327px;
    margin-right: 0px;
    margin-bottom: 32px;
  `}
`;

const LastCardItem = styled(CardItem)`
  margin-right: 0px;
`;

const ProceedingCircle = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: #e8e8e8;
  margin-bottom: 44px;
  ${media.mobile`
    margin-bottom: 20px;
  `}
`;

const ProceedingIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const ProceedingTitle = styled(H4)`
  color: ${colors.text2.dark};
  margin-bottom: 8px;
  ${media.mobile`
    margin-bottom: 4px;
  `}
`;

const ProceedingDescription = styled(Body1Pre)`
  color: ${colors.text3.dark};
  white-space: normal;
`;

const ProceedingSection = (props: Props) => {
  const { i18n, t } = props;

  return (
    <Container>
      <Inner>
        <Title>{`법률부터 회계, 세무까지
법인을 위한 원스톱 솔루션`}</Title>
        <Content>
          <CardItem>
            <ProceedingCircle>
              <ProceedingIcon
                alt={"proceedingIcon"}
                src={images.lawSrc}
                srcSet={images.law}
              />
            </ProceedingCircle>
            <ProceedingTitle>법률·회계·세무 자문</ProceedingTitle>
            <ProceedingDescription>
              {`법무법인, 회계법인과 협력하여 법인·기관투자자를 위한 종합 자문 서비스를 지원합니다.`}
            </ProceedingDescription>
          </CardItem>
          <CardItem>
            <ProceedingCircle>
              <ProceedingIcon
                alt={"proceedingIcon"}
                src={images.guidelineSrc}
                srcSet={images.guideline}
              />
            </ProceedingCircle>
            <ProceedingTitle>가이드라인 제공</ProceedingTitle>
            <ProceedingDescription>
              {`법인, 기관투자자가 비트코인을 수탁할 때에 필요한 의사결정 및 공시에 대한
가이드라인을 제공합니다.`}
            </ProceedingDescription>
          </CardItem>
          <LastCardItem>
            <ProceedingCircle>
              <ProceedingIcon
                alt={"proceedingIcon"}
                src={images.substractSrc}
              />
            </ProceedingCircle>
            <ProceedingTitle>증빙서류 발급</ProceedingTitle>
            <ProceedingDescription>
              {`외부 감사인에게 제출할 잔고증명서와 같은 증빙서류를 제공합니다.`}
            </ProceedingDescription>
          </LastCardItem>
        </Content>
      </Inner>
    </Container>
  );
};

export default withTranslation()(ProceedingSection);
