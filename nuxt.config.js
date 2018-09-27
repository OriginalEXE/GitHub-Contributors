/* eslint-disable no-param-reassign */
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
import githubConfig from './.github.json';

module.exports = {
  env: {
    ...githubConfig,
  },
  head: {
    title: 'GitHub Contributors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Analyze contributors to a specific GitHub repository.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700',
      },
    ],
  },
  loading: false,
  css: [
    'normalize.css',
    '@/scss/global.scss',
  ],
  modules: [
    'nuxt-sass-resources-loader',
    '~~/modules/webpack'
  ],
  sassResources: [
    '@/scss/abstracts/_variables.scss',
    '@/scss/abstracts/_functions.scss',
    '@/scss/abstracts/_mixins.scss',
  ],
  build: {
    extend (config, ctx) {
      config.resolve = config.resolve || {};
      config.resolve.alias = config.resolve.alias || {};
      config.resolve.alias.PublicCSSAbstracts = '~/assets/css/abstracts';
    },
    extractCSS: true,
  },
};
