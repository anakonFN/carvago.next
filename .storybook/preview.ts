import type { Preview } from "@storybook/react";

import "../src/styles/globals.css";

import { decorator } from "./lib";

const preview: Preview = {
  decorators: [decorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
