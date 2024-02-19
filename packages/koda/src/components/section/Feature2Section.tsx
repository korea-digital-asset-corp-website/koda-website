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
  min-width: 1440px;
  height: 410px;
  margin-top: 159px;
  margin-bottom: 160px;
  ${media.mobile`
    min-width: auto;
    height: auto;
    margin-top: 36px;
    margin-bottom: 45px;
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
    flex-direction: column-reverse;
    width: 375px;
  `}
`;

const LeftGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${media.mobile`
    align-items: center;
    padding-top: 34px;
  `}
`;

const InnerLeftGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 544px;
  margin-right: 95px;
  ${media.mobile`
    align-items: flex-start;
    width: auto;
    padding-left: 20px;
  `}
`;

const Title = styled(H1Pre)``;

const Description = styled(Body1Pre)`
  margin-top: 32px;
  ${media.mobile`
    margin-top: 10px;
  `}
`;

const Link = styled(TypeformButton)`
  margin-top: 56px;
  ${media.mobile`
    margin-top: 30px;
  `}
`;

const RightGroup = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 410px;
  ${media.mobile`
    width: 360px;
    height: 240px;
  `}
`;

const Feature2Image = styled.img`
  width: 614px;
  height: 410px;
  ${media.mobile`
    width: 360px;
    height: 240px;
  `}
`;

const Feature2Section = (props: Props) => {
  const { t } = props;

  return (
    <Container>
      <Inner>
        <LeftGroup>
          <InnerLeftGroup>
            <Title>{translate(["feature2Section", "title"], t)}</Title>
            <Description>
              {translate(["feature2Section", "description"], t)}
            </Description>
            <Link typeformUri={typeformUri}>
              <LinkButton name={translate(["ask"], t)} />
            </Link>
          </InnerLeftGroup>
        </LeftGroup>
        <RightGroup>
          <Feature2Image
            alt={"feature2"}
            src={images.feature2Src}
            srcSet={images.feature2}
          />
        </RightGroup>
      </Inner>
    </Container>
  );
};

export default withTranslation()(Feature2Section);
