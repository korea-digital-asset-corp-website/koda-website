module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen",
  },
  staticDirs: [{ from: "../src/images", to: "/images" }],
};
