import React from "react";

import LinkButton from "src/components/button/LinkButton";
import FloatingButton from "src/components/button/FloatingButton";

export default {
  title: "@Component/Button",
};

const _LinkButton = () => <LinkButton name="문의하기" />;
_LinkButton.story = {
  name: "LinkButton",
};
const _FloatingButton = () => <FloatingButton />;
_FloatingButton.story = {
  name: "FloatingButton",
};
