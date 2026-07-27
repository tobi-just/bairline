import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    defaults: {
      global: {
        style: { fontFamily: "'Quicksand', sans-serif" },
      },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#1565C0',
            accent: '#424242',
            secondary: '#FF8F00',
            info: '#26A69A',
            warning: '#FFC107',
            error: '#FF3D00',
            success: '#69F0AE',
            background: '#29323c',
            surface: '#29323c',
          },
        },
      },
    },
  })

  app.vueApp.use(vuetify)
})
