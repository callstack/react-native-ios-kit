const users = [{}];

const siteConfig = {
  companyName: 'Callstack',
  title: 'react-native-ios-kit',
  tagline: 'The missing React Native UI Kit for iOS.',
  url: 'https://callstack.github.io/react-native-ios-kit',
  baseUrl: '/',
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { doc: 'button', label: 'API' },
    { page: 'help', label: 'Help' },
  ],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: '',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#416BAF',
    secondaryColor: '#007aff',
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
};

module.exports = siteConfig;
