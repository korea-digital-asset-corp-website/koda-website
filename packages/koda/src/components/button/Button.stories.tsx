import React from "react";
import { storiesOf } from "@storybook/react";

import LinkButton from "src/components/button/LinkButton";
import FloatingButton from "src/components/button/FloatingButton";

const stories = storiesOf("@Component/Button", module);
stories.add("LinkButton", () => <LinkButton name="문의하기" />);
stories.add("FloatingButton", () => <FloatingButton />);
