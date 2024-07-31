// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-31',
  css: [
    '~/assets/styles/style.css',
    'animate.css'
  ],
  modules: [
    "@nuxtjs/tailwindcss"
  ]
})