// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    api: process.env.apiKey,
    secretKey: '123',

    // Public keys that are exposed to the client
    public: {
      publicKey: '456'
    }
  }

})
