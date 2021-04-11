const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Stella API Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation of Stella API',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'default-prefers-color-scheme',


  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Stella API',
      description: 'Stella API, API of Stella IT for Developers',
    },
    '/locales/ko/': {
      lang: 'ko-KR',
      title: 'Stella API',
      label: '한국어',
      description: 'Stella API, 개발자를 위한 Stella IT API',

    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Stella-IT/docs.stella-api.dev',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Edit this Page on GitHub',
    lastUpdated: true,
    sidebar: [
      '/getting-started/',
    ],
    sidebarDepth: 2,

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this Page on GitHub',
      },
      '/locales/ko/': {
        selectText: '언어',
        label: '한국어',
        editLinkText: 'GitHub에서 이 문서 수정하기',
      }

    }

    /*
    nav: [
      {
        text: '한국어',
        link: '/ko/',
      },
      {
        text: 'English',
        link: '/en/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
    */
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
