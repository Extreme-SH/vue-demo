<template>
  <div class="container">
    <v-chart class="chart" :option="option" />
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
    name: "Chart1",
    data() {
      return {
        option: {
          backgroundColor: "rgba(131,240,156,0.48)",
          legend: {
            top: "bottom",
          },
          toolbox: {//工具栏，保存为图，数据视图等
            show: true,
            feature: {//工具栏配置
              mark: {show: true},
              dataView: {show: true,readOnly: true},//转为数据视图
              restore: {show: true},//
              saveAsImage: {show: true}//
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8,
              },
              data: [
                {value: 40, name: '服装'},
                {value: 38, name: '武器'},
                {value: 32, name: '护盾'},
                {value: 30, name: '游玩时间'},
                {value: 28, name: '点卡'},
                {value: 26, name: '礼包'},
                {value: 22, name: '周边'},
                {value: 18, name: '道具'}
              ]
            }
          ]

        },
      }
    },
    components: {
      VChart
    }
  }
</script>

<style scoped>
  .container {
    height: 685px;
    width: 1350px;
  }
</style>
