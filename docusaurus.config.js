// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Introduction to Programming',
  tagline: 'Introduction to Programming - Zohair ul Hasan',
  favicon: 'img/python-logo.ico',

  // Set the production url of your site here
  url: 'https://itp.zohair.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zohair-coder', // Usually your GitHub org/user name.
  projectName: 'itp-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
      image: 'img/python-logo.ico',
      navbar: {
        title: 'Introduction to Programming',
        logo: {
          alt: 'My Site Logo',
          src: 'img/python-logo.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'syllabusSidebar',
            position: 'left',
            label: 'Syllabus',
          },
          {
            type: 'docSidebar',
            sidebarId: 'lecturesSidebar',
            position: 'left',
            label: 'Lectures',
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
                label: 'Syllabus',
                to: '/',
              },
              {
                label: 'Lectures',
                to: '/lectures',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'zohair.ul.hasan@gmail.com',
                href: 'mailto:zohair.ul.hasan@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source code',
                href: 'https://github.com/Zohair-coder/itp-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zohair ul Hasan - Introduction to Programming`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
