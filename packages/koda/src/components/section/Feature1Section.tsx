import React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import { H1Pre, Body1Pre } from "src/components/Typography";
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
  padding-top: 130px;
  padding-bottom: 159px;
  ${media.mobile`
    min-width: auto;
    padding-top: 32px;
    padding-bottom: 36px;
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

const Feature1Image = styled.img`
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

const Link = styled(TypeformButton)`
  margin-top: 56px;
  ${media.mobile`
    margin-top: 26px;
  `}
`;

const Feature1Section = (props: Props) => {
  const { t } = props;

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <Feature1Image
            alt={"feature1"}
            src={images.feature1Src}
            srcSet={images.feature1}
          />
        </LeftGroup>
        <RightGroup>
          <InnerRightGroup>
            <Title>{translate(["feature1Section", "title"], t)}</Title>
            <Description>
              {translate(["feature1Section", "description"], t)}
            </Description>
            <Link typeformUri={typeformUri}>
              <LinkButton name={translate(["ask"], t)} />
            </Link>
          </InnerRightGroup>
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(Feature1Section);
