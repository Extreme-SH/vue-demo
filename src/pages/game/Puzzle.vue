<template>

  <div id="body" style="background: blanchedalmond;height: 740px;width: 100%;">

    <h2 style="color: chocolate;margin-left: 2%;padding-top: 10px">欢迎来到我的....emmmm,不知道啥游戏</h2>
    <div class="Left">
      <div class="pageLeft">
        <h1>规则</h1>
        <li class="li">点击方块，移动到空白位置</li>
        <li class="li">前后左右都没有空白的方块不能点击</li>
        <li class="li">少废话！就是不能点！</li>
        <li class="li">从1顺序排到15，就算你赢了好了</li>
      </div>

      <div class="pageLeft" style="height: auto">
        <h1>操作技巧</h1>
        <li class="li">1.前往农贸市场置办一头鼠标</li>
        <li class="li">2.将鼠标赶进你的电脑里去</li>
        <li class="li">3.接下来你只需要随便敲敲它就行了</li>
      </div>
    </div>

  </div>

</template>

<script>

  import {createTable} from "../../../dataJs/gameJs/puzzle";

  export default {
    name: "Puzzle",
    data() {
      return {}
    },
    mounted() {
      createTable();
    }
  }


</script>

<style>

  @import "../../assets/style/puzzle.css";

</style>
