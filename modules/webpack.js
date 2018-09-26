const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = async function() {
  this.extendBuild((config, { isClient, isDev }) => {
    // ESLint
    if (isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    // Stylelint
    config.plugins.push(
      new StyleLintPlugin({
        configFile: path.resolve(__dirname, '../.stylelintrc.json'),
        syntax: 'scss',
        files: ['**/*.scss', '**/*.vue'],
      }),
    );

  });
};
