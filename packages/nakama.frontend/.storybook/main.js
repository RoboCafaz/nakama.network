module.exports = {
  stories: ['../src/**/__stories__/*.story.@(ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs'],
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      config.watchOptions = {
        poll: true,
        ignored: /node_modules/
      };
    }
    return config;
  }
};
