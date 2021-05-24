<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
<!--    <el-tab-pane label="推荐商品" name="first"></el-tab-pane>-->
    <el-tab-pane><el-button slot="label" icon="el-icon-s-goods" :plain="true">推荐商品</el-button><popular-goods></popular-goods></el-tab-pane>
    <el-tab-pane><el-button :plain="true" slot="label" icon="el-icon-present">礼包商城</el-button><gift></gift></el-tab-pane>
    <el-tab-pane><el-button :plain="true" slot="label" icon="el-icon-money">奖券兑换</el-button><lottery></lottery></el-tab-pane>
    <el-tab-pane><el-button :plain="true" slot="label" icon="el-icon-s-finance">福利多多</el-button><welfare></welfare></el-tab-pane>
  </el-tabs>
</template>
<script>

  import popularGoods from "./entranceChildren/popularGoods";
  import gift from "./entranceChildren/Gift";
  import lottery from "./entranceChildren/Lottery";
  import welfare from "./entranceChildren/welflare";

  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    },
    components: {
      popularGoods,
      gift,
      lottery,
      welfare
    }
  };
</script>

<style scoped>


  .el-tabs {
    padding-top: 3px;
  }


</style>
