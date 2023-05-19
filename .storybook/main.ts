import type { StorybookConfig } from "@storybook/nextjs";

const AutoImport = require('unplugin-auto-import/webpack')
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.plugins!.push(
      AutoImport({
        imports: [
          'react',
          {
            'clsx': ['clsx'],
            'tailwind-merge': ['twMerge'],
          },
        ],
        eslintrc: {
          enabled: true,
        },
        dts: true,
      }),
    )
    config.module!.rules!.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });
    config.resolve!.alias = {
      ...config.resolve!.alias,
      '@': path.resolve(__dirname, "../src/"),
    };

    return config
  }
};
export default config;
