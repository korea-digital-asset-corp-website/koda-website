import React from "react";

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

export default {
  title: "@Design Token/Typography",
};

export const _Typography = {
  render: () => {
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
  },

  name: "default",
};
