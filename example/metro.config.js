/* eslint-disable import/no-commonjs */

const path = require('path');
// const glob = require('glob-to-regexp');
const blacklist = require('metro-config/src/defaults/blacklist');
const pak = require('../package.json');
const escape = require('escape-string-regexp');

const dependencies = Object.keys(pak.dependencies);

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, '..')],
  resolver: {
    blacklistRE: blacklist([
      new RegExp(
        `^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
      ),
      new RegExp(
        `^${escape(
          path.resolve(__dirname, '..', 'website', 'node_modules')
        )}\\/.*$`
      ),
    ]),
    providesModuleNodeModules: [
      'react-native',
      'react',
      '@expo/vector-icons',
      '@babel/runtime',
      'prop-types',
      ...dependencies,
    ],
  },
  // getProjectRoots() {
  //   return [__dirname, path.resolve(__dirname, '..')];
  // },
  // getProvidesModuleNodeModules() {
  //   return ['react-native', 'react', ...dependencies];
  // },
  // getBlacklistRE() {
  //   return blacklist([glob(`${path.resolve(__dirname, '..')}/node_modules/*`)]);
  // },
};
