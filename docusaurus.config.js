// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Space War News',
  tagline: 'The Only Source of News on the Space War',
  url: 'https://spacewarnews.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://example.com/',
        },
        blog: false, 
        // {
        //   showReadingTime: true,
        //   blogSidebarCount: "ALL",
        //   blogSidebarTitle: "All News",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://example.com/",
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    // Use custom blog plugin
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogSidebarCount: "ALL",
        blogSidebarTitle: 'All News',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'SWN Logo',
          src: 'img/SWN-Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-to-space',
            position: 'left',
            label: 'History',
          },
          {to: '/blog', label: 'Latest News', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'History',
                to: '/docs/category/obsession-with-space',
              },
            ],
          },
          {
            title: 'News',
            items: [
              {
                label: 'Latest News',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © Space War News ${new Date().getFullYear()}`,
      },
      prism: {
        darkTheme: darkCodeTheme
      },
    }),
};

module.exports = config;
