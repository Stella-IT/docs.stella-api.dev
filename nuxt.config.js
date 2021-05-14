import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#00a8ff'
  },
  
  i18n: {
    locales: () => [{
      code: 'ko',
      iso: 'ko-KR',
      file: 'ko-KR.js',
      name: '한국어'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    langDir: '../../../../locales/',
    defaultLocale: 'en'
  },
})
