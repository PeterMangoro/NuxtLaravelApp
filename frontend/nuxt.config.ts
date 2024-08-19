// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "nuxt-auth-sanctum", 
    "@nuxt/ui",
    '@vueuse/nuxt',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
  
  ],

  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
},

runtimeConfig: {
  laravelProxyUrl: "http://localhost:8000",
},

})