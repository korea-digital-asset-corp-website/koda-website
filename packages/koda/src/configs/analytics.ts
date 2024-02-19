import _ from "lodash";

import { env } from "src/configs/env";
import { traverseObjectKeys, traverseObjectSliceStr } from "src/utils/string";

export enum ActionType {
  TEST = "TEST",
  Menu = "Menu",
  Intro = "Intro",
  Service = "Service",
  QA = "QA",
  News = "News",
  CTA = "CTA",
  Tab = "Tab",
  Email = "Email",
}

export enum CategoryType {
  TEST = "TEST",
  GNB = "GNB",
  Intro = "Intro",
  Service = "Service",
  Last = "Last",
  QA = "QA",
  Media = "Media",
  Footer = "Footer",
}

export type EventParams = {
  action: ActionType;
  category: CategoryType;
  label?: string;
  value?: number;
};

export const URI_MAX_LENGTH = 20;
const EVENT_TYPE_MAX_LENGTH = 40;

export function logEvent(
  eventData: EventParams,
  func: (action: ActionType, param: Record<string, unknown>) => void
) {
  const { action } = eventData;

  if (!action) {
    throw new Error("action is not provided!");
  }

  if (action.length > EVENT_TYPE_MAX_LENGTH) {
    throw new Error(`${action} has over ${EVENT_TYPE_MAX_LENGTH} characters!`);
  }

  const isAllKeysUnderLength40 = traverseObjectKeys(
    _.omit(eventData, ["action"]),
    (key: string) => key.length <= EVENT_TYPE_MAX_LENGTH
  );

  if (!isAllKeysUnderLength40) {
    return;
  }

  const parameters = traverseObjectSliceStr(
    _.omit(eventData, ["action"]),
    100
  ) as Omit<EventParams, "action">;
  func(eventData.action, {
    event_category: parameters.category,
    event_label: parameters.label,
    value: parameters.value,
  });
}

const getGtag = () => {
  return _.get(window as any, "gtag");
};

export const gTagEvent = (eventData: EventParams) => {
  logEvent(eventData, (action: ActionType, param: Record<string, unknown>) => {
    const gtag = getGtag();
    if (!gtag) {
      return;
    }
    gtag("event", action, param);
  });
};

export const gTagPageView = (url: string) => {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }
  gtag("config", env.GA_KEY, {
    page_path: url,
  });
};
