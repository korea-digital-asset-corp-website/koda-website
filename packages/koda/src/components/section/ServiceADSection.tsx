import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import images from "src/images";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import { H2, H2Pre, Body1Pre } from "src/components/Typography";
import { translate } from "src/locales";
import { colors } from "src/styles/colors";
import PrimaryButton from "src/components/button/PrimaryButton";
import TypeformButton from "src/components/button/TypeformButton";
import { typeformUri } from "src/utils/uri";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";

type Props = WithTranslation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 2580px;
  background: #f5f5f5;
  padding-top: 220px;
  padding-bottom: 220px;
  ${media.mobile`
    min-width: auto;
    padding-top: 70px;
    padding-bottom: 70px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1168px;
  margin: auto;
  ${media.mobile`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  `}
`;

const Title = styled(H2Pre)`
  color: ${colors.text1.dark};
  ${media.mobile`
    width: 290px;
    text-align: center;
    margin-bottom: 32px;
  `}
`;

const Link = styled(TypeformButton)`
  ${media.desktop`
    margin-right: 4px;
  `}
  ${media.mobile`
    margin: auto;
  `}
`;

const ServiceButton = styled(PrimaryButton)`
  padding: 20px 30px;
  ${media.mobile`
    padding: 16px 20px;
  `}
`;

const ServiceADSection = (props: Props) => {
  const { i18n, t } = props;

  const onLink = () => {
    gTagEvent({
      category: CategoryType.Last,
      action: ActionType.CTA,
    });
  };

  return (
    <Container>
      <MediaQuery minWidth={desktopWidth}>
        <Inner>
          <Title>
            {`한국디지털에셋을 통해 디지털 자산을
안전하게 수탁하세요.`}
          </Title>
          <Link typeformUri={typeformUri}>
            <ServiceButton name={"서비스 문의하기"} />
          </Link>
        </Inner>
      </MediaQuery>
      <MediaQuery maxWidth={mobileWidth}>
        <Inner>
          <Title>
            {`한국디지털에셋을 통해
디지털 자산을 안전하게
수탁하세요.`}
          </Title>
          <Link typeformUri={typeformUri} onClick={onLink}>
            <ServiceButton name={"서비스 문의하기"} />
          </Link>
        </Inner>
      </MediaQuery>
    </Container>
  );
};

export default withTranslation()(ServiceADSection);
