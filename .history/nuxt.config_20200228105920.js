const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) { 
        return `${title}`
      }
      return 'Prestamype - Motorizado'
    }
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  pwa: {
    icon: {

    },
    manifest: {
      lang: 'es',
      name: "Prestamype - Motorizado",
      short_name: "Prestamype",
      display: 'standalone', 
      theme_color: '#1ea5a1'
    },
    workbox: {
      workboxExtensions : '@/plugins/sw-background-sync.js', 
    }
  },

  axios: {
    baseURL: 'http://127.0.0.1:3333/api'
  },

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    // treeShake: true, //For change vuetify variables scss in dev / by Default its only in prod
    theme: {
      themes: {
        light: {
          primary: '#02c6c1',
          secondary: '#02c6c1'
        }
      }
    }
  },
  

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [
    { src: '~plugins/validate.js' },
    { src: '~/services/backend.js' },
    { src: '~/plugins/global.js' },
    { src: '~/plugins/identiface.js', mode: 'client' }
  ],

  // https://nuxtjs.org/api/configuration-css
  css: ['~assets/styles/app'],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    transpile: ['vee-validate/dist/rules'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
