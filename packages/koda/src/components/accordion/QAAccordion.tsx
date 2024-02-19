import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "src/components/accordion/Accordion";
import { H4Pre, Body1Pre } from "src/components/Typography";
import { colors } from "src/styles/colors";
import images from "src/images";
import { media } from "src/utils/media";

type Props = {
  className?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  onToggle?: (open: boolean) => void;
};

const Container = styled.div`
  padding-bottom: 32px;
  padding-top: 32px;
  ${media.mobile`
    padding-bottom: 16px;
    padding-top: 16px;
  `}
  .Collapsible__contentInner {
    padding: 0;
    border: 0;
  }
`;

const Title = styled(H4Pre)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 42px;
  color: ${colors.text2.dark};
  cursor: pointer;
  ${media.mobile`
    align-items: flex-start;
  `}
`;

const ArrowIcon = styled.img`
  width: 34px;
  height: 34px;
  ${media.mobile`
    width: 24px;
    height: 24px;
  `}
`;

const Content = styled(Body1Pre)`
  color: ${colors.text3.dark};
  padding-top: 12px;
  ${media.mobile`
    word-break: normal;
  `}
`;

const QAAccordion = (props: Props) => {
  const { className, title, content, onToggle } = props;
  const [open, setOpen] = useState(false);

  const handleTriggerClick = () => {
    setOpen(!open);
    onToggle?.(!open);
  };

  return (
    <Container className={className}>
      <Accordion
        trigger={
          <Title>
            {title}
            {open ? (
              <ArrowIcon
                alt={"arrowUp"}
                srcSet={images.keyboardArrowUp}
                src={images.keyboardArrowUpSrc}
              />
            ) : (
              <ArrowIcon
                alt={"arrowDown"}
                srcSet={images.keyboardArrowDown}
                src={images.keyboardArrowDownSrc}
              />
            )}
          </Title>
        }
        open={open}
        handleTriggerClick={handleTriggerClick}
      >
        <Content>{content}</Content>
      </Accordion>
    </Container>
  );
};

export default QAAccordion;
