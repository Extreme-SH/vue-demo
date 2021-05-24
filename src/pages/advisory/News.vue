<template>

  <div>

    <div class="head">
    </div>

    <div class="left">
        <br>
      <span style="margin-left:20px;font-size: 33px;line-height: 29px;letter-spacing: 4px;">
        <strong>怪物猎人</strong>
      </span>
        <br>
      <span style="margin-left:20px;font-size: 33px;line-height: 29px;letter-spacing: 4px;">
        <strong>新闻中心</strong>
      </span>
        <br>
        <br>
      <ul style="color: gainsboro;font-size: 12px;margin-bottom: 5px;margin-left: 20px;">
        您的新闻和活动
      </ul>

      <a @click="changeShow1" style="text-decoration: none">
        <fieldset style="margin-left: 20px;height: 60px;">
          <span style="font-size: 14px;letter-spacing: 2px;">
               <strong>您的新闻</strong>
          </span>
          <br>
          <span style="font-size: 12px;color: gainsboro">个性化</span>
        </fieldset>
      </a>

      <a @click="changeShow2" style="text-decoration: none">
        <fieldset style="margin-left: 20px;height: 60px;">
        <span style="font-size: 14px;letter-spacing: 2px;">
             <strong>您即将开始的活动</strong>
        </span>
          <br>
        <span style="font-size: 12px;color: gainsboro">个性化</span>
        </fieldset>
      </a>

      <ul style="color: gainsboro;font-size: 12px;margin-bottom: 5px;margin-left: 20px;margin-top: 18px;">全球新闻和活动</ul>

      <a style="text-decoration: none">
        <fieldset style="margin-left: 20px;height: 60px;">
        <span style="font-size: 14px;letter-spacing: 2px;">
             <strong>
                 精选
             </strong>
        </span>
          <br>
          <span style="font-size: 12px;color: gainsboro">
            热门来源
        </span>
        </fieldset>
      </a>
      <a style="text-decoration: none">
        <fieldset style="margin-left: 20px;height: 60px;">
        <span style="font-size: 14px;letter-spacing: 2px;">
             <strong>怪物猎人官方</strong>
        </span>
          <br>
          <span style="font-size: 12px;color: gainsboro">
            怪物猎人博客和新闻
        </span>
        </fieldset>
      </a>
      <ul style="color: gainsboro;font-size: 12px;margin-bottom: 5px;margin-left: 20px;margin-top: 18px;">搜索</ul>
      <input style="border-color: rgba(0,0,0,0);margin-left: 20px;
        outline: none;
        height: 36px;
        background-color: rgba(255,255,255,0.1);
        margin-top: 2px;
        width: 87%;
        color: white;">
      <ul style="color: gainsboro;font-size: 12px;margin-bottom: 5px;margin-left: 20px;margin-top: 18px;">
        发掘
      </ul>
      <a style="text-decoration: none">
        <fieldset style="margin-left: 20px;height: 40px;">
        <span style="margin-top:auto;margin-bottom: auto;font-size: 14px;letter-spacing: 2px;">
             <strong>
                 新闻鉴赏家
             </strong>
        </span>
        </fieldset>
      </a>
      <button onclick="show()" style="
        margin-left: 20px;
        height: 36px;
        background-color: rgba(255,255,255,0);
        margin-top: 20px;
        width: 90%;">
        <img src="../../../static/setting.png" style="height: 20px;width:20px;margin-top: 4px;">
        <span style="outline: none;top:-4px;font-size: 14px;letter-spacing: 2px;position: relative;">
                选项与筛选条件
        </span>
      </button>
    </div>

    <div class="setting">
      <button onclick="hide()" style="
        margin-left: 87%;
        height: 36px;
        background-color: rgba(255,255,255,0);
        border-color: rgba(0,0,0,0);
        transition: opacity 0.3s;">
        <img src="../../../static/close.png" style="width: 24px;height: 24px;">
      </button>
      <span style="margin-left:20px;font-size: 16px;
          line-height: 29px;
          letter-spacing: 4px;">
        <strong>筛选条件</strong>
      </span>
      <br>
      <span style="margin-left:20px;margin-top:auto;margin-bottom: auto;font-size: 12px;color: gainsboro">
            管理您在自己新闻中心中看到的新闻种类和来源
        </span>
      <br>
      <br>
      <span style="margin-left:20px;margin-top:auto;margin-bottom: auto;font-size: 12px;color: gainsboro">
            显示这些类型的帖子
        </span>
      <br>
      <div class="check1">
        <input type="checkbox" style="margin-top: 6px;margin-left: 6px;">
        <br>
        <input type="checkbox">
        <span>
            直播
        </span>
        <br>
        <input type="checkbox">
        <span>
            内容更新
        </span>
        <br>
        <input type="checkbox">
        <span>
            发行
        </span>
        <br>
        <input type="checkbox">
        <span>
            特卖
        </span>
        <br>
        <input type="checkbox">
        <span>
            新闻
        </span>
        <br>
      </div>




    </div>

    <div class="right" v-if="isShow1">
      <div class="fengxi">

      </div>
      <div class="cotent" style="background-color: black;background-color: rgba(0,0,0,0.82);">
        <div class="title">
          <div class="titlecontent">
            <br>
            <span style="font-size: 20px;">
                    2020年12月
                </span>
          </div>
        </div>
        <br>
        <div class="cotentcontent">
          <div class="cotentcotentcontent">
            <div class="issue">
                    <span style="font-size: 23px">
                        <strong>
                            “Ver.15.10.00”发布通知
                        </strong>
                    </span>
              <br>
              <span style="font-size: 5px;color: dodgerblue;margin-left: 13px;">
                        定期更新
              </span>
              <span style="font-size: 2px;color: gainsboro;margin-left: 3px;">
                        2020年12月4日
                    </span>
              <br>
              <div style="margin-top: 8px;">
                        <span style="font-size: 15px;color: white;margin-left: 13px;">
                            发布“Ver.15.10.00”！限时发布“怪物猎人”电影特别合作活动任务！
                        </span>
              </div>
              <br>
              <div style="margin-top: -12px;">
                        <span style="font-size: 14px;color: white;margin-left: 13px;">
                            已于12月4日(五)UTC 0:00发布包含“怪物猎人”电影特别合作活动任务的“Ver.15.10.00”。记
                        </span>
                <br>
                <span style="font-size: 14px;color: white;margin-left: 13px;">
                            得观看新电影“怪物猎人”咯！
                        </span>
              </div>
            </div>
            <div class="pic">
              <img src="../../../static/pic1.jpg" style="width: 34%;height: 80%;margin-left: 65%;margin-top: -12%;margin-bottom: 1%">
            </div>
          </div>
          <div class="butt">
            <button id="praise" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/praise.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi" value="447">
              </div>
            </button>
            <button id="comment" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/comment.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi2" value="361">
              </div>
            </button>
            <button id="collect" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/collect.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi3" value="116">
              </div>
            </button>
          </div>

        </div>
      </div>
      <div class="cotent" style="height: 600px;background-color: black;background-color: rgba(0,0,0,0.76);">
        <div class="title">
          <div class="titlecontent">
            <br>
            <span style="font-size: 20px;">
                    2020年10月
                </span>
          </div>
        </div>
        <br>
        <div class="cotentcontent">
          <div class="cotentcotentcontent">
            <div class="issue">
                    <span style="font-size: 23px;margin-left: 13px;">
                        <strong>
                            传说中的古龙“黑龙”降临《Monster Hunter World:
                        </strong>
                    </span>
              <br>
              <span style="font-size: 23px;margin-left: 13px;">
                         <strong>
                             Iceborne》！
                         </strong>
                    </span>
              <br>
              <span style="font-size: 5px;color: dodgerblue;margin-left: 13px;">
                        定期更新
                    </span>
              <span style="font-size: 2px;color: gainsboro;margin-left: 3px;">
                        2020年10月1日
                    </span>
              <br>
              <div style="margin-top: 8px;">
                        <span style="font-size: 14px;color: white;margin-left: 13px;">
                            拿起武器准备好在这场历史性的战斗中挑战黑龙吧！在Iceborne最后的免费大型更新中，你能
                        </span>
                <br>
                <span style="font-size: 14px;color: white;margin-left: 13px;">
                            够邂逅新的角色，打造新的回忆。而“历战王冰呪龙“则预定于活动任务中登场。充满惊悚氛
                        </span>
                <br>
                <span style="font-size: 14px;color: white;margin-left: 13px;">
                            围的新季节祭典“月辰祭【惊魂夜】”也将会举办。
                        </span>
              </div>
            </div>
            <div class="pic">
              <img src="../../../static/pic2.png" style="width: 34%;height: 80%;margin-left: 65%;margin-top: -14%;margin-bottom: 1%">
            </div>
          </div>
          <div class="butt">
            <button id="praise2" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/praise.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi4" value="894">
              </div>
            </button>
            <button id="comment2" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/comment.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi5" value="191">
              </div>
            </button>
            <button id="collect2" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/collect.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi6" value="216">
              </div>
            </button>
          </div>
        </div>

        <div class="fengxi2">
        </div>
      </div>


  </div>


    <div class="right" v-if="isShow2">
      <div class="fengxi">

      </div>
      <div class="cotent" style="background-color: black;background-color: rgba(0,0,0,0.82);">
        <div class="title">
          <div class="titlecontent">
            <br>
            <span style="font-size: 20px;">
                    下周
                </span>
          </div>
        </div>
        <br>
        <div class="cotentcontent">
          <div class="cotentcotentcontent">
            <div class="issue">
                    <span style="font-size: 23px;margin-left: 13px;">
                        <strong>
                            永夜赛季
                        </strong>
                    </span>
              <br>
              <span style="font-size: 5px;color: dodgerblue;margin-left: 13px;">
                        游戏内活动
                    </span>
              <span style="font-size: 2px;color: gainsboro;margin-left: 3px;">
                        星期三 01；00
                    </span>
              <br>
              <div style="margin-top: 8px;">
                        <span style="font-size: 15px;color: white;margin-left: 13px;">
                            一头特殊种夜煞使前线据点陷入了永夜，让在猎团们庇护下得来不易的安全领域陷入危机。
                        </span>
                <br>
                <span style="font-size: 15px;color: white;margin-left: 13px;">
                            在这里，沐浴着神圣的月光，大团长揭露了掌握破解这场危机关键所在的盟友的身份。
                        </span>
                <br>
                <span style="font-size: 15px;color: white;margin-left: 13px;">
                            米瑟拉斯，兽缠氏族领袖，领导着一小部分渴望和旅行者靠得更近的兽缠族。
                                </span>
                <br>
                <span style="font-size: 15px;color: white;margin-left: 13px;">
                            作为神圣熔岩军团的一员，他拥有破解围困圣城的Vex技术所必须的知识。
                                    </span>
                <br>
                <span style="font-size: 15px;color: white;margin-left: 13px;">
                            在这里，光之羁绊若隐若现……但这种关系是否足矣？
                                        </span>

              </div>

            </div>
            <div class="pic">
              <img src="../../../static/pic3.jpg" style="width: 34%;height: 80%;margin-left: 65%;margin-top: -15%;margin-bottom: 1%">
            </div>
          </div>
          <div class="butt">
            <button id="praise1" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/praise.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi" value="567">
              </div>
            </button>
            <button id="comment1" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/comment.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi2" value="113">
              </div>
            </button>
            <button id="collect1" style="background-color: rgba(255,255,255,0);">
              <img src="../../../static/collect.png" style="height: 14px;width: 14px;margin-top: 2px;">
              <div style="margin: auto;float: right">
                <input style="background-color:rgba(0,0,0,0);border-color: rgba(0,0,0,0);font-size: 10px;color: white;" type="button" id="xianshi3" value="231">
              </div>
            </button>
          </div>

        </div>
      </div>
      <div class="cotent" style="background-color: black;background-color: rgba(0,0,0,0.76); height:50%">
        <div class="wuhu">
          <br>
          <span style="font-size: 20px">
                未找到更多即将推出的活动
            </span>
          <br>
          <br>
          <br>
          <div class="wunai">
            <span style="font-size: 17px;">
                查看更早发布的活动
                <input type="button" value="290+" style="background-color:rgba(255,255,255,0.46);
                color: white;
                font-size: 17px;
                border-color: rgba(0,0,0,0);
                border-radius: 8px;">
            </span>
          </div>
        </div>


      </div>

      <!-- <div class="fengxi2">
      </div> -->
    </div>




  </div>

</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        isShow1: true,
        isShow2: false
      }
    },
    methods: {
      changeShow1() {
        this.isShow2=false;
        this.isShow1=true;
      },
      changeShow2() {
        this.isShow2=true;
        this.isShow1=false;
      }
    }

  }
</script>

<style scoped>
  .wuhu {
    text-align: center;
  }

  .head{
    margin: auto;
    width: 100%;
    background-color: black;
    background-color: rgba(0,0,0,0.91);
    height: 80px;
    position: fixed;
  }
  .left{
    position: fixed;
    top: 85px;
    float: left;
    width: 19%;
    background-color: black;
    background-color: rgba(0,0,0,0.82);
    height: 100%;
    background-image: url("../../../static/back.png");
    background-attachment:scroll;
    background-size:300px 300px;
    background-repeat: no-repeat;
    display: block;
  }
  span{
    color: white;
  }
  ul{
    color: white;
  }
  fieldset{
    background-color: rgba(255,255,255,0.1);
    transition: background-color 0.3s;
    border-color: rgba(0,0,0,0);
    margin-top: 2px;
    width: 80%;
  }
  fieldset:hover{
    background-image: linear-gradient(to right,rgb(47,79,79),white);
    opacity: 0.7;
  }
  .right{
    position: fixed;
    margin-left: 18.9%;
    top: 155px;
    float: left;
    width: 81%;
    height: 100%;
  }
  .fengxi{
    top: 85px;
    float: left;
    width: 2px;
    height: 100%;
    background-color: black;
    background-color: rgba(0,0,0,0.99);
  }
  .cotent{
    float: left;
    width: 78%;
  }
  .fengxi2{
    top: 85px;
    float: left;
    width: 1px;
    height: 100%;
    background-color: black;
    background-color: rgba(0,0,0,0.99);
  }
  .title{
  }
  .titlecontent{
    width: 80%;
    margin-left: 10%;
  }
  .cotentcontent{
  }
  .cotentcotentcontent{
    width: 80%;
    margin-left: 10%;
    background-color: rgba(169,169,169,0.15);
    transition: background-color 0.3s;
  }
  .cotentcotentcontent:hover{
    background-color: rgba(255,255,255,0.25);
  }
  .butt {
    column-count: 3;
    float: right;
    margin-right: -19%;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .setting{
    display:none;
    position: fixed;
    top: 85px;
    float: left;
    width: 19%;
    background-color: black;
    background-color: rgba(0,0,0,0.82);
    height: 100%;
  }
  button{
    transition: opacity 0.3s;
    opacity: 0.6;
  }
  button:hover{
    opacity: 100%;
  }
  .check1{
    background-color: rgba(255,255,255,0.15);
    border-color: rgba(0,0,0,0);
    margin-top: 2px;
    width: 86%;
    margin-left: 20px;
    letter-spacing: 2px;font-size: 10px;line-height: 10px;
  }
</style>
