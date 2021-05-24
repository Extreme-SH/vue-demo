<template>
  <div class="container2">
    <v-chart class="chart" :option="option3" />
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
  import {option} from "../../../../dataJs/sunBurst";
  // import {optionRadar} from "../../../dataJs/radar";

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
    name: "Chart3",
    components: {
      VChart
    },
    data() {
      return{
        option3: option
      }
    }

  }
</script>

<style scoped>
  .container2 {
    height: 700px;
    width: 1350px;
    /*border: 1px red solid;*/
  }
</style>
