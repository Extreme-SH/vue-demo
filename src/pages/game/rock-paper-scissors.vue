<template>
  <div style="height: 100%;width: 100%;background-color: rgba(152,251,152,0.6)">
  <!-- 系统出拳 -->
  <div class="top">
    <div class="sys">
    </div>
  </div>
  <!-- 玩家出拳 -->
  <div class="middle">
    <div class="left" @click="select">
    </div>
    <div class="centerleft">
    </div>
    <div class="center" @click="select">
    </div>
    <div class="centerright">
    </div>
    <div class="right" @click="select">
    </div>
  </div>
  <!-- 统计得分 -->
  <div class="bottom" >
    <div class="left">
      <div class="win">
        <span class="a">Win:</span>
        <span class="b">0</span>
      </div>
    </div>
    <div class="center">
      <div class="tie">
        <span class="a">Tie:</span>
        <span class="b">0</span>
      </div>

    </div>
    <div class="right">
      <div class="lose">
        <span class="a">Lose:</span>
        <span class="b">0</span>
      </div>
    </div>
  </div>
    <el-button round @click="end" class="btn">
      结束
    </el-button>

</div>
</template>

<script>

  import {end,select} from "../../../dataJs/gameJs/rps";

  export default {
    name: "rock-paper-scissors",
    data() {
      return {}
    },
    methods: {
      end,
      select
    }

    }
</script>

<style>

  .top{
    margin-top: 2%;
    margin-bottom: 2%;
    height: 300px;
    width: 100%;
    position: relative;
  }
  .sys{
    position: absolute;
    position: center;
    left: 40%;
    height: 100%;
    width: 40%;
    background: url(../../../static/Paper.png) no-repeat;
    background-size: contain;
  }
  .middle{
    height: 150px;
    width: 100%;
    margin-bottom: 0px;
  }
  .middle .left{
    float: left;
    width: 20%;
    height: 100%;
    background: url(../../../static/Scissors.png) no-repeat;
    background-size: contain;
    background-size:80px;
    background-position: center;
  }
  .middle .centerleft{
    float: left;
    width: 20%;
    height: 100%;
  }
  .middle .center{
    float: left;
    width: 20%;
    height: 100%;
    background: url(../../../static/Rock.png) no-repeat;
    background-size: contain;
    background-size:80px;
    background-position: center;
  }
  .middle .centerright{
    float: left;
    width: 20%;
    height: 100%;

  }
  .middle .right{
    float: left;
    width: 20%;
    height: 100%;
    background: url(../../../static/Paper.png) no-repeat;
    background-size: contain;
    background-size:80px;
    background-position: center;
  }
  .bottom{
    height: 100px;
    width: 100%;
  }
  .bottom .left{
    float: left;
    width: 33%;
    height: 100%;
  }
  .bottom .center{
    float: left;
    width: 33%;
    height: 100%;
  }
  .bottom .right{
    float: left;
    width: 33%;
    height: 100%;
    text-align: center;
  }
  .win{
    margin-left: 40%;
    margin-top: 30%;
  }
  .tie{
    margin-left: 40%;
    margin-top: 30%;
  }
  .lose{
    margin-left: 40%;
    margin-top: 30%;
  }
  span.a{
    font-size: 20px;
  }
  span.b{
    font-size: 20px;
    font-weight: bolder;
    color:red;
  }
  .btn{
    float: left;
    margin-left: 45%;
    margin-top: 7%;
    width: 150px;
    background-color: rgba(67, 205, 128, 0.66);
  }
  #btn1{
    width: 20%;
    height: 40px;
    background-color: rgba(224, 206, 206, 0.377);
    text-align: center;
    font-size: 25px;
  }
  #btn1:hover{
    background-color: rgb(224, 206, 206);
    font-size: 30px;
    /* color: gray; */
  }
</style>
