<template>
  <div style="height: 350px">
    <apexchart
      v-if="show"
      height="100%"
      width="100%"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
/**
 * NOT TO SELF 🚨
 * Don't do this in a production app. Ensure that you create a base chart and pass in options and styles
 * Defining the chart options in the component is not a good idea.
 * Best case scenario is creating a utility that has the styles & options and pass them in.
 * Having the series data in the component is fine.
 */
import { type ApexOptions } from "apexcharts";
import colors from "tailwindcss/colors.js";

const show = ref(false);
const options = ref<ApexOptions>({
  chart: {
    id: "basic-line",
    fontFamily: "Inter var",
    zoom: { enabled: false },
    toolbar: { show: false },

    dropShadow: {
      color: colors.gray[600],
      top: 10,
      left: 0,
      blur: 2,
      opacity: 0.08,
      enabled: true,
    },
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    lineCap: "round",
    width: 4,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(100, 116, 139,0.3)",
    strokeDashArray: 5,
  },
  colors: ["#60a5fa", "#f87171"],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: colors.gray[400],
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: colors.gray[400],
      },
    },
  },
});

const series = ref([
  {
    name: "Profit",
    data: [10, 20, 15, 22, 10, 18, 12, 19, 10],
  },
  {
    name: "Loss",
    data: [5, 10, 5, 12, 5, 9, 6, 11, 5],
  },
]);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 200);
});
</script>
