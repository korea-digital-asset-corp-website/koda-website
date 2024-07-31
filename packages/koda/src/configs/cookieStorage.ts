import _ from "lodash";
import cookie from "js-cookie";

import { isJSON } from "src/utils/common";

type StorageType = "lang";

function storageFactory(
  setItem: (key: string, value: string) => void,
  getItem: (key: string) => string,
  clear: () => void,
) {
  const setStorageItem = (key: StorageType, value: string) => {
    return setItem(key, value);
  };

  const getStringWithDefault = (
    key: StorageType,
    defaultItem: string,
  ): string => {
    try {
      const itemString = getItem(key);
      return _.isEmpty(itemString) ? defaultItem : itemString;
    } catch (error) {
      return defaultItem;
    }
  };

  const getBooleanWithDefault = (
    key: StorageType,
    defaultItem: boolean,
  ): boolean => {
    try {
      const itemString = getItem(key);
      return _.isEmpty(itemString) ? defaultItem : itemString === "true";
    } catch (error) {
      return defaultItem;
    }
  };

  const getNumberWithDefault = (
    key: StorageType,
    defaultItem: number,
  ): number => {
    try {
      const itemString = getItem(key);
      const num = Number(itemString);
      return !_.isNaN(num) ? num : defaultItem;
    } catch (error) {
      return defaultItem;
    }
  };

  const getJSONWithDefault = <T>(key: StorageType, defaultItem: T): T => {
    try {
      const itemJSON = getItem(key);
      if (!isJSON(itemJSON)) {
        return defaultItem;
      }
      return JSON.parse(itemJSON) as T;
    } catch (error) {
      // NOTHING
    }
    return defaultItem;
  };

  const setStorages = {
    saveLanguage: (value: string) => {
      setStorageItem("lang", value);
    },
  };

  const getStorages = {
    language: () => {
      return getStringWithDefault("lang", "ko");
    },
  };

  return {
    ...setStorages,
    ...getStorages,
    setItem,
    getStringWithDefault,
    getBooleanWithDefault,
    getNumberWithDefault,
    getJSONWithDefault,
    clear,
  };
}

export const storage = _.once(() => {
  const setItem = (key: string, value: string) => {
    cookie.set(key, value);
  };

  const getItem = (key: string) => {
    return cookie.get(key) ?? "";
  };

  const clear = () => {
    const keys: StorageType[] = ["lang"];
    for (const key of keys) {
      cookie.remove(key);
    }
  };
  return storageFactory(setItem, getItem, clear);
});
