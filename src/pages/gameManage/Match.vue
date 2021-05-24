<template>

<div>

  <div class="up" v-if="myMatch">
    <!-- 标题 -->
    <div class="name" id="glName">
      <span>新的配装</span>
    </div>
    <div class="input" >
      <input type="text" placeholder="输出您的配装名" style="height:40px;font-size: 20px;border:1px black solid; outline:none;border-top: none;">
    </div>
    <!-- 配装 -->
    <div class="gl" id="glLink">
      <ul>
        <li>点击选择你的头甲</li>
        <li>点击选择你的挂饰</li>
        <li>点击选择你的胸甲</li>
        <li>点击选择你的臂甲</li>
        <li>点击选择你的腰甲</li>
        <li>点击选择你的腿甲</li>
        <li>点击选择你的靴子</li>
      </ul>
      <button @click="toMyMatch">保存</button>
      <button @click="changeGod">大神配装</button>
      <button @click="toNew">我的配装</button>
    </div>
  </div>


  <div class="up" v-if="bigGodMatch">
  <!-- 标题 -->
  <div class="name" id="glName11">
    <span>大神配装</span>
  </div>
  <div class="input">
    <input type="text" placeholder="搜索配装名/大神名" style="height:40px;font-size: 20px;border:1px black solid; outline:none;border-top: none;">
    <button>搜索</button>
  </div>
  <!-- 配装 -->
  <div class="gl">
    <ul>
      <li><a @click="toXzh">徐泽红红的配装</a></li>
      <li><a >挂架慧慧的配装</a></li>
      <li><a >yjj的配装</a></li>
      <li><a >余尙校的配装</a></li>
      <li><a >理查德的配装</a></li>
      <li><a >fhzheng的配装</a></li>
      <li><a >无敌lsp的配装</a></li>
      <li><a >mur猫的配装</a></li>
      <li><a @click="back1">返回</a></li>
    </ul>

  </div>
  </div>

  <div class="up" v-if="newMatch">
    <!-- 标题 -->
    <div class="name" id="glNam">
      <span>我的配装</span>
    </div>
    <div class="input">
      <input type="text" placeholder="搜索配装名" style="height:40px;font-size: 20px;border:1px black solid; outline:none;border-top: none;">
      <button>搜索</button>
    </div>
    <!-- 配装 -->
    <div class="gl">
      <ul>
        <li><a @click="tonew1">配装方案1</a></li>
        <li><a>配装方案2</a></li>
        <li><a>配装方案3</a></li>
        <li><a>配装方案4</a></li>
        <li><a>配装方案5</a></li>
        <li><a>配装方案6</a></li>
        <li><a>配装方案7</a></li>
        <li><a>配装方案8</a></li>
        <li><a @click="back2">返回</a></li>
      </ul>
    </div>
  </div>

  <div class="down" v-if="xzh">
    <!-- 标题 -->
    <div class="name" id="glName1">
      <span>徐泽红红的配装</span>
    </div>
    <!-- 配装 -->
    <div class="gl" id="glLink1">
      <ul>
        <li>头甲1</li>
        <li>挂饰1</li>
        <li>胸甲1</li>
        <li>臂甲1</li>
        <li>腰甲1</li>
        <li>腿甲1</li>
        <li>靴子1</li>
      </ul>
    </div>
  </div>

  <div class="down" v-if="new1">
    <!-- 标题 -->
    <div class="name">
      <span>配装方案1</span>
    </div>
    <!-- 配装 -->
    <div class="gl" >
      <ul>
        <li>头甲1</li>
        <li>挂饰1</li>
        <li>胸甲1</li>
        <li>臂甲1</li>
        <li>腰甲1</li>
        <li>腿甲1</li>
        <li>靴子1</li>
      </ul>
    </div>
  </div>

  <div class="down" v-if="store">
    <!-- 标题 -->
    <div class="name">
      <span>配装方案2</span>
    </div>
    <!-- 配装 -->
    <div class="gl">
      <ul>
        <li>头甲2</li>
        <li>挂饰2</li>
        <li>胸甲2</li>
        <li>臂甲2</li>
        <li>腰甲2</li>
        <li>腿甲2</li>
        <li>靴子2</li>
      </ul>
    </div>
  </div>

</div>

</template>

<script>
  export default {
    name: "Match",
    data() {
      return {
        newMatch: false,
        bigGodMatch: false,
        myMatch: true,
        store: false,
        xzh: false,
        gjh: false,
        yjj: false,
        ysx: false,
        new1: false
      }
    },
    methods: {
      toMyMatch() {
        this.store=true;
      },
      changeGod() {
        this.bigGodMatch=true;
        this.myMatch=false;
        this.store=false;
      },
      toXzh() {
        this.xzh=true;
      },
      toNew(){
        this.myMatch=false;
        this.newMatch=true;
      },
      tonew1(){
        this.new1=true;
      },
      back1(){
        this.bigGodMatch=false;
        this.xzh=false;
        this.myMatch=true;
      },
      back2(){
        this.newMatch=false;
        this.new1=false;
        this.myMatch=true;
      }
    }

  }
</script>

<style scoped>

  a:hover{
    cursor: pointer;
  }

  *{
    margin: 0;
    border: 0;
    padding: 0;
  }
  .up{
    margin-top: 2%;
    width: 100%;
    height: 360px;
    float: left;
  }
  .down{
    margin-top: 75px;
    float: left;
    width: 100%;
    height: 300px;
  }
  .name{
    float: left;
    height: 40px;
    width: 100%;
    font-size: 30px;
    text-align: center;
    border: 1px black solid;
    background-color: rgba(216, 204, 204, 0.24);
  }
  .gl{
    float: left;
    height: 320px;
    width: 100%;
    /* text-align: center; */
    border: 1px black solid;
    border-top:none;
    background-color: rgba(243, 232, 232, 0.267);
  }
  .input{
    background-color: rgba(243, 232, 232, 0.267);
  }
  li{
    height: 40px;
    font-size: 20px;
    /* background: green; */
  }
  ul{
    list-style-type: none;
  }
  li:hover{
    font-style: italic;
    font-size: 22px;

  }
  li:hover{
    background-color: rgba(236, 223, 223, 0.404);

  }
  button{
    width: 60px;
    height: 40px;
    background-color: rgba(196, 182, 182, 0.205);
  }
  button:hover{
    transition-duration: 1000ms;
    background-color: rgba(245, 236, 236, 0.842);
    box-shadow: 0 0 15px gray;
  }

</style>
