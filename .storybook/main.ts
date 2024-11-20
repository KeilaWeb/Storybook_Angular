import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs', //serve para aprsentar a histório no book
    '@storybook/addon-actions', //serve para aprsentar a histório no book npm install @storybook/addon-actions --save-dev
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
