<template>

  <div style="height: 940px;background-image: url('../../../static/bg_pattern.jpg');">

<!--步骤条-->
    <el-steps slot="reference" :active="4" align-center finish-status="success">
      <el-step title="等级1" description="100怪猎点数" @click.native="rightDetail(10)"></el-step>
      <el-step title="等级2" description="500怪猎点数" @click.native="rightDetail(20)"></el-step>
      <el-step title="等级3" description="200怪猎点数" @click.native="rightDetail(30)"></el-step>
      <el-step title="等级4" description="8000怪猎点数.当前等级" @click.native="rightDetail(40)"></el-step>
      <el-step title="等级5" description="20000怪猎点数,即将到达下一级,快用薪创造快乐" @click.native="rightDetail(50)"></el-step>
      <el-step title="等级6" description="50000怪猎点数" @click.native="rightDetail(60)"></el-step>
      <el-step title="等级7" description="100000怪猎点数" @click.native="rightDetail(70)"></el-step>
      <el-step title="等级8" description="300000怪猎点数" @click.native="rightDetail(80)"></el-step>
      <el-step title="等级9" description="999999怪猎点数" @click.native="rightDetail(90)"></el-step>
      <el-step title="等级9" description="999999怪猎点数" @click.native="rightDetail(100)"></el-step>
    </el-steps>

<!--    进度条-->
    <div>
    <el-progress type="dashboard" :percentage="percentage" :color="colors" :format="textFormat"></el-progress>
      <span style="font-family:LiSu;position: absolute;left: 20px;top: 260px;">充值等级福利</span>
      <el-progress type="circle" :percentage="40"></el-progress>
      <span style="font-family:LiSu;position: absolute;left: 150px;top: 260px;">当前充值进度</span>
    </div>
<!--    右侧图片(礼物)-->
    <div class="righttop">
      <img src="../../../static/gift2.png" style="width: 200px;height: 50px;">
      <img src="../../../static/礼包.png" style="width: 200px;height: 170px;">
    </div>
<!--底部-->
    <div style="height: 0">
<!--      右侧信息栏-->
      <div  style="position: relative;top: -200px;margin-left: 90px;width: 30%;float: right;">
        <fieldset style="border: 3px black solid;
            width: 300px;
            margin-left: auto;
            margin-right: auto;">
          <legend style="font-size: 30px;">
            账户明细
          </legend>
          <span>
            Azrookie<br>
          </span>
          <span>
            <img src="../../../static/svip8.png" style="width:190px; ">
        </span>
          <div class="out">
            <div class="in">
            </div>
            <div class="num">
              300001/999999
            </div>
          </div>
          <button style="font-size: 20px;font-family: 新宋体;">
            签到
          </button>
          <span style="font-size: 15px;">
            （当前奖励：80怪猎点数）
          </span>
        </fieldset>
        <fieldset style="border: 3px black solid;
            width: 300px;
            margin-left: auto;
            margin-right: auto;">
          <legend style="font-size: 30px;">
            等级明细
          </legend>
          <fieldset>
          <span>等级1：100怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级2：500怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级3：2000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级4：8000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级5：20000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级6：50000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级7：100000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级8：300000怪猎点数
<br>
              </span>
          </fieldset>
          <fieldset>
          <span>等级9：999999怪猎点数
<br>
              </span>
          </fieldset>
        </fieldset>
      </div>
<!--      表格-->
      <el-table
        :data="tableData"
        style="width: 70%;
        position: relative;
        top: -600px;
        ">
        <el-table-column
          label="福利等级"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span class="span1" style="margin-left: 10px;font-family: LiSu">{{ scope.row.level }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="275">
          <template slot-scope="scope">
            <span class="span1" style="font-family: LiSu">{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="玩家对福利评价" width="230">
          <el-rate v-model="value" show-text disabled>

          </el-rate>
        </el-table-column>
        <el-table-column label="详情" width="240">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="right">
              <p id="content">{{scope.row.content}}</p>
              <el-image :src="scope.row.imgSrc" style="height: 200px;width: 200px"></el-image>
                <div slot="reference" class="name-wrapper">
                  <el-button size="mini" type="info"><span style="font-size: 20px;font-family: LiSu">查看详情</span></el-button>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
  export default {
    name: "MyRights",
    data() {
      return {
        value: 5,
        tableData: [{
          level: '拉货',
          desc: '喂!三點幾了喂',
          content: '每日10怪猎点数以及爱撸猫皮肤',
          imgSrc: '../../../static/dj1.jpg'
        }, {
          level: '黑铁',
          desc: '做做做做撚啊做',
          content: '每日20怪猎点数原版官方海报',
          imgSrc: '../../../static/dj2.jpg'
        }, {
          level: '白铜',
          desc: '三點幾，飲茶先啊',
          content: '每日30怪猎点数喷火龙抱枕',
          imgSrc: '../../../static/dj3.jpg'
        }, {
          level: '黄铜',
          desc: '做咁多都冇用',
          content: '每日40怪猎点数官方心动盲盒*3',
          imgSrc: '../../../static/dj4.jpg'
        }, {
          level: '青铜',
          desc: '老細唔錫你啦喂',
          content: '每日50怪猎点数官方灭尽龙手办',
          imgSrc: '../../../static/dj5.jpg'
        }, {
          level: '婻酮',
          desc: '喂，飲啖茶先啦喂',
          content: '每日60怪猎点数虚拟龙族宝宝任选蛋（代替爱撸猫）',
          imgSrc: '../../../static/dj6.jpg'
        }, {
          level: '黄金',
          desc: '做碌鳩啊做',
          content: '每日70怪猎点数冰柱龙的缰绳（代替坐骑口哨）',
          imgSrc: '../../../static/dj7.jpg'
        }, {
          level: '黑金',
          desc: '做碌鳩啊做',
          content: '每日80怪猎点数溟赤龙的缰绳（代替坐骑口哨）',
          imgSrc: '../../../static/dj8.jpg'
        }, {
          level: '钻石',
          desc: '三點幾',
          content: '每日90怪猎点数黑龙的缰绳（代替坐骑口哨）',
          imgSrc: '../../../static/dj9.jpg'
        }, {
          level: '南桐之心',
          desc: '飲茶先啦。做咁多都冇用',
          content: '上海市普陀区金沙江路 1516 弄',
          imgSrc: '../../../static/dj1.jpg'
        }
        ],

        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 10},
          {color: '#7FFFD4', percentage: 20},
          {color: '#00FFFF', percentage: 30},
          {color: '#FF0000', percentage: 40},
          {color: '#FFA500', percentage: 50},
          {color: '#FFC0CB', percentage: 60},
          {color: '#FFFF00', percentage: 70},
          {color: '#5cb87a', percentage: 80},
          {color: '#1989fa', percentage: 90},
          {color: '#6f7ad3', percentage: 100}
        ],
        text: [
          "两只老虎爱跳湖",
          "哎",
          "小兔子乖乖拔萝卜",
          "我去海鸥真是肥",
          "我学脚丫子学走路",
          "✌",
          "小螺号啊弟弟在吹",
          "宝贝，猩猩为你指路",
          "月亮为你煮熟",
          "成长是快乐斗地主",
        ]
      }
    },
    methods: {
      rightDetail(percentage) {
        this.percentage = percentage;
      },
      textFormat(percentage) {
        if (percentage>=100){
          return this.text[9];
        }
        return this.text[percentage/10]
    }
    }
  }
</script>

<style scoped>

  legend{
    font-family: 新宋体;
  }
  fieldset {
    border: 1px black solid;
    width:90%;
    margin-left: auto;
    margin-right: auto;
  }
  .span1{
    font-family: 新宋体;
    color: black;
    font-size: 22px;
    transition: color 1s;
  }
  /*span:hover {*/
  /*    color: blue;*/
  /*    font-size: 28px;*/
  /*}*/
  #content {
    font-family: LiSu;
    font-size: 20px;
    color: black;
    text-align: center;
    width: 200px;
  }
  ul{
    font-size: 30px;
    color: black;
    transition: color 1s;
  }
  /*ul:hover {*/
  /*    color: blue;*/
  /*    font-size: 40px;*/
  /*}*/
  z{
    color: black;
    font-size: 13px;
    transition: color 1s;
  }
  z:hover{
    color: blue;
  }
  u{
    font-family: 新宋体;
    color: black;
    font-size: 45px;
    animation-name: username;
    animation-duration: 3s;
    animation-iteration-count:infinite;
  }
  @keyframes username {
    0%   {color: red;}
    25%  {color: yellow;}
    50%  {color: blue;}
    100% {color: green;}
  }
  .out{
    text-align:center;
    height:30px;
    width:200px;
    background-color: #fff;
    border:1px solid #000;
    position:relative;
  }
  .in{
    position:absolute;
    left:0px;
    top:0px;
    height:30px;
    width:65px;
    background-color: cornflowerblue;
  }
  .num{
    position:absolute;
    left:0px;
    top:0px;
    height:30px;
    line-height:30px;
    width:200px;
    text-align:center;
    position:relative;
  }
  .righttop{
    position: relative;
    top: -130px;
    height:200px;
    width:200px;
    margin-left: 85%;
    z-index: 2;
    opacity: 0.4;
    animation-name:gift;
    animation-duration: 0.2s;
    animation-iteration-count:infinite;
  }
  @keyframes gift {
    0%   {left:0px; top:-130px;}
    25%  {left:2px; top:-248px;}
    50%  {left:0px; top:-260px;}
    75%  {left:2px; top:-252px;}
    100% {left:0px; top:-110px;}
  }

  .el-step:hover{
    cursor: pointer;
  }
</style>
