import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { I18nextProvider } from "react-i18next";

import { initialize as initializeI18next } from "src/configs/locale";
import i18n from "./i18n";

import "src/styles/global.css";
import "./global.css";

initializeI18next();

export const decorators = [
  withKnobs,
  (Story) => (
    <>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </>
  ),
  (Story) => <Story />,
];
export const tags = ["autodocs"];
