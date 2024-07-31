import { TFunction } from "i18next";
import ko from "./ko";
import _ from "lodash";

const translateLocale = new Map<string, string>()
  .set("en", "EN")
  .set("ko", "KR");

const convertLocale = (language: string) => {
  if (language === "ko") {
    return "en";
  }
  return "ko";
};

const translate = (
  names: Paths<typeof ko.translation>,
  t?: TFunction,
): string => {
  const key = names.join(".");
  if (!t) {
    return _.get(ko.translation, key);
  }
  return !t(key) || t(key) === key ? _.get(ko.translation, key) : t(key);
};

export { translate, translateLocale, convertLocale };
