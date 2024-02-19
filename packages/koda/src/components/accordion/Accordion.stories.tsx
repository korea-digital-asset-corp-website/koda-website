import React from "react";
import { storiesOf } from "@storybook/react";

import Accordion from "src/components/accordion/Accordion";
import QAAccordion from "./QAAccordion";

const stories = storiesOf("@Component/Accordion", module);
stories.add("Accordion", () => (
  <Accordion trigger="Start here">
    <p>
      This is the collapsible content. It can be any element or React component
      you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next section!
    </p>
  </Accordion>
));
stories.add("QAAccordion", () => (
  <QAAccordion
    title={"수탁 가능한 가상자산의 종류는 어떻게 되나요?"}
    content={`국내 법인이 합법적으로 비트코인 구매할 수 있습니다. 또한, 국내 법인이 비트코인을 구매하는 것은 원칙적으로 신고하거나 인허가를 받는 사항은 아닙니다. 
다만, 상장 법인의 경우 일정 규모 이상의 비트코인을 취득할 때에 공시가 필요한지 여부를 검토할 수 있습니다.`}
  />
));
