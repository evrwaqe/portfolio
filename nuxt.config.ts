// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&display=swap',
        },
      ],
    },
  },
})
