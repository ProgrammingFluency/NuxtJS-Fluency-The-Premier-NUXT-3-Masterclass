// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js'
        }
      ]
    }
  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken
  }
})
