import React from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";

import {
  H1,
  H2,
  H3,
  H4,
  Body1,
  Body2,
  Caption,
  Button,
  Button2,
  GNB,
} from "src/components/Typography";
import { colors } from "src/styles/colors";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import IndexPage from "src/components/page/IndexPage";

const typographyStories = storiesOf("@Design Token/Typography", module);

typographyStories.add("default", () => {
  return (
    <div>
      <H1>H1: Hello World 안녕하세요</H1>
      <H2>H2: Hello World 안녕하세요</H2>
      <H3>H3: Hello World 안녕하세요</H3>
      <H4>H4: Hello World 안녕하세요</H4>
      <Body1>Body1: Hello World 안녕하세요</Body1>
      <Body2>Body2: Hello World 안녕하세요</Body2>
      <Caption>Caption: Hello World 안녕하세요</Caption>
      <Button>Button: Hello World 안녕하세요</Button>
      <Button2>Button2: Hello World 안녕하세요</Button2>
      <GNB>GNB: Hello World 안녕하세요</GNB>
    </div>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div<{ $bgColor: string }>`
  width: 100px;
  height: 100px;
  ${({ $bgColor }) =>
    css`
      background-color: ${$bgColor};
    `}
`;

const colorsStories = storiesOf("@Design Token/Colors", module);

colorsStories.add("default", () => {
  return (
    <Container>
      <Box $bgColor={colors.primary} />
      <Box $bgColor={colors.secondary} />
      <Box $bgColor={colors.third} />
    </Container>
  );
});

const componentStories = storiesOf("@Component/Component", module);
componentStories
  .add("Header", () => <Header />)
  .add("Footer", () => <Footer />)
  .add("IndexPage", () => <IndexPage />);
