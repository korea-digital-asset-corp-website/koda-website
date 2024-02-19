import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "src/locales/en";
import ko from "src/locales/ko";

export const initialize = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en,
        ko,
      },
      lng: "ko",
      fallbackLng: "ko",
      react: {
        bindI18nStore: false,
        bindI18n: "languageChanged",
      },
      interpolation: {
        escapeValue: false,
      },
    });
};
