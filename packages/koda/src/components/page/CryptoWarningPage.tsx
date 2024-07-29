import React from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { colors } from "src/styles/colors";
import OtherHeader from "src/components/OtherHeader";
import Footer from "src/components/Footer";
import { H3, Body2Pre, Body2Li } from "src/components/Typography";
import { media } from "src/utils/media";

const Container = styled(Layout)`
  background-color: ${colors.white};
  overflow: hidden;
  ${media.mobile`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 1168px;
  margin: auto;
  padding-top: 227px;
  background-color: ${colors.white};
  ${media.mobile`
    max-width: 375px;
    flex-direction: column;
    padding-top: 112px;
  `}
`;

const ContentHeader = styled.div`
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 40px;
  `}
`;

const Title = styled(H3)`
  color: ${colors.text1.dark};
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 40px;
  `}
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 60px;
  ${media.mobile`
    margin-bottom: 56px;
  `}
`;

const Description = styled(Body2Pre)`
  color: ${colors.text2.dark};
  word-break: keep-all;
  ${media.mobile`
  word-break: break-all;
  `}
`;

const OrderedList = styled.ol`
  margin: 0;

  & > li:not(:last-child) {
    margin-bottom: 16px;
  }

  ${media.mobile`
    padding-left: 30px;
  `}
`;
const ListItem = styled(Body2Li)`
  color: ${colors.text2.dark};
  word-break: keep-all;
`;
const UnorderedList = styled.ul`
  padding-left: 20px;
  & > li {
    margin-top: 16px;
  }

  ${media.mobile`
    padding-left: 15px;
  `}
`;

const FooterView = styled(Footer)`
  min-width: auto;
  margin-top: 176px;
  ${media.mobile`
    margin-top: -8px;
    .inner-footer {
      padding-left: 0px;
    }
  `}
`;

const CryptoWarningPage = () => {
  return (
    <React.Fragment>
      <Container id="outer-container">
        <OtherHeader />
        <Content id="page-box">
          <ContentHeader>
            <Title>가상자산 거래에 관한 유의사항</Title>
            <Description>
              {`최근 가상자산에 대한 관심과 무리한 투자 및 관련 범죄에 대한 우려도 증가하고 있습니다. 본 고지는 고객님들이 가상자산을 거래하거나 보유할 때 발생할 수 있는 대표적인 위험을 안내하기 위함입니다.`}
            </Description>
          </ContentHeader>
          <Section>
            <OrderedList>
              <ListItem>
                {`가상자산은 법정화폐가 아니므로 특정 주체가 가치를 보장하지 않습니다.`}
              </ListItem>
              <ListItem>{`가상자산은 365일 24시간 전세계에서 거래되며, 시장의 수요공급, 각 가상자산의 정책, 국가별 법령 및 제도, 네트워크 상황 등 다양한 요인으로 급격한 시세 변동이 발생할 수 있습니다.`}</ListItem>
              <ListItem>{`가상자산은 가격 변동폭에 제한이 없으므로 원금손실 가능성이 있음을 특히 유의하시기 바랍니다.`}</ListItem>
              <ListItem>{`가상자산은 예금자보호법의 적용을 받지 않습니다.`}</ListItem>
              <ListItem>
                {`'전기통신금융사기, 유사수신 및 다단계, 피싱 사기'를 주의하시기 바랍니다.`}
                <UnorderedList>
                  <ListItem>{`금융기관이나 수사기관을 사칭하며 송금을 요청하거나 계정 대여를 요구하는 행위, 에어드랍등을 이유로 투자를 유인하는 행위는 전기통신금융사기, 유사수신 및 다단계에 해당할 수 있으므로 주의가 필요합니다.`}</ListItem>
                  <ListItem>{`KODA는 고객의 비밀번호, OTP, SMS/ARS인증 등을 절대 요구하지 않으며, 고객을 대신해 로그인을 하지 않습니다.`}</ListItem>
                  <ListItem>{`전기통신금융사기, 유사수신 및 다단계, 피싱사기 피해 예방을 위하여 각별히 주의해 주시길 당부드립니다.`}</ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </Section>
          <Section>
            <Description>{`위 사항들은 가상자산 거래에 수반되는 위험등에 대해 간략하게 서술한 것으로 가상자산 거래와 관련된 모든 위험을 기술한 것은 아닙니다. 또한 본 고지내용은 국내외 관련법규 등에 우선하지 못한다는 점을 양지하여 주시기 바랍니다.`}</Description>
          </Section>
          <FooterView />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default CryptoWarningPage;
