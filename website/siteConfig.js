const users = [{}];

const siteConfig = {
  companyName: 'Callstack',
  title: 'react-native-ios-kit',
  tagline: 'The missing React Native UI Kit for iOS.',
  url: 'https://callstack.github.io',
  baseUrl: '/react-native-ios-kit/',
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { doc: 'button', label: 'API' },
    { page: 'help', label: 'Help' },
  ],
  users,
  headerIcon: 'img/ios-kit-white.svg',
  footerIcon: 'img/ios-kit.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#416BAF',
    secondaryColor: '#416BAF',
  },
  copyright: 'Copyright © 2018 Callstack',
  organizationName: 'callstack', // or set an env variable ORGANIZATION_NAME
  projectName: 'react-native-ios-kit',
  highlight: {
    theme: 'solarized-dark',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/callstack/react-native-ios-kit',
  ogImage: 'img/ios-kit.svg',
};

module.exports = siteConfig;
