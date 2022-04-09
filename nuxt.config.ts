import { defineNuxtConfig } from 'nuxt3'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@vueuse/nuxt',

  ],
  alias: {
    "@common": "/components/common",
    "@ui": "/components/ui"
  },
  router: {
    
    trailingSlash: false
  },
  // nitro: {
  //   preset: 'azure_functions'
  // },
  
})
