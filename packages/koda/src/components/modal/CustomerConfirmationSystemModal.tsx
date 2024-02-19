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
  padding: 48px;
  background: #ffffff;
  overflow: auto;
  /* Evaluation/level5 */

  box-shadow: 0px 10px 15px rgba(54, 62, 76, 0.3),
    0px 10px 15px rgba(54, 62, 76, 0.1), 0px 15px 40px rgba(54, 62, 76, 0.2);
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
    top: 20,
    left: 0,
    right: 0,
    bottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    zIndex: 10,
  },
  content: {
    height: "100%",
    outline: 0,
  },
};

const CustomerConfirmationSystemModal = (props: Props) => {
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
            <Title>고객확인제도 안내</Title>
            <Description>
              {`안녕하세요.

법인·기관을 위한 가장 신뢰 할 수 있는 디지털자산 파트너 한국디지털에셋(이하 “코다”)입니다.

코다는 ⌜특정 금융거래정보의 보고 및 이용 등에 관한 법률⌟(이하 “특정금융정보법")에 따라 2021년 9월 17일 금융정보분석원에 가상자산사업자 신고를 접수하였습니다.

`}
              {`이에 코다에서는 `}
              <HighlightDescription>{`⌜특정금융정보법⌟ 준수 및 고객사의 안전한 거래를 위해 고객확인제도를 시행할 예정이오니 아래의 내용을 반드시 확인`}</HighlightDescription>
              {`해 주시기 바랍니다.

`}
              <SubTitle>{`[고객확인제도 안내]`}</SubTitle>
              {`
고객확인제도란 특정금융정보법 제5조의2에 따라 코다에서 제공하는 상품 및 서비스가 자금세탁 등 불법행위에 이용되지 않도록 `}
              <HighlightDescription>{`고객님들의 정보(실지명의, 주소, 연락처 등), 거래목적, 자금원천, 실제소유자 등을 확인하는 제도`}</HighlightDescription>
              {`입니다. 
같은 법 제5조의2 제4항에 따라 고객확인이 완료 된 고객만 거래를 할 수 있습니다

`}
              <SubTitle>{`[유의사항 사전 안내]`}</SubTitle>
              <IndentContent>
                {`
당사는 고객확인의무 시행일(별도 공지예정) 이후 `}
                <HighlightDescription>{`모든 고객사에 대해서 특정금융정보법에 따른 고객확인의무를 
이행`}</HighlightDescription>
                {`할  계획입니다. 특정금융정보법은 제5조의2 제1항(100만원 이상 거래시 고객신원확인) 및 제4항(고객신용 
확인 정보 제공 거부 시 고객과의 거래종료), 동법 시행령 제10조의 20 제3호(고객확인 조치 미완료 고객에 대한 
거래 제한)에서 고객 확인의무를 정하고 있습니다

`}
              </IndentContent>
              <HighlightDescription>{`ㅇ  고객 확인의무 시행일 이후 유의하실 사항을 사전에 안내`}</HighlightDescription>
              {`드리오니, 아래의 내용을 미리 확인하셔서 시행일 이후 
      불편이 없도록 협조 부탁드립니다

`}
              <IndentContent>
                <HighlightDescription2>{`① 고객 확인 미완료 시 거래 제한 안내`}</HighlightDescription2>
                <IndentContent>
                  {`고객확인제도 시행 전 점검 시점(별도 공지)부터 기존 고객사의 로그인 세션이 만료 되며, 가상 자산 출금이 중단 
됩니다. 고객 확인 절차를 완료한 고객사는 수탁자산의 출금 서비스 이용이 다시 가능합니다

`}
                </IndentContent>
                <HighlightDescription2>{`② 신규 가입한 회원에 대한 안내`}</HighlightDescription2>
                <IndentContent>
                  {`신규로 가입하신 고객사는 고객확인제도 시행 이후 고객 확인을 완료하시면 정상적인 가상자산의 수탁 서비스를   
이용할 수 있습니다.

`}
                </IndentContent>
                <HighlightDescription2>{`③ 고객 확인절차`}</HighlightDescription2>
                <IndentContent>
                  {`기존 가입법인 고객사들은 대면으로 고객확인 절차를 수행해야 합니다(필요한 서류 및 절차는 별도 안내)


`}
                </IndentContent>
              </IndentContent>
              <HighlightDescription>{`고객확인제도는 2021년 12월 17일 00시 부터 적용 예정입니다`}</HighlightDescription>
            </Description>
          </Content>
          <Footer>
            <SubmitButton onClick={onSubmit}>확인</SubmitButton>
          </Footer>
        </Inner>
      </Container>
    </React.Fragment>
  );
};

export default CustomerConfirmationSystemModal;
