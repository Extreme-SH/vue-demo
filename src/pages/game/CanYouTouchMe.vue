<template>

  <div id="kila" class="login" style="width:100%;height:600px; border:2px solid;" @click="judge()">
  <div id="line" class="line"></div>

  <div class="side">
    <div class="detail">
      <p>1:0单击方块完成点击</p>
      <p>2:需要按出现顺序点击</p>
      <p>3:成功点击后，会增加分数</p>
      <p>4:方块到了最底端虚线会消失</p>
      <p>5:未点击到的方块会计失败分</p>
      <el-button round @click="start" class="btnstart" :disabled="!startFlag">开始</el-button>
      <el-button round @click="end" class="btnstart" :disabled="!endFlag">结束</el-button>
    </div>

    <div class="score">
      <p>分数:</p>
      <p id="good"></p>
      <p>失败:</p>
      <p id="bad"></p>
    </div>
  </div>

  </div>
</template>

<script>

  export default {
    name: "CanYouTouchMe",
    data() {
      return {
        bad: 0,
        good: 0,
        timer: null,
        endFlag: false,
        startFlag: true
      }
    },
    methods: {

      count(){//统计分数
        document.getElementById("good").innerHTML=this.good;
        document.getElementById("bad").innerHTML=this.bad;
      },

      create(){//生成方块
        let a=document.createElement("div");
        let random=Math.random()*800;
        a.className="fall";
        a.id="fall";
        //只能一个个赋值，直接用classname没有用
        a.style.left=random+"px";
        a.style.position="absolute";
        a.style.top="0px";
        a.style.width="100px";
        a.style.height="20px";
        a.style.border="2px solid";
        a.style.borderRadius="10px";
        // a.style.backgroundColor="rgba(46,39,61,0.8)"
        a.style.backgroundColor="grey"

        document.getElementById("kila").appendChild(a);

        document.getElementById("fall").onmouseover = function () {
          this.style.cursor="pointer";
          this.style.borderColor="rgba(53,128,201,0.16)";
          this.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        }

        let p=0;
        let vm=this;
        let time=setInterval(function(){//控制下落
          a.style.top=p+"px";
          p=p+0.5;
          if(p>600){
            clearInterval(time);
            if (a.parentNode==null){
              return;
            }
            a.parentNode.removeChild(a);
            vm.bad=vm.bad+1;
            // console.log("bad="+vm.bad);
            vm.count();
            if (document.getElementById("fall")==null){
              return;
            }
            document.getElementById("fall").addEventListener("click",function(event){
              console.log("event.target.parent="+event.target.parentNode);
              event.target.parentNode.removeChild(event.target);
              vm.good++;
            });

          }
        },7);
      },

      judge(){//处理点击事件
        let vm = this;
        if (document.getElementById("fall")==null){
          return;
        }
        document.getElementById("fall").addEventListener("click",function(event){
          if (event.target.parentNode==null){
            return;
          }
          event.target.parentNode.removeChild(event.target);
          vm.good++;
          vm.count();
        });
        return;
      },

      end(){//暂停游戏
        let vm = this;
        clearInterval(vm.timer);
        vm.timer=null;
        if(vm.good==0&&vm.bad==0){
          vm.alertx("?你在赣神魔，打都没打，你就当逃兵");
          vm.good=0;
          vm.bad=0;
        }
        else if(vm.bad>vm.good){
          vm.alertx("不会吧不会吧，你分就这么点啊，才"+vm.good+","
            +"你漏的都比点的多");
          vm.good=0;
          vm.bad=0;
          vm.count();
        }
        else if(vm.bad<=vm.good){
          vm.alertx("算你有本事，能打到"+vm.good+"分");
          vm.good=0;
          vm.bad=0;
          vm.count();
        }

        while(document.getElementById("fall")){//清除块
          document.getElementById("fall").parentNode.removeChild(document.getElementById("fall"));
        }
        this.endFlag=false;
        this.startFlag=true;
      },

      start(){//开始游戏
        this.timer=setInterval(this.create,600);
        this.endFlag=true;
        this.startFlag=false;
      },

      alertx(data) {
        let vm = this;
          let a=document.createElement("div");
          let p=document.createElement("p");
          let ptext=document.createTextNode(data);
          let btn=document.createElement("div");
          let btntext=document.createTextNode("确定");
          btn.appendChild(btntext);


          a.style.position="fixed";
          a.style.left="400px";
          a.style.margin="auto auto";
          a.style.borderRadius="10px";
          a.style.border="2px solid";
          a.style.width="600px";
          a.style.backgroundColor="rgba(53, 128, 201, 0.2)";
          a.style.fontSize="50px";
          a.style.color="white";
          a.style.textAlign="center";
          a.style.padding="10px";
          a.style.height="40%";

          btn.id="btn";

          btn.style.position="relative";
          btn.style.top="130px";
          btn.style.margin="0 auto";
          btn.style.padding="10px";
          btn.style.fontSize="30px";
          btn.style.color="white";
          btn.style.textAlign="center";
          btn.style.borderRadius="5px";
          btn.style.border="2px solid rgba(53, 128, 201, 0.2)";
          btn.style.width="200px";

          btn.onmouseover = function () {
            this.style.cursor="pointer";
          };

          p.appendChild(ptext);
          a.appendChild(p);
          a.appendChild(btn);
          document.getElementById("kila").appendChild(a);
          btn.onclick=function(){
            a.parentNode.removeChild(a);
          }
      }

    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped>
  /*按钮样式*/
  .btnstart {
    border: 0px;
    margin-top: 25px;
    opacity: 0.5;
    margin-left: 20px;

  }

  .detail{/*右边框样式*/
    width:100%;
    height:50%;
    border-left:2px solid;
    font-size:20px;
    font-style: oblique;
    color: grey;
  }

  .score{/*得分样式**/
    width:100%;
    height:50%;
    border:2px solid;
    border-bottom:0;
    color: grey;
    font-size: 20px;
  }

  .side{/*侧边框样式*/
    position:relative;
    top:-17px;
    width:25%;
    height:100%;
    float:right;
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
  }

  .line{/*底部消除线样式*/
    position: absolute;
    top:610px;
    width:78%;
    border:2px solid;
    border-top:0;
    left:8px;
    color: grey;
  }


  .login {/*背景样式*/
    width: 300px;
    background-color: rgba(53, 128, 201, 0.16);
    color: aliceblue;
    border-radius: 8px;
    padding: 50px;
  }
</style>
