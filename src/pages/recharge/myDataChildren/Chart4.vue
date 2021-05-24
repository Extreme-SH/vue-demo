<template>

  <div class="container3">
    <v-chart class="chart" :option="option4" />
  </div>

</template>

<script>

  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { PieChart } from "echarts/charts";
  import {LineChart} from "echarts/charts";
  import {SunburstChart} from "echarts/charts";
  import {RadarChart} from "echarts/charts";
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    VisualMapComponent,
    GridComponent,
  } from "echarts/components";
  import VChart from "vue-echarts";
  import {optionRadar} from "../../../../dataJs/radar";

  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    ToolboxComponent,
    VisualMapComponent,
    GridComponent,
    LineChart,
    SunburstChart,
    RadarChart
  ]);

  export default {
    name: "Chart4",
    components: {
      VChart
    },
    data() {
      return {
        option4: optionRadar
      }
    }

  }
</script>

<style scoped>
  .container3 {
    height: 700px;
    width: 1350px;
  }
</style>
