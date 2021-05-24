<template>
<!--  <div class="container">-->
<!--    <v-chart class="chart" :option="option" />-->
<!--    <v-chart class="chart" :option="option2" />-->
<!--    <v-chart class="chart" :option="option3" />-->
<!--    <v-chart class="chart" :option="option4" />-->
    <el-tabs v-model="activeName">
    <el-tab-pane name="first"><el-button slot="label" icon="el-icon-s-goods" :plain="true">充值组成</el-button>
      <Chart1></Chart1></el-tab-pane>
    <el-tab-pane :lazy="true" name="second"><el-button slot="label" icon="el-icon-s-goods" :plain="true">充值日期</el-button>
        <Chart2></Chart2>
    </el-tab-pane>
    <el-tab-pane :lazy="true" name="third"><el-button :plain="true" slot="label" icon="el-icon-present">击杀龙类图鉴</el-button>
      <Chart3></Chart3></el-tab-pane>
    <el-tab-pane :lazy="true" name="fourth"><el-button :plain="true" slot="label" icon="el-icon-money">战力分布</el-button>
      <Chart4></Chart4></el-tab-pane>
    </el-tabs>
<!--  </div>-->
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
  import {option} from "../../../dataJs/sunBurst";
  import {optionRadar} from "../../../dataJs/radar";

  // import echarts from "echarts/lib/echarts";

  import Chart1 from "./myDataChildren/Chart1";
  import Chart2 from "./myDataChildren/Chart2";
  import Chart3 from "./myDataChildren/Chart3";
  import Chart4 from "./myDataChildren/Chart4";

  const echarts = require("echarts/lib/echarts");

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
    name: "MyData",
    components: {
      Chart1,
      Chart2,
      VChart,
      Chart3,
      Chart4
    },

    data() {
      return {
        activeName: "first",

        // option3: option,

        option4: optionRadar

      };
    },

    methods: {
      // initDateList() {
      //想要data中的数据拿到由另外的数据经过方法处理之后的数据的话，在方法中定义方法
      //再在created中调用定义好的初始化方法，另外可以使用computed中的数据，但是注意方法
      //赋值的先后，data的数据初始化在computed的前面，如果在data中引用computed中的数据
      //就会出现undefined，具体方法看blog
      // console.log(this.data1);
      // console.log(this.data1.map((item) => {
      //   return item[0]
      // }));
      // this.dateList = this.data1.map((item) => {
      //   return item[0]
      // });
      // this.valueList = this.data1.map((item) => {
      //   return item[1]
      // });
      // },



    },
    created() {
      // this.initDateList();//要用括号才是调用方法
      //不能在data中写死，要在函数中进行重新的赋值
      // this.option2.xAxis[0].data=this.dateList;
      // this.option2.xAxis[1].data=this.valueList;
      //下面是给折线赋值
      // this.option2.series[0].data = this.valueList;
      // this.option2.series[1].data = this.valueList;

      // this.option2.visualMap[1].max = Object.keys(this.dateList).length-1



    },
    mounted() {

    }
  };
</script>

<style scoped>
  .container {
    height: 700px;
    width: 1200px;
  }
</style>
