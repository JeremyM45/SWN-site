// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const blogLinks = [
  {
    label: 'All News',
    to: '/blog'
  },
  {
    label: 'Critical Updates',
    to: '/blog/tags/critical-update',
  },
  {
    label: 'Space Advancements',
    to: '/blog/tags/space-advancement',
  },
  {
    label: 'Letters From The Front',
    to: '/blog/tags/letters-from-the-front',
  },
  {
    label: 'Why We Cover The Space War',
    to: '/blog/tags/why-we-cover-the-space-war',
  },
  {
    label: 'Future of Humanity',
    to: '/blog/tags/future-of-humanity',
  },
  {
    label: 'Editors Notes',
    to: '/blog/tags/editors-note',
  },
]

const docLinks = [
  {
    label: 'Why Space',
    to: '/docs/category/what-we-learned',
  },
  {
    label: 'Getting To Space',
    to: '/docs/category/getting-to-space',
  },
  {
  label: 'Humanities Obsession With Space',
  to: '/docs/category/obsession-with-space',
  }
]

function generateBlogLinks(labelArray) {
  if(labelArray){
    return blogLinks.filter(x => x.label == labelArray[0] || x.label == labelArray[1] || x.label == labelArray[2])
  }
  else{
    return blogLinks.map(x => x);
  }
  
}

const generateDocsLinks = (labelArray) => {
  if(labelArray){
    return docLinks.filter(x => x.label == labelArray[0] || x.label == labelArray[1] || x.label == labelArray[2])
  }
  else{
    return docLinks.map(x => x);
  }
}

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
            docId: 'getting-to-space/getting-to-space',
            position: 'left',
            label: 'History',
          },
          {
            type: 'dropdown',
            label: 'News',
            position: 'left',
            items: generateBlogLinks()
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'History',
            items: generateDocsLinks(),
          },
          {
            title: 'Who We Are',
            items: generateBlogLinks(['Why We Cover The Space War', 'Future of Humanity', 'Editors Notes'])
          },
          {
            title: 'Latest From The Space War',
            items:  generateBlogLinks(['Critical Updates', 'Space Advancements', 'Letters From The Front'])
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
