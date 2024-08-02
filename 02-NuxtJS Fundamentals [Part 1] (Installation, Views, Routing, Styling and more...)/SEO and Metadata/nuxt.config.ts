// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=2',
      title: 'Nuxt app',
      meta: [
        {
          name: 'description',
          content: 'Nuxt course'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '~/assets/styles/styles.css'
        }
      ]
    }
  }
})
