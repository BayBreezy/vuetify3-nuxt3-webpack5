import { createVuetify } from "vuetify";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: BLUE_THEME,
      themes: {
        blueTheme,
      },
    },
    icons: {
      defaultSet: "custom",
      aliases,
      sets: { custom },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
