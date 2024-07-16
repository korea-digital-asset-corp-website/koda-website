module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },

  typescript: {
    check: false,
    reactDocgen: "react-docgen",
  },
};
