import _ from "lodash";
import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H2, H2Pre, Body1Pre, H3, Button } from "src/components/Typography";
import { translate } from "src/locales";
import { colors } from "src/styles/colors";
import QAAccordion from "src/components/accordion/QAAccordion";
import { gTagEvent, ActionType, CategoryType } from "src/configs/analytics";
import { typeformUri } from "src/utils/uri";
import TypeformButton from "src/components/button/TypeformButton";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  padding-top: 240px;
  padding-bottom: 220px;
  ${media.mobile`
    min-width: auto;
    padding-top: 100px;
    padding-bottom: 66px;
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

const Title = styled(H3)`
  color: ${colors.text1.dark};
  margin-bottom: 96px;
  ${media.mobile`
    width: 327px;
    margin-bottom: 24px;
    align-self: center;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile`
    width: 327px;
  `}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
`;

const Link = styled(TypeformButton)`
  width: 246px;
  margin-top: 24px;
  ${media.mobile`
    width: 200px;
  `}
`;

const OtherQuestion = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.text3.dark};
  cursor: pointer;
`;

const ArrowRightIcon = styled.img`
  width: 30px;
  height: 30px;
  ${media.mobile`
    width: 18px;
    height: 18px;
    margin-left: 10px;
  `}
`;

const QASection = (props: Props) => {
  const { i18n, t } = props;

  const onToggle = (title: string, open: boolean) => {
    if (open) {
      gTagEvent({
        category: CategoryType.QA,
        action: ActionType.Tab,
        label: title.substring(0, 30),
      });
    }
  };

  const onLink = () => {
    gTagEvent({
      category: CategoryType.QA,
      action: ActionType.CTA,
    });
  };

  return (
    <Container>
      <Inner>
        <Title>{`자주 묻는 질문`}</Title>
        <MediaQuery minWidth={desktopWidth}>
          <Content>
            <QAAccordion
              title={"고객확인제도가 무엇인가요?"}
              content={`고객확인제도란 특정금융정보법 제5조의2에 따라 코다에서 제공하는 상품 및 서비스가 자금세탁 등 불법행위에 이용되지 않도록 고객님들의 정보(실지명의, 주소, 연락처 등), 거래목적, 자금원천, 실제소유자 등을 확인하는 제도입니다. 
같은 법 제5조의2 제4항에 따라 고객확인이 완료 된 고객만 거래를 할 수 있습니다`}
              onToggle={_.partial(onToggle, "고객확인제도가 무엇인가요?")}
            />
            <QAAccordion
              title={"고객 확인 미완료시 거래제한은 어떻게 되나요?"}
              content={`고객확인제도 시행 전 점검 시점(별도 공지)부터 기존 고객사의 로그인 세션이 만료되며 가상 자산 출금이 중단 됩니다. 고객 확인 절차를 완료한 고객사는 수탁자산의 출금 서비스 이용이 다시 가능합니다`}
              onToggle={_.partial(
                onToggle,
                "고객 확인 미완료시 거래제한은 어떻게 되나요?",
              )}
            />
            <QAAccordion
              title={"신규 가입한 회원은 어떻게 해야 하나요?"}
              content={`신규로 가입하신 고객사는 고객확인제도 시행 이후 고객 확인을 완료하시면 정상적인 가상자산의 수탁 서비스를 이용할 수 있습니다.`}
              onToggle={_.partial(
                onToggle,
                "신규 가입한 회원은 어떻게 해야 하나요?",
              )}
            />
            <QAAccordion
              title={"기존 고객 확인절차는 어떻게 해야 하나요?"}
              content={`기존 가입법인 고객사들도 대면으로 고객확인 절차를 수행해야 합니다(필요한 서류 및 절차는 별도 안내)`}
              onToggle={_.partial(
                onToggle,
                "기존 고객 확인절차는 어떻게 해야 하나요?",
              )}
            />
            <QAAccordion
              title={"한국디지털에셋은 언제부터 고객확인제도 적용되나요?"}
              content={`ㅇ 고객확인제도 시행일 : 2021.12.17(00:00) 적용`}
              onToggle={_.partial(
                onToggle,
                "한국디지털에셋은 언제부터 고객확인제도 적용되나요?",
              )}
            />
            <Link typeformUri={typeformUri} onClick={onLink}>
              <OtherQuestion>
                다른 질문이 있으신가요?
                <ArrowRightIcon
                  alt={"arrowRightIcon"}
                  src={images.keyboardArrowRightSrc}
                  srcSet={images.keyboardArrowRight}
                />
              </OtherQuestion>
            </Link>
          </Content>
        </MediaQuery>
        <MediaQuery maxWidth={mobileWidth}>
          <Content>
            <QAAccordion
              title={`수탁 가능한 가상자산의 종류는 어떻
게 되나요?`}
              content={`최초에는 비트코인(BTC), 이더리움(ETH), 클레이(Klay)를 지원하고 있습니다. 앞으로 법인, 기관투자자의 수요에 맞게 더 다양한 가상자산을 지원할 예정입니다.`}
            />
            <Link typeformUri={typeformUri} onClick={onLink}>
              <OtherQuestion>
                다른 질문이 있으신가요?
                <ArrowRightIcon
                  alt={"arrowRightIcon"}
                  src={images.keyboardArrowRightSrc}
                  srcSet={images.keyboardArrowRight}
                />
              </OtherQuestion>
            </Link>
          </Content>
        </MediaQuery>
      </Inner>
    </Container>
  );
};

export default withTranslation()(QASection);
