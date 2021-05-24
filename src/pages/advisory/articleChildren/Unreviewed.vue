<template>

  <div style="height: 100%;width: 100%;background-size: 100% 100%;background-image: url('../../../../static/main_bg.jpg')">

    <img class="blur" src="../../../assets/images/East.png" alt="" height="100%" width="100%">
    <h1>Administration</h1>

    <div class="pageTop">
      &nbsp已发布文章查看
    </div>
    <div>
      搜索
      <textarea class="text" ></textarea>
      <button class="search">搜索</button>
    </div>
    <hr width="90%">
    <div class="InnerLeft" style="line-height: 30px">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">
      <a href="article/realArticle" target="_blank" class="lineFont">《怪猎冰原》开启道具选举投票 前四将免费赠与玩家</a>
      <hr width="90%" align="left">


    </div>

    <div class="InnerRight">
      <div align="center">公告</div>
      <hr width="60%">
      今日没有公告,但是我就想多说几句，今天好好干，明天就能奖励你多干一天
    </div>

    <hr width="90%">
    <div class="InnerBottom" align="center">
      第一页<<|&nbsp<&nbsp|&nbsp1&nbsp|&nbsp>&nbsp|>>末页
    </div>


  </div>

</template>

<script>
    export default {
        name: "Unreviewed"
    }
</script>

<style scoped>

  @import "../../../assets/style/Article.css";
  .pageTop {
    background: cadetblue;
    height: 25px;
    border: antiquewhite solid;
    border-radius: 15px 15px 0 0;
  }
  .lineFont {
    color: grey;
  }

  .lineFont:hover{
    color: cornflowerblue;
  }
</style>
