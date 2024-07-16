import React from "react";
import { action } from "@storybook/addon-actions";

import DropDownMenu from "src/components/menu/DropDownMenu";

export default {
  title: "Menu",
};
const _DropDownMenu = () => (
  <DropDownMenu onMenuClick={action("onMenuClick")} />
);
_DropDownMenu.story = {
  name: "DropDownMenu",
};
