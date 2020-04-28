// const users = [{}];

const siteConfig = {
  title: 'react-native-ios-kit',
  tagline: 'The missing React Native UI Kit for iOS.',
  url: 'https://callstack.github.io',
  baseUrl: '/react-native-ios-kit/',
  projectName: 'react-native-ios-kit',
  organizationName: 'callstack', // or set an env variable ORGANIZATION_NAME
  favicon: 'img/favicon.png',
  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],
  presets: [
    [
        '@docusaurus/preset-classic',
      {
          docs: {
            // docs folder path relative to website dir.
            path: '../docs',
            // sidebars file relative to website dir.
            sidebarPath: require.resolve('./sidebars.json'),
          },
          theme: {
            customCss: require.resolve('./custom.css'),
          },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'react-native-ios-kit',
      logo: {
        src: 'img/ios-kit-white.svg',
        alt: 'react-native-ios-kit logo'
      },
      links: [
        { to: 'installation', label: 'Docs', position: 'right' },
        { to: 'avatar', label: 'API', position: 'right' },
        { to: 'help', label: 'Help', position: 'right'  },
        {
          href: 'https://github.com/callstack/react-native-ios-kit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/ios-kit.svg',
        href: 'https://opensource.facebook.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Callstack`,
    },
    // algolia: {
    //   apiKey: '47ecd3b21be71c5822571b9f59e52544',
    //   indexName: 'docusaurus-2',
    //   algoliaOptions: { ... },
    // },
    image: 'img/docusaurus.png',
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: false,

  },
  // companyName: 'Callstack',
  // title: 'react-native-ios-kit',
  // tagline: 'The missing React Native UI Kit for iOS.',
  // url: 'https://callstack.github.io',
  // baseUrl: '/react-native-ios-kit/',
  // headerLinks: [
  //   { doc: 'installation', label: 'Docs' },
  //   { doc: 'avatar', label: 'API' },
  //   { page: 'help', label: 'Help' },
  // ],
  // users,
  // headerIcon: 'img/ios-kit-white.svg',
  // footerIcon: 'img/ios-kit.svg',
  // favicon: 'img/favicon.png',
  // colors: {
  //   primaryColor: '#416BAF',
  //   secondaryColor: '#416BAF',
  // },
  // copyright: 'Copyright © 2018 Callstack',
  // organizationName: 'callstack', // or set an env variable ORGANIZATION_NAME
  // projectName: 'react-native-ios-kit',
  // highlight: {
  //   theme: 'solarized-dark',
  // },
  // scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  // repoUrl: 'https://github.com/callstack/react-native-ios-kit',
  // ogImage: 'img/ios-kit.svg',
};

module.exports = siteConfig;
