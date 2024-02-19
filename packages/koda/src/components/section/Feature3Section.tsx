import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import { Body2, H1Pre, Body1Pre } from "src/components/Typography";
import images from "src/images";
import { translate } from "src/locales";
import { media } from "src/utils/media";
import LinkButton from "src/components/button/LinkButton";
import TypeformButton from "src/components/button/TypeformButton";
import { typeformUri } from "src/utils/uri";

type Props = WithTranslation;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1440px;
  padding-top: 160px;
  padding-bottom: 222px;
  ${media.mobile`
    min-width: auto;
    padding-top: 45px;
    padding-bottom: 72px;
  `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 1352px;
  margin: auto;
  ${media.desktop`
    padding-left: 92px;
    padding-right: 92px;
  `}
  ${media.mobile`
    flex-direction: column;
    width: 375px;
  `}
`;

const LeftGroup = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 10;
  ${media.mobile`
    width: 360px;
    height: 240px;
  `}
`;

const Feature3Image = styled.img`
  width: 614px;
  height: 410px;
  display: flex;
  align-self: flex-end;
  z-index: 10;
  ${media.mobile`
    position: static;
    width: 360px;
    height: 240px;
  `}
`;

const RightGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const InnerRightGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 676px;
  padding-left: 130px;
  ${media.mobile`
    align-items: flex-start;
    width: auto;
    padding-left: 20px;
  `}
`;

const Title = styled(H1Pre)`
  ${media.mobile`
    margin-top: 36px;
  `}
`;

const Description = styled(Body1Pre)`
  margin-top: 20px;
  ${media.mobile`
    margin-top: 6px;
  `}
`;

const Caption = styled(Body2)`
  color: #a5a5a5;
  margin-top: 6px;
`;

const Link = styled(TypeformButton)`
  margin-top: 65px;
  ${media.mobile`
    margin-top: 30px;
  `}
`;

const Feature3Section = (props: Props) => {
  const { t } = props;

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <Feature3Image
            alt={"feature3"}
            src={images.feature3Src}
            srcSet={images.feature3}
          />
        </LeftGroup>
        <RightGroup>
          <InnerRightGroup>
            <Title>{translate(["feature3Section", "title"], t)}</Title>
            <Description>
              {translate(["feature3Section", "description"], t)}
            </Description>
            <Caption>{translate(["feature3Section", "caption"], t)}</Caption>
            <Link typeformUri={typeformUri}>
              <LinkButton name={translate(["ask"], t)} />
            </Link>
          </InnerRightGroup>
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(Feature3Section);
