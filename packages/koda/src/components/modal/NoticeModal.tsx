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
  Pre,
  h3MobileCSS,
  H3,
  H4,
  bodyFontFamily,
  Body2Pre,
  Body2Span,
  body2BoldCSS,
  Body2BoldSpan,
  Body1Bold,
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
  max-width: 1000px;
  height: 100%;
  max-height: 940px;
  padding: 48px;
  background: #ffffff;
  overflow: auto;
  /* Evaluation/level5 */

  box-shadow:
    0px 10px 15px rgba(54, 62, 76, 0.3),
    0px 10px 15px rgba(54, 62, 76, 0.1),
    0px 15px 40px rgba(54, 62, 76, 0.2);
  border-radius: 2px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 24px;
`;

const Title = styled(H4)`
  color: ${colors.text1.dark};
  margin-bottom: 16px;
`;

const Description = styled(Body2Pre)`
  color: ${colors.text2.dark};
  margin-bottom: 16px;

  & b {
    ${body2BoldCSS}
    color: ${colors.text1.dark};
  }
`;

const HighlightDescription = styled(Body2BoldSpan)`
  color: ${colors.text1.dark};
`;

const HighlightDescription2 = styled(Body2BoldSpan)`
  color: ${colors.text2.dark};
`;

const SubTitle = styled(Body1Bold)`
  color: ${colors.text1.dark};
`;

const IndentContent = styled(Pre)`
  padding-left: 20px;
  padding-right: 20px;
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
    padding: "20px 0",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    zIndex: 150,
  },
  content: {
    height: "100%",
    outline: 0,
  },
};

const NoticeModal = (props: Props) => {
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
          <Content>
            <Title>{"가상자산 입출금시 유의사항"}</Title>
            <Description
              dangerouslySetInnerHTML={{
                __html: `
• 가상자산은 <b>오입금 시 영구히 복구가 불가능할 수 있는 리스크가 존재</b>합니다.
• 기술적으로 복구 가능한 케이스라도 <b>복구 비용 및 보안상의 이슈로 복구가 불가능한 경우</b>가 빈번히 발생합니다.
• 가상자산 <b>특성상 출금신청이 완료되면 취소할 수 없습니다.</b> 출금 전 주소와 수량을 꼭 확인해 주세요.
• 당사 수탁을 위한 입금 시, <b>당사에서 발행해 드린 고객용 입금주소를 확인하고, 정확하게 입력</b>해주시기 바랍니다. 
   즉, 주소 체계 및 체인(네트워크)종류를 필수적으로 확인 후 입금해 주시기 바랍니다.  
   <b>ㅇ 지원 네트워크 : 비트코인, 이더리움, 카이아</b>
• 고액 가상자산 <b>입출금 시 최소 수량(ex. 1KAIA, 0.01ETH, 0.001BTC) 사전 입출금을 통해
   검증 후,</b>  입출금 처리를 권장합니다.

  <b>◈ 입금 시</b> : 입금주소, 메인넷 확인 ➙ 최소수량 입금 ➙ 입금 확인(고객사 대시보드, 당사 문의) ➙ 잔액 입금 진행
  <b>◈ 출금 시</b>: 고객사 출금주소 등록 ➙ 당사에서 정당주소 여부 체크 ➙ 최소 수량 출금 ➙ 출금확인(고객 확인, 당사 문의) ➙ 잔액 출금 진행

• <b>블럭체인 주소 형식이 동일</b>해도 출금하는 가상자산의 블럭체인 네트워크와 입금 받은 가상자산 주소의 
   <b>블럭체인 네트워크가 다른 경우 오입금이 발생</b>합니다.(ex, 바인낸스 체인 기반의 ETC 및 이더리움 체인 기반의 ETC)
• 출금신청 완료 이후의 송금과정은 블록체인 <b>네트워크에서 처리되며 네트워크 상태에 따라 출금시간이 지연</b>될 수 있습니다. 
• <b>부정거래가 의심될 경우 출금이 제한</b>될 수 있습니다.
• 고객확인 <b>미등록 계정은 가상자산 출금이 불가</b>합니다.
• <b>오입금 우려되시는 경우 등, 가상자산 입출금 관련 궁금한 사항은 당사에 문의</b>를 하신 후에 입출금을 진행하여 주시기 바랍니다.

ㅇ 문의 : 가상자산 입출금 담당자(☏ 02-561-4762)
`,
              }}
            />
          </Content>
          <Footer>
            <SubmitButton onClick={onSubmit}>확인</SubmitButton>
          </Footer>
        </Inner>
      </Container>
    </React.Fragment>
  );
};

export default NoticeModal;
