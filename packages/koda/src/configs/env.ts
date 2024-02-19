interface IEnvironment {
  production: IEnvironmentEntry;
  staging: IEnvironmentEntry;
}

interface IEnvironmentEntry {
  GA_KEY?: string;
}

const ENV_TYPE = process.env.GATSBY_ENV || "staging";

// tslint:disable:object-literal-sort-keys
const byEnv: IEnvironment = {
  production: {
    GA_KEY: "G-S9G6KVCJVK",
  },
  staging: {
    GA_KEY: "G-S9G6KVCJVK",
  },
};

export const isProduction = () => ENV_TYPE === "production";

export const env = byEnv[ENV_TYPE as keyof IEnvironment] || {};
