declare module "*.gif";
declare module "*.png";
declare module "*.json" {
  const value: any;
  export default value;
}

declare module "console" {
  export = typeof import("console");
}

declare module "*.svg" {
  const content: any;
  export default content;
}

type AsyncFuncReturnType<T> = T extends (...args: any[]) => Promise<infer U>
  ? U
  : never;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type RemoveKeys<T, K extends Array<keyof T>> = Pick<
  T,
  Exclude<keyof T, K[keyof K]>
>;

type UnPromisify<T> = T extends Promise<infer U> ? U : T;
type RetrieveAsyncFunc<T extends (...args: any[]) => any> = ReturnType<
  T
> extends Promise<infer U>
  ? U
  : never;

type Cons<H, T> = T extends readonly any[]
  ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
    ? R
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, any>
  ? {
      [K in keyof T]-?:
        | [K]
        | (Paths<T[K], Prev[D]> extends infer P
            ? P extends []
              ? never
              : Cons<K, P>
            : never);
    }[keyof T]
  : [];

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, any>
  ? { [K in keyof T]-?: Cons<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : [];
