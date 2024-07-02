// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
        gtag: {
          trackingID: 'G-0HN254RBPM',
          anonymizeIP: false,
        },
        docs: {
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
          {
            type: 'docSidebar',
            sidebarId: 'activitiesSidebar',
            position: 'left',
            label: 'Activites',
          },
          {
            type: 'docSidebar',
            sidebarId: 'homeworksSidebar',
            position: 'left',
            label: 'Homeworks',
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
              {
                label: 'Activities',
                to: '/activities/replit-setup',
              },
              {
                label: 'Homeworks',
                to: '/homeworks/quadratic-equation-solver',
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
