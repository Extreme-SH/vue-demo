<template>
  <div class="container2">
    <v-chart class="chart" :option="option2"/>
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
    name: "Chart2",
    components: {
      VChart
    },
    data() {
      return {
        data1: [
          ["2000-06-05",116],
          ["2000-06-06",129],
          ["2000-06-07",135],
          ["2000-06-08",86],
          ["2000-06-09",73],
          ["2000-06-10",85],
          ["2000-06-11",73],
          ["2000-06-12",68],
          ["2000-06-13",92],
          ["2000-06-14",130],
          ["2000-06-15",245],
          ["2000-06-16",139],
          ["2000-06-17",115],
          ["2000-06-18",111],
          ["2000-06-19",309],
          ["2000-06-20",206],
          ["2000-06-21",137],
          ["2000-06-22",128],
          ["2000-06-23",85],
          ["2000-06-24",94],
          ["2000-06-25",71],
          ["2000-06-26",106],
          ["2000-06-27",84],
          ["2000-06-28",93],
          ["2000-06-29",85],
          ["2000-06-30",73],
          ["2000-07-01",83],
          ["2000-07-02",125],
          ["2000-07-03",107],
          ["2000-07-04",82],
          ["2000-07-05",44],
          ["2000-07-06",72],
          ["2000-07-07",106],
          ["2000-07-08",107],
          ["2000-07-09",66],
          ["2000-07-10",91],
          ["2000-07-11",92],
          ["2000-07-12",113],
          ["2000-07-13",107],
          ["2000-07-14",131],
          ["2000-07-15",111],
          ["2000-07-16",64],
          ["2000-07-17",69],
          ["2000-07-18",88],
          ["2000-07-19",77],
          ["2000-07-20",83],
          ["2000-07-21",111],
          ["2000-07-22",57],
          ["2000-07-23",55],
          ["2000-07-24",60]],
        dateList: {},
        valueList: {},
        option2: {
          backgroundColor: "#251d33",
          visualMap: [
            {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }, {
            show: false,
            type: "continuous",
              seriesIndex: 1,
              dimension: 0,
              min: 0,
              max: 0

            }],
          title: [
            {
            left: 'center',
            text: '充值曲线图'
          },
            {
            top: '55%',
            left: 'center',
            text: '预期充值曲线图'
          }
          ],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [
            {
            data: {}//和上面的原理一样，如果需要等待前面的数据处理完毕，就不能提前写死，而是在
              //初始化函数中赋值，这和vue的生命周期有关系
          },
            {
            data: {},
            gridIndex: 1
          }],
          yAxis: [
            {
          }, {
            gridIndex: 1
          }],
          grid: [{
            bottom: '60%'
          }, {
            top: '60%'
          }],
          series: [{
            type: 'line',
            showSymbol: false,
            data: {},
          }, {
            type: 'line',
            showSymbol: false,
            data: {},
            xAxisIndex: 1,
            yAxisIndex: 1
          }]
        },
      }
    },
    methods: {
        initDateList() {
        // 想要data中的数据拿到由另外的数据经过方法处理之后的数据的话，在方法中定义方法
        // 再在created中调用定义好的初始化方法，另外可以使用computed中的数据，但是注意方法
        // 赋值的先后，data的数据初始化在computed的前面，如果在data中引用computed中的数据
        // 就会出现undefined，具体方法看blog
        // console.log(this.data1);
        // console.log(this.data1.map((item) => {
        //   return item[0]
        // }));
        this.dateList = this.data1.map((item) => {
          return item[0]
        });
        this.valueList = this.data1.map((item) => {
          return item[1]
        });
        },
    },
    created() {
      this.initDateList();//要用括号才是调用方法
      // 不能在data中写死，要在函数中进行重新的赋值
      this.option2.xAxis[0].data=this.dateList;
      this.option2.xAxis[1].data=this.valueList;
      // 下面是给折线赋值
      this.option2.series[0].data = this.valueList;
      this.option2.series[1].data = this.valueList;
      this.option2.visualMap[1].max = Object.keys(this.dateList).length-1
    }


  }
</script>

<style scoped>

  .container2 {
    height: 650px;
    width: 1350px;
    /*border: 1px red solid;*/
  }

</style>
