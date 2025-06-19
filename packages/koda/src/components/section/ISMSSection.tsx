import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import images from "src/images";
import { media } from "src/utils/media";
import { H2Pre, Body1Pre, CaptionPre } from "src/components/Typography";
import { colors } from "src/styles/colors";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  padding-top: 167px;
  padding-bottom: 97px;
  ${media.mobile`
    min-width: auto;
    padding-top: 84px;
    padding-bottom: 40px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1168px;
  margin: auto;
  ${media.mobile`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  `}
`;

const ISMSImage = styled.img`
  width: 400px;
  height: 400px;
  ${media.mobile`
    width: 272px;
    height: 272px;
    margin-bottom: 20px;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 585px;
  margin-left: 138px;
  ${media.mobile`
    justify-content: center;
    min-width: auto;
    width: 327px;
    margin-left: 0px;
  `}
`;

const Title = styled(H2Pre)`
  color: ${colors.text1.dark};
  margin-bottom: 20px;
  ${media.mobile`
    margin-bottom: 16px;
  `}
`;

const Description = styled(Body1Pre)`
  color: ${colors.text2.dark};
  margin-bottom: 24px;
  ${media.mobile`
    white-space: normal;
    word-wrap: normal;
    word-break: normal;
    margin-bottom: 12px;
  `}
`;

const Caption = styled(CaptionPre)`
  color: ${colors.text3.dark};
`;

const ISMSSection = (props: Props) => {
  const { i18n, t } = props;

  return (
    <Container>
      <Inner>
        <ISMSImage alt={"isms"} src={images.ismsLogo} />
        <Content>
          <Title>안심하고 보관하세요.</Title>
          <Description>
            {`한국디지털에셋은 국내 가상자산 법규를 철저하게 준수하고 있습니다.
2021년 9월 1일자로 정보보호 관리체계 인증(ISMS)을 획득하였으며,
2021년 12월 16일 가상자산사업자(VASP) 신고를 완료하였습니다. (인증번호 ISMS-KISA-2021-140)`}
          </Description>
          <Caption>{`ISMS 인증범위: 가상자산 수탁 서비스(심사받지 않은 물리적 인프라 제외)
유효기간: 2024-09-01 ~ 2027-08-31 `}</Caption>
        </Content>
      </Inner>
    </Container>
  );
};

export default withTranslation()(ISMSSection);
