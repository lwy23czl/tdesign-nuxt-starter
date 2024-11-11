// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@tdesign-vue-next/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  tdesign: {
    resolveIcons: true,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
