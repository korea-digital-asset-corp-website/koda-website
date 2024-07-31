import { action } from "@storybook/addon-actions";
import React from "react";

import KodaModal from "src/components/modal/KodaModal";
import ISMSModal from "src/components/modal/ISMSModal";
import CustomerConfirmationSystemModal from "src/components/modal/CustomerConfirmationSystemModal";

export default {
  title: "Modal",
};

export const _KodaModal = {
  render: () => (
    <KodaModal
      isOpen={true}
      onClose={action("onMenuClick")}
      onSubmit={action("onSubmit")}
    />
  ),

  name: "KodaModal",
};

export const _ISMSModal = {
  render: () => <ISMSModal isOpen={true} onSubmit={action("onSubmit")} />,

  name: "ISMSModal",
};

export const _CustomerConfirmationSystemModal = {
  render: () => (
    <CustomerConfirmationSystemModal
      isOpen={true}
      onSubmit={action("onSubmit")}
    />
  ),

  name: "CustomerConfirmationSystemModal",
};
