/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  companyName: 'Callstack',
  title: 'react native ios-kit' /* title for your website */,
  tagline: 'The missing React Native UI Kit for iOS.',
  url:
    'https://callstack.github.io/react-native-ios-kit/' /* your website url */,
  baseUrl: '' /* base url for your project */,
  projectName: 'rn-ios-kit',
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { doc: 'api', label: 'API' },
    { page: 'help', label: 'Help' },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: '',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#007aff',
    secondaryColor: '#416BAF',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © 2018 Callstack',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'ios-kit', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/callstack/react-native-ios-kit',
};

module.exports = siteConfig;
