import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import KodaModal from "src/components/modal/KodaModal";
import ISMSModal from "src/components/modal/ISMSModal";
import CustomerConfirmationSystemModal from "src/components/modal/CustomerConfirmationSystemModal";

const stories = storiesOf("Modal", module);

stories.add("KodaModal", () => (
  <KodaModal
    isOpen={true}
    onClose={action("onMenuClick")}
    onSubmit={action("onSubmit")}
  />
));

stories.add("ISMSModal", () => (
  <ISMSModal isOpen={true} onSubmit={action("onSubmit")} />
));

stories.add("CustomerConfirmationSystemModal", () => {
  return (
    <CustomerConfirmationSystemModal
      isOpen={true}
      onSubmit={action("onSubmit")}
    />
  );
});
