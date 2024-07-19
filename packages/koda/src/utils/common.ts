export function delay(ms = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
}

export function isJSON(str: string) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === "object" && obj !== null) {
      return true;
    }
  } catch (err) {
    // NOTHING
  }
  return false;
}

export const getValue = <T>(func: () => T, defaultValue: T) => {
  try {
    return func();
  } catch (error) {
    return defaultValue;
  }
};

export const mergeRefs =
  <T>(...refs: Array<React.Ref<T>>) =>
  (ref: T) => {
    refs.forEach((resolvableRef) => {
      if (typeof resolvableRef === "function") {
        resolvableRef(ref);
      } else {
        (resolvableRef as any).current = ref;
      }
    });
  };

export function getEnumKeyByEnumValue(myEnum: any, enumValue: any) {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}
