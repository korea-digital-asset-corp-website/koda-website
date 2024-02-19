import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Body1 } from "src/components/Typography";
import ArrowRightIcon from "src/components/icon/ArrowRightIcon";

type Props = {
  className?: string;
  name: string;
  onLink?: () => void;
};

const Container = styled(Body1)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  transition: all 0.15s linear 0s;
  cursor: pointer;
  stroke: #292929;
  &:hover {
    stroke: #787878;
    color: #787878;
  }
`;

const LinkIcon = styled(ArrowRightIcon)`
  height: 12px;
  margin-left: 7px;
`;

const LinkButton = (props: Props) => {
  const { className, name, onLink } = props;

  return (
    <Container className={className} onClick={onLink}>
      {name}
      <LinkIcon />
    </Container>
  );
};

export default LinkButton;
