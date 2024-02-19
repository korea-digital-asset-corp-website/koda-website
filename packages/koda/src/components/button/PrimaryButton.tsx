import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Button } from "src/components/Typography";
import { colors } from "src/styles/colors";

type Props = {
  className?: string;
  name: React.ReactNode;
};

const Container = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.15s linear 0s;
  cursor: pointer;
  background-color: ${colors.button1};
  color: ${colors.text1.light};
  border-radius: 2px;

  &:hover {
    background-color: #207369;
  }
`;

const PrimaryButton = (props: Props) => {
  const { className, name } = props;

  return <Container className={className}>{name}</Container>;
};

export default PrimaryButton;
