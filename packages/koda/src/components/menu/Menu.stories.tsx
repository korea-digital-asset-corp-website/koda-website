import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import DropDownMenu from "src/components/menu/DropDownMenu";

storiesOf("Menu", module).add("DropDownMenu", () => (
  <DropDownMenu onMenuClick={action("onMenuClick")} />
));
