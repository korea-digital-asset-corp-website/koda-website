import _ from "lodash";
import React from "react";
import styled from "styled-components";

import { translate } from "src/locales";
import { Caption, CaptionPre, CaptionA } from "src/components/Typography";
import { media, desktopWidth, mobileWidth } from "src/utils/media";
import images from "src/images";
import { colors } from "src/styles/colors";
import MediaQuery from "react-responsive";
import { CategoryType, ActionType, gTagEvent } from "src/configs/analytics";

type Props = { className?: string };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 2580px;
  padding-top: 60px;
  padding-bottom: 98px;
  ${media.mobile`
    min-width: 375px;
    flex-direction: column;
    padding-top: 42px;
    padding-bottom: 38px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1168px;
  justify-content: space-between;
  margin: auto;
  ${media.mobile`
    flex-direction: column;
    width: 100%;
    padding-left: 25px;
    margin: 0px;
  `}
`;

const LeftGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile`
    flex-direction: column;
  `}
`;

const KODALogo = styled.img`
  width: 106px;
  height: 24px;
  margin-bottom: 20px;
  ${media.mobile`
    margin-right: 0px;
    margin-bottom: 24px;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled(CaptionPre)`
  color: ${colors.text2.dark};
  margin-bottom: 12px;
  ${media.mobile`
    color: #606060;
    width: 350px;
    min-height: auto;
    margin-bottom: 16px;
  `}
`;

const CompanyName = styled(Caption)`
  color: ${colors.text2.dark};
  ${media.mobile`
    margin-bottom: 32px;
  `}
`;

const Contact = styled(Caption)`
  display: flex;
  flex-direction: row;
  color: ${colors.text2.dark};

  ${media.mobile`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Link = styled(CaptionA)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  color: ${colors.text2.dark};
`;

const AtagMR48 = styled(Link)`
  margin-right: 48px;
  ${media.mobile`
    margin-right: 0px;
  `}
`;
const AtagMR60 = styled(Link)`
  margin-right: 60px;
  ${media.mobile`
    margin-right: 0px;
  `}
`;

const Email = styled(CaptionA)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  color: ${colors.text2.dark};

  ${media.mobile`
    margin-top: 16px;
  `}
`;

const EmailLogo = styled.img`
  width: 21px;
  height: 17px;
  margin-right: 8px;
`;

const Footer = (props: Props) => {
  const { className } = props;

  const onEmail = () => {
    gTagEvent({
      category: CategoryType.Footer,
      action: ActionType.Email,
    });
  };

  return (
    <Container className={className}>
      <Inner className={"inner-footer"}>
        <LeftGroup>
          <KODALogo
            alt={"koda"}
            src={images.kodaLogoSrc}
            srcSet={images.kodaLogo}
          />
          <Content>
            <MediaQuery minWidth={desktopWidth}>
              <Description>
                {`사업자 등록번호 : 618-81-36254 | 대표: 조진석
서울특별시 강남구 테헤란로 27길 8, 13층 (역삼동, 다온빌딩)
대표번호 : 02-561-4762`}
              </Description>
            </MediaQuery>
            <MediaQuery maxWidth={mobileWidth}>
              <Description>
                {`사업자 등록번호 : 618-81-36254 | 대표: 조진석
서울특별시 강남구 테헤란로 27길 8, 13층
(역삼동, 다온빌딩)
대표번호 : 02-561-4762`}
              </Description>
            </MediaQuery>
            <CompanyName>{`© Korea Digital Asset Co., Ltd.`}</CompanyName>
          </Content>
        </LeftGroup>
        <Contact>
          <AtagMR48 href="/privacy-policy">
            <b>개인정보처리방침</b>
          </AtagMR48>
          <AtagMR48 href="/ethical-management">
            <b>윤리경영</b>
          </AtagMR48>
          <AtagMR48 href="/work-guidelines">
            <b>업무지침</b>
          </AtagMR48>
          <AtagMR60 href="/crypto-warning">
            <b>가상자산 거래에 관한 유의사항</b>
          </AtagMR60>
          <Email
            target="_blank"
            href="mailto:hello@kodax.com"
            onClick={onEmail}
          >
            <EmailLogo
              alt={"email"}
              src={images.emailLogoSrc}
              srcSet={images.emailLogo}
            />
            hello@kodax.com
          </Email>
        </Contact>
      </Inner>
    </Container>
  );
};

export default Footer;
