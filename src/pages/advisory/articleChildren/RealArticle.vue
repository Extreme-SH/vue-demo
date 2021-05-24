<template>

  <div>


    <div class="InnerArticle" style="padding: 20px">
      <div align="center" style="color: gray"><h1>《怪物猎人：世界 冰原》开启道具选举投票 前四将免费赠与玩家</h1></div>
      <div align="center" style="color: gray"><h5>2020-03-18 17:11:22 作者：心碎的豆浆 编辑：心碎的豆浆</h5></div>
      今日《怪物猎人：世界》官方宣布开启《怪物猎人：世界 冰原》道具选举投票活动，而最终晋级四强的物品将以免费形式赠送与游戏中的玩家们。<br>
      <img src="../../../assets/images/mh_1.jpg" alt=""><br>
      据悉本次投票活动包含16组不同的道具供玩家们选择，其中不乏天龙票和金炼金票等道具。玩家将在投票中票选出最受欢迎道具，投票将从北京时间的3月19日早7点开始，决赛持续到4月6日的早7点。<br>
      <img src="../../../assets/images/mh_2.jpg" alt=""><br>
      不过略显麻烦的是，本次投票活动需要玩家们届时在《怪物猎人：世界》官方推特开启的投票选项进行，或是使用“#MHWIアイテム投票”的推特Tag积极参与。<br>
      <a href="https://twitter.com/MH_official_JP" >《怪物猎人：世界》官推（日文需翻墙）>></a><br>
      而关于本次票选的最终结果，官方会在4月中旬宣布，也会在此之后很快向《冰原》玩家发放进入四强的道具。<br>
    </div>

    <div class="InnerExam" align="center" style="float: top;position: fixed;left: 74%" >
      <div align="center" style="width: 100%;align-content: center;background: blanchedalmond;box-shadow: 0 0 10px black;border-radius: 10px">审核</div>
      <input style="color: blanchedalmond" id="Male" type="radio" value="pass" name="exam" checked="checked">允许发布<input id="Female" type="radio" value="fail" name="exam" >不允许发布<br>
      <textarea rows="15" style="border-radius: 20px;padding: 10px;outline: none;background: blanchedalmond" placeholder="如果不同意发布，则说明理由，不少于15字" ></textarea><br>
      <button class="button">提交</button>
    </div>



  </div>


</template>

<script>
    export default {
        name: "realArticle"
    }
</script>

<style scoped>
  .InnerArticle{
    padding: 15px;
    width: 70%;
    border-right: 2px black solid;
    float: left;
  }
  .InnerExam{
    margin: 15px;
    background: coral;
    width: 20%;
    padding: 15px;
    float: right;
    border-radius: 15px;
    box-shadow: 5px 5px 20px gray;
  }
  .button{
    width: 50px;
    height: 30px;
    outline: none;
    border: 1px black solid;
    background: coral;
    border-radius: 10px;
    color: blanchedalmond;
  }
  .button:hover{
    color: black;
    border: none;
    background: blanchedalmond;
    transition-duration: 200ms;
    box-shadow: 1px 1px 5px gray ;
  }
  .button:after{
    transition-duration: 200ms;
    background: coral;
    box-shadow: none;
  }
</style>
