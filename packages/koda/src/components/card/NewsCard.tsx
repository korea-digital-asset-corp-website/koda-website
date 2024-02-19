import React from "react";
import styled from "styled-components";

import { H4, H4Pre, Caption } from "src/components/Typography";
import { colors } from "src/styles/colors";
import { media } from "src/utils/media";

type Props = {
  className?: string;
  thumnailImage: string;
  title: React.ReactNode;
  caption: string;
  uri: string;
  onClick?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Thumnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 368px;
  height: 245px;
  background: #154640;
  ${media.mobile`
    width: 327px;
    height: 217px;
  `}
`;

const ThumnailImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 32px;
  ${media.mobile`
    width: 327px;
    padding-top: 20px;
  `}
`;

const ContentTitle = styled(H4Pre)`
  white-space: normal;
  word-break: normal;
  color: ${colors.text2.dark};
  margin-bottom: 16px;
  ${media.mobile`
    margin-bottom: 12px;
  `}
`;

const ContentCaption = styled(Caption)`
  color: ${colors.text3.dark};
`;

const NewsCard = (props: Props) => {
  const { className, thumnailImage, title, caption, uri, onClick } = props;

  const onLink = () => {
    onClick?.();
    window.open(uri);
  };

  return (
    <Container className={className} onClick={onLink}>
      <Thumnail>
        <ThumnailImage alt={"thumnail"} src={thumnailImage} />
      </Thumnail>
      <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentCaption>{caption}</ContentCaption>
      </Content>
    </Container>
  );
};

export default NewsCard;
