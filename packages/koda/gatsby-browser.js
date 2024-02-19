import React from "react";
import { setAppElement } from "react-modal";

import { env, isProduction } from "src/configs/env";
import { initialize as initializeI18next } from "src/configs/locale";
import { gTagPageView } from "src/configs/analytics";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

import "src/styles/global.css";

initializeI18next();

export const wrapPageElement = ({ element }) => {
  if (env.GA_KEY && window) {
    gTagPageView(window.location.pathname + window.location.search);
  }
  return element;
};

export const wrapRootElement = ({ element }) => {
  const enhanceElement = element;
  return <I18nextProvider i18n={i18n}>{enhanceElement}</I18nextProvider>;
};

export function onClientEntry() {
  setAppElement("#___gatsby");
}
