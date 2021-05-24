<template>
    <div style="height: 100%;width: 100%;background-size: 100% 100%;background-image: url('../../../../static/bg_pattern.jpg')">

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
      <div class="InnerLeft">
        <div class="news lineFont">《怪物猎人：世界》武器派生强化路线与素材</div><div style="color: red;float: right;position: relative;right: 70px">[虚假文章]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》武器终极派生图鉴</div><div style="color: red;float: right;position: relative;right: 70px">[图文不符]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人世界》捏脸数据合集 各种小姐姐</div><div style="color: red;float: right;position: relative;right: 70px">[为什么我没有捏出来]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》大型怪弱点肉质及素材表</div><div style="color: red;float: right;position: relative;right: 70px">[请到【美食天下】网站发表]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》图文攻略 武器怪物全解</div><div style="color: red;float: right;position: relative;right: 70px">[虚假文章]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》全武器毕业向配装汇总</div><div style="color: red;float: right;position: relative;right: 70px">[凭什么在游戏网站说学习]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》修改器及使用方法介绍</div><div style="color: red;float: right;position: relative;right: 70px">[方法很有用，但我不想给别人用]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》全怪物弱点及抗性一览</div><div style="color: red;float: right;position: relative;right: 70px">[挑软柿子捏，有伤风化]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》全自由任务解锁方式一览</div><div style="color: red;float: right;position: relative;right: 70px">[内容无用]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》全外观装备入手方法说明</div><div style="color: red;float: right;position: relative;right: 70px">[内容无用]</div><hr width="90%" align="left">
        <div class="news lineFont">《怪物猎人：世界》太刀热门配装合集</div><div style="color: red;float: right;position: relative;right: 70px">[...反正没过审]</div><br>
      </div>

      <div class="InnerRight">
        <div align="center">公告</div>
        <hr width="60%">
        今日没有公告,但是我就想多说几句，今天好好干，明天就能奖励你多干一天
      </div>

      <hr width="90%">
      <div class="InnerBottom" align="center">
        第一页<<|&nbsp<&nbsp|&nbsp1&nbsp|&nbsp2&nbsp|&nbsp3&nbsp|&nbsp4&nbsp|&nbsp5&nbsp|&nbsp6&nbsp|...|103|&nbsp>&nbsp|>>末页
      </div>

    </div>
</template>

<script>
    export default {
        name: "PassFail"
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
