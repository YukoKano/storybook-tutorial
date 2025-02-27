import "../src/index.css";

import { initialize, mswLoader } from "msw-storybook-addon"; // Mock Service Workerの略
initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  loaders: [mswLoader],
  tags: ["autodocs"]
};

export default preview;
