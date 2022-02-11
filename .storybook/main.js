const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    Object.assign(config.resolve.alias, {
      '@space-travel-design-system/ui': path.resolve(__dirname, '../packages/ui/src'),
      '@space-travel-design-system/utils': path.resolve(
        __dirname,
        '../packages/utils/src',
      )
    });

    return config;
  }
}
