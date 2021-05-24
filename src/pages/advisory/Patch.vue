<template>
  <div>

  <div>
    <div class="pageTop">
      <img src="../../assets/images/mhi-logo-lite.jpg" width="100%" alt="" style="border-radius: 15px 15px 0 0 " align="center" >
    </div>
    <div style="width: 99.7%;background: black;border-left: gray solid;border-right: gray solid;z-index: 1">
      <label for="search"></label><input id="search" class="search" type="text" placeholder="搜索Mods、补丁、插件等">
      <button class="searchButton">搜索</button>
    </div>


    <div class="pageLeft">
      使用相关
      <li class="liLeft">使用条例</li>
      <li class="liLeft">版权支持</li>
      <li class="liLeft">转载条例</li>
      <li class="liLeft">关于</li>
    </div>

    <div class="pageRight" style="background-image: url('../../../static/BGP5.jpeg');opacity: 1.5">
      <Default></Default>
    </div>

  </div>

  <div class="pageLeft" style="border-radius: 15px;border-top: gray solid;margin-top: 75px;padding: 15px">
    即时资讯
    <img src="../../assets/images/news1.jpg" alt="" align="center" width="225" height="150">
    <a style="text-decoration: none" href="Http://www.baidu.com">《怪物猎人：世界》桌游公布众筹宣传片 猎人激战雄火龙</a>
    <hr width="80%" color="gray">
    <img src="../../assets/images/new2.jpg" alt="" align="center" width="225" height="130">
    <a style="text-decoration: none" href="Http://www.baidu.com">卡普空白金销量榜：《怪物猎人：世界》仍第一 《冰原》名次上升</a>
    <hr width="80%" color="gray">
    <img src="../../assets/images/news3.jpg" alt="" align="center" width="225" height="130">
    <a style="text-decoration: none" href="Http://www.baidu.com">《怪物猎人世界：冰原》道具淘汰赛套装包免费发放 限时领取</a>
  </div>
</div>
</template>

<script>

  import Default from "./patchChildren/Default"

    export default {
      name: "Patch",
      data() {
        return {

        }
      },
      components: {
        Default
      }



    }
</script>

<style scoped>

  @import "../../assets/style/default.css";
  /*body{*/
  /*  backdrop-filter: blur(50%);*/
  /*  background-size: 100% 100%;*/
  /*}*/

  /*.pageRight {*/
  /*  background-image: url("../../assets/images/BGP5.jpeg");*/
  /*  backdrop-filter: blur(20px)*/
  /*}*/
</style>
