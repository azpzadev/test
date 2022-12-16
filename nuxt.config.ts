
export default defineNuxtConfig({

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: [
      "~/assets/css/tailwind.css"
    ],
    modules: [
      '@nuxtjs/device',
     ]
  })