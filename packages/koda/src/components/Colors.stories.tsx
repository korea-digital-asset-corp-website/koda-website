import React from "react";
import styled, { css } from "styled-components";

import { colors } from "src/styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div<{ $bgColor: string }>`
  width: 100px;
  height: 100px;
  ${({ $bgColor }) => css`
    background-color: ${$bgColor};
  `}
`;

export default {
  title: "@Design Token/Colors",
};

export const _Colors = {
  render: () => {
    return (
      <Container>
        <Box $bgColor={colors.primary} />
        <Box $bgColor={colors.secondary} />
        <Box $bgColor={colors.third} />
      </Container>
    );
  },

  name: "default",
};
