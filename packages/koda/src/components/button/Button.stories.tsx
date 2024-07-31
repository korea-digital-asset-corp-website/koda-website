import React from "react";

import LinkButton from "src/components/button/LinkButton";
import FloatingButton from "src/components/button/FloatingButton";

export default {
  title: "@Component/Button",
};

export const _LinkButton = {
  render: () => <LinkButton name="문의하기" />,
  name: "LinkButton",
};

export const _FloatingButton = {
  render: () => <FloatingButton />,
  name: "FloatingButton",
};
