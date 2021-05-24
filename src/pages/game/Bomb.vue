<template>
  <div style="height: 100%;width: 100%;text-align: center;">
    <img src="../../../static/title.png" style="margin-top: 20%">

    <el-button @click="start1" circle type="danger" icon="el-icon-warning-outline" class="startBtn">开始拆弹<img src="../../../static/cover.png"></el-button>

  </div>


</template>

<script>

  import {start} from "../../../dataJs/gameJs/bomb";


  export default {
    name: "bomb",
    data() {
      return {

      }
    },
    methods: {
      start1: start,
    }
  }
</script>

<style scoped>

  /*修改默认样式*/
  .el-button--danger {
    width: 70px;
    font-size: 3px;
    padding: 0px;
    height:70px;
    background-color: #e23232;
  }

  .startBtn {
    float: right;
    margin-right: 40%;
    margin-top: 8%;
  }

  .startBtn img {
    z-index: -2;
    position: absolute;
    right: 15%;
    top: -3px;
  }


</style>
