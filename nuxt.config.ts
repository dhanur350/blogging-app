// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  
  ssr: true,
  runtimeConfig: {
    // public config
    mongodbUri: process.env.MONGODBURI,
    public: {
      appName: 'Nuxt4 Blog',
    }
  }
})