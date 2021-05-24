<template>
  <div id="parent">
    <div class="image">
        <img src="../assets/images/mhwi-velkhana_artwork_001.jpg">
    </div>

      <div  v-if="login==1" class="login" >
        <div class="header">登录</div>

        <form name=firm1 action="/layout">
        <div class="input">
            <div class="input-border">
                <input type="text" class="border" name="username" placeholder="用户名" v-model="name">
            </div>
            <div class="input-border">
                <input type="password" class="border" name="password" placeholder="密码" v-model="pwd">
            </div>
        </div>
        <div class="action">
          <div class="btn-login" @click="check">登录</div>
        </div>
        </form>

        <form action="signup.html" name=firm2>
        <div class="action" >
              <div class="btn-login" @click="toRegister">注册</div>
        </div>
        </form>

        <form action="FindPassword.html" name=firm4>
          <div class="action">
              <div class="btn-login" @click="toFindPwd">找回密码</div>
          </div>
        </form>

        <form action="changePassword.html" name=firm5>
        <div class="action">
              <div class="btn-login" @click="toChangePwd">修改密码</div>
        </div>
        </form>

    </div>
      <div v-else-if="login==2" class="login">
      <div class="header">
        SIGNUP
      </div>
      <form method="post" name=firm3 action="">
        <div class="input">
          <div class="input-border">
            <input type="text" class="border" name="username" placeholder="用户名" v-model="nameSign">
          </div>
          <div class="input-border">
            <input type="password" class="border" name="password" placeholder="密码" v-model="pwdSign">
          </div>
          <div class="input-border">
            <input type="password" class="border" name="passwordfind" placeholder="找回密钥" v-model="pwd1">
          </div>

        </div>
        <div class="action">

          <div class="btn-login" @click="check">确认注册</div>

        </div>
      </form>
      <form action="login.html" name=firm4>
        <div class="action">

          <div class="btn-login" @click="toLogin">返回</div>

        </div>
      </form>
    </div>
      <div v-else-if="login==3" class="login" >
      <div class="header">
        成功
      </div>
      <div class="action">

        <div class="btn-login" @click="toLogin">返回</div>

      </div>
      <div class="action">

        <div class="btn-login" @click="toChangePwd">修改密码</div>

      </div>

    </div>

      <div v-else-if="login==4" class="login" >
        <div class="header">
          找回密码
        </div>
        <form  name=firm1 action="changePassword.html">
          <div class="input">
            <div class="input-border">
              <input type="text" class="border" name="username" placeholder="用户名" v-model="nameFindPwd">
            </div>
            <div class="input-border">
              <input type="password" class="border" name="passwordfind" placeholder="找回密钥" v-model="pwdFindPwd">
            </div>
          </div>
          <div class="action">

            <div class="btn-login" @click="check">确认</div>

          </div></form>

        <form name=firm2 action="login.html">
          <div class="action">

            <div class="btn-login" @click="toLogin">返回</div>

          </div>
        </form>

    </div>

      <div v-else-if="login==5" class="login">
      <div class="header">
        修改密码
      </div>
      <form action="FindPasswordPass.html" name=firm1>
        <div class="input">
          <div class="input-border">
            <input type="text" class="border" name="username" placeholder="用户名" v-model="nameChange">
          </div>
          <div class="input-border">
            <input type="password" class="border" name="password" placeholder="密码" v-model="pwdChange">
          </div>
          <div class="input-border">
            <input type="password" class="border" name="newpassword" placeholder="新密码" v-model="newPwd">
          </div>
        </div>
        <div class="action">
          <div class="btn-login" @click="check">确认</div>
        </div>

      </form>
      <form action="login.html" name=firm2>
        <div class="action">
          <div class="btn-login" @click="toLogin" >返回</div>
        </div>
      </form>


    </div>

  </div>
</template>

<script>
    export default {
        name: "Login",
        data (){
          return{
            login:1,
            pwd: "",
            name: "",
            newPwd: "",
            pwd1: "",
            nameSign: "",
            pwdSign: "",
            nameFindPwd: "",
            pwdFindPwd: "",
            nameChange: "",
            pwdChange: ""
          }
        },
        methods: {
          check() {
            //重写alert
            alert=function (data) {
              var a = document.createElement("div");
              var p = document.createElement("p");
              var ptext = document.createTextNode(data);
              var btn = document.createElement("div");
              var btntext = document.createTextNode("确定");
              btn.appendChild(btntext);
              btn.id = "btn";
              p.appendChild(ptext);
              a.appendChild(p);
              a.appendChild(btn);
              document.getElementsByTagName("body")[0].appendChild(a);
              btn.onclick = function () {
                a.parentNode.removeChild(a);

              }

              //可以用自己写的原生js实现的css函数进行设置 todo
              //赋予alertcss样式
              var cssObja = {
                'border-radius': '10px',
                'border-size': '2px solid',
                "position": "fixed",
                "left": "0",
                "right": "0",
                "top": "0",
                "width": "300px",
                "margin": "0 auto",
                "background-color": "rgba(41, 25, 62, 0.7)",
                "font-size": "25px",
                "color": "white",
                "text-align": "center",
                'padding': '10px',
                "height": "12%"

              };

              var cssObjb = {
                "position": "relative",
                "top": "10px",
                "margin": "0 auto",
                'padding': "10px",
                'font-size': '5px',
                'color': 'blue',
                'text-align': 'center',
                'border-radius': '5px',
                'border': '2px solid #0f68ae',
                'width': '30px'
              };

              var targetObj = a;
              var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
              for(var i in cssObja) {
                str += i + ":" + cssObja[i] + ";";
              }
              targetObj.style.cssText = str;

              targetObj = btn;

              var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
              for(var i in cssObjb) {
                str += i + ":" + cssObjb[i] + ";";
              }
              targetObj.style.cssText = str;

            }

            /*校验两次输入的是否相同*/


            //校验字段是否填充
            if(this.login==2){
              if(this.nameSign==""){
                alert("请输入用户名");
              }else if(this.pwdSign==""){
                alert("请输入密码");
              }else if(this.pwd1==""){
                alert("请输入找回密钥");
              }
            }else if(this.login==4){
              if(this.nameFindPwd==""){
                alert("请输入用户名");
              }else if(this.pwdFindPwd==""){
                alert("请输入找回密钥");
              }else{
                this.login=3;
              }
            }else if(this.login==5){
              if(this.nameChange==""){
                alert("请输入用户名");
              }else if(this.pwdChange==""){
                alert("请输入密码");
              }else if(this.newPwd==""){
                alert("请输入新密码");
              }
            }

            let flag = false;

            if(this.login==1){
              if(this.name==""){
                alert("请输入用户名");
              }else if(this.pwd==""){
                alert("请输入密码");
              }else{
                window.location.href="/layout";
              }
            }



        },
          toLogin() {
            this.login=1;
          },
          toRegister() {
            this.login=2;
          },
          toFindPwd() {
            this.login=4;
          },
          toChangePwd() {
            this.login=5;
          },
          toFindPwdPass() {
            this.login=3;
          }
        }
      }
</script>

<style scoped>

  @import "../assets/style/login.css";

</style>
