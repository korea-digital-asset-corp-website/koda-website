import { action } from "@storybook/addon-actions";
import React from "react";

import KodaModal from "src/components/modal/KodaModal";
import ISMSModal from "src/components/modal/ISMSModal";
import CustomerConfirmationSystemModal from "src/components/modal/CustomerConfirmationSystemModal";

export default {
  title: "Modal",
};

const _KodaModal = () => (
  <KodaModal
    isOpen={true}
    onClose={action("onMenuClick")}
    onSubmit={action("onSubmit")}
  />
);
_KodaModal.story = {
  name: "KodaModal",
};

const _ISMSModal = () => (
  <ISMSModal isOpen={true} onSubmit={action("onSubmit")} />
);
_ISMSModal.story = {
  name: "ISMSModal",
};

const _CustomerConfirmationSystemModal = () => (
  <CustomerConfirmationSystemModal
    isOpen={true}
    onSubmit={action("onSubmit")}
  />
);
_CustomerConfirmationSystemModal.story = {
  name: "CustomerConfirmationSystemModal",
};
