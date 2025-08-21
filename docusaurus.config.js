// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exia Documentation',
  tagline: 'Exia c\'est cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://doc.exia.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Exia-Corp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Exia-FR/exia/tree/documentation/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/exia-social-card.jpg',
      navbar: {
        title: 'Exia Documentation',
        logo: {
          alt: 'Exia Logo',
          src: 'img/exia-documentation-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: 'Introduction'
          },
          {
            type: 'docSidebar',
            sidebarId: 'dashSidebar',
            position: 'left',
            label: 'Dashboard',
          },
          {
            type: 'docSidebar',
            sidebarId: 'botsSidebar',
            position: 'left',
            label: 'Exia Perso',
          },
          {
            href: 'https://github.com/Exia-Corp/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/2S8bMnWjtU',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/exiacorp/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@exiacorp',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/exiacorp',
              }
            ],
          },
          {
            title: "Navigation",
            items: [
              {
                label: 'Dashboard',
                href: 'https://dashboard.exia.site',
              },
              {
                label: 'Monitoring',
                href: 'https://status.exia.site'
              },
              {
                label: 'Vitrine',
                href: 'https://exia.site'
              }
            ]
          },
          {
            title: 'Légal',
            items: [
              {
                label: 'Condition général d\'utilisation',
                href: 'https://cgu.exia.site'
              },
              {
                label: 'Condition général de vente',
                href: 'https://cgv.exia.site'
              },
              {
                label: 'Politique de confidentialité',
                href: 'https://pdc.exia.site'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Exia. Built with ❤️ by Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;