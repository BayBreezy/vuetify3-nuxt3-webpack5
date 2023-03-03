import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(VueApexCharts);
});
