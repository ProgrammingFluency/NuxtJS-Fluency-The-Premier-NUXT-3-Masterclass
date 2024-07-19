// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    stripeSK: process.env.STRIPE_SK_KEY,
    public: {
      stripePK: process.env.STRIPE_PK_KEY
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },
  app: {
    head: {
      title: 'Shopiverse',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js',
          defer: true
        },
        {
          src: 'https://js.stripe.com/v3',
          defer: true
        }
      ]
    }
  }
})
