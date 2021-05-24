<template>

  <div style="height: 100%;width: 100%;background-size: 100% 100%;background-image: url('../../../../static/main_bg.jpg')">

    <img class="blur" src="../../../assets/images/East.png" alt="" height="100%" width="100%">
    <h1>Administration</h1>

    <div class="pageTop">
      &nbsp友情链接
    </div>
    <div style="padding: 30px">
      <a href="http://www.baidu.com" target="_blank"><img class="img" src="../../../assets/images/baidu.png" alt="" ></a>
      <a href="https://www.3dmgame.com/" target="_blank"><img class="img" src="../../../assets/images/3dm.png" alt="" ></a>
      <a href="http://www.steam.com" target="_blank"><img class="img" src="../../../assets/images/logo_steam.svg" alt="" ></a>
    </div>

  </div>

</template>

<script>
    export default {
        name: "Link"
    }
</script>

<style scoped>
  @import "../../../assets/style/Article.css";

  .pageTop {
    background: cadetblue;
    height: 25px;
    border: antiquewhite;
    border-style: solid;
    border-radius: 15px 15px 0 0;
  }
  .article{
    width: 100%;
    min-height: 500px;
    text-align: center;
    display: inline-block;
    border-style: solid;
    border-color: dimgray;
    float: left;
    border-width: 10px;
    border-radius: 50px 0 50px 0;
    background-color: lightsalmon;
    margin: 5px;
    color: dimgray;
  }
  .img{
    margin: 20px;
    background: black;
    width: 20%;
    height: 100px;
    border-radius: 15px;
    border: gray solid;
  }
  .img:hover{
    background: gray;
    box-shadow: 5px 5px 10px gray;
    transition-duration: 300ms;
  }
</style>
