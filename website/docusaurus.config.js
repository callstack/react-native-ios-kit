// const users = [{}];

const siteConfig = {
  title: 'react-native-ios-kit',
  tagline: 'The missing React Native UI Kit for iOS.',
  url: 'https://callstack.github.io',
  baseUrl: '/react-native-ios-kit/',
  projectName: 'react-native-ios-kit',
  organizationName: 'callstack', // or set an env variable ORGANIZATION_NAME
  favicon: 'img/favicon.png',
  themes: ['@docusaurus/theme-classic'],
  presets: [
    [
        '@docusaurus/preset-classic',
      {
          docs: {
            // docs folder path relative to website dir.
            path: 'docs',
            // sidebars file relative to website dir.
            sidebarPath: require.resolve('./sidebars.json'),
            editUrl:
            'https://github.com/callstack/react-native-ios-kit/edit/master/website/',

          },
          theme: {
            customCss: require.resolve('./custom.css'),
          },
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: '3fc3f7484d62d6435dfb39ab39ed8b24',
      indexName: 'react-native-ios-kit',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'react-native-ios-kit',
      logo: {
        src: 'img/ios-kit-white.svg',
        alt: 'react-native-ios-kit logo'
      },
      links: [
        { to: 'docs/installation', label: 'Docs', position: 'right' },
        { to: 'docs/avatar', label: 'API', position: 'right' },
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/installation',
            },
            {
              label: 'API Reference',
              to: 'docs/avatar',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/callstackio'
            },
            {
              label: 'Discord',
              to: 'https://discord.gg/aUzGqu'
            },
          ]
        }
      ],
      logo: {
        alt: 'ios kit Logo',
        src: 'img/callstack-logo.svg',
        href: 'https://callstack.com/open-source/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Callstack. Built with Docusaurus`,
    },
    image: 'img/docusaurus.png',
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: false,
  },
};

module.exports = siteConfig;
