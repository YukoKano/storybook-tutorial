/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.stories.js"],
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  features: {
    postcss: false,
  },

  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  core: {},

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
