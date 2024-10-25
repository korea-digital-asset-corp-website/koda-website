import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { colors } from "src/styles/colors";
import {
  Body1Pre,
  CaptionSpan,
  CaptionPre,
  h3MobileCSS,
  H3,
  H4,
  bodyFontFamily,
  Body2Pre,
} from "src/components/Typography";

type Props = {
  isOpen: boolean;
  onSubmit: () => void;
};

const Container = styled(Modal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding-left: 32px;
  padding-right: 32px;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 48px;
  background: #ffffff;
  /* Evaluation/level5 */

  box-shadow:
    0px 10px 15px rgba(54, 62, 76, 0.3),
    0px 10px 15px rgba(54, 62, 76, 0.1),
    0px 15px 40px rgba(54, 62, 76, 0.2);
  border-radius: 2px;
  ${media.mobile`
    max-width: 400px;
  `}
`;

const ISMSImage = styled.img`
  width: 265px;
  height: 223px;
  object-fit: contain;
  align-self: center;
  margin-bottom: 40px;
  ${media.mobile`
    width: 224px;
    height: 188px;
    margin-bottom: 36px;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 38px;
`;

const Title = styled(H4)`
  color: ${colors.text1.dark};
  margin-bottom: 16px;
`;

const Description = styled(Body2Pre)`
  color: ${colors.text2.dark};
  white-space: normal;
  word-wrap: normal;
  word-break: normal;
  margin-bottom: 16px;
`;

const Caption = styled(CaptionPre)`
  color: ${colors.text3.dark};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #313a45;
  background: #ffffff;
  border: 1px solid #d7dbe0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 14px 24px;
  cursor: pointer;
`;

const customStyles: any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    zIndex: 10,
  },
  content: {
    outline: 0,
  },
};

const ISMSModal = (props: Props) => {
  const { isOpen, onSubmit } = props;

  return (
    <React.Fragment>
      <Container
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onSubmit}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
      >
        <Inner>
          <ISMSImage alt={"isms"} src={images.mobileIsmsLogo} />
          <Content>
            <Title>안심하고 보관하세요.</Title>
            <Description>
              {`한국디지털에셋이 2021년 9월 1일자로 정보보호 관리체계 인증(ISMS)을 획득하였습니다. 국내 가상자산 법규를 철저하게 준수하는 한국디지털에셋에서 안심하고 서비스를 이용하세요.`}
            </Description>
            <Caption>{`ISMS 인증범위: 가상자산 수탁 서비스(심사받지 않은 물리적 인프라 제외)
유효기간: 2024-09-01 ~ 2027-08-31 `}</Caption>
          </Content>
          <Footer>
            <SubmitButton onClick={onSubmit}>확인</SubmitButton>
          </Footer>
        </Inner>
      </Container>
    </React.Fragment>
  );
};

export default ISMSModal;
