import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import("../pages" + file)
  }
}

export default new Router({
  mode: "history",//去掉#
  routes: [
    route("/layout",'/Layout',"Layout"),
    route("/login",'/Login',"Login"),
    {
      path:"/",
      component: () => import('../pages/Layout'),
      redirect:"/login",
      children:[
        // route("/login/signup","/login/SignUp","signup"),
        route("/pointsMall/order",'/pointsMall/Order',"Order"),
        route("/pointsMall/address",'/pointsMall/Address',"Address"),
        route("/game/rock-paper-scissors",'/game/rock-paper-scissors',"rock-paper-scissors"),
        route("/game/canYouTouchMe",'/game/CanYouTouchMe',"CanYouTouchMe"),
        route("/game/puzzle",'/game/Puzzle',"Puzzle"),
        route("/game/bomb",'/game/Bomb',"Bomb"),
        route("/gameManage/pictures",'/gameManage/pictures',"pictures"),
        route("/gameManage/match",'/gameManage/Match',"Match"),
        route("/gameManage/community",'/gameManage/Community',"Community"),
        route("/recharge/entrance",'/recharge/Entrance',"Entrance"),
        route("/recharge/myData",'/recharge/MyData',"MyData"),
        route("/recharge/myRights",'/recharge/MyRights',"MyRights"),
        route("/recharge/orderQuery",'/recharge/OrderQuery',"OrderQuery"),
        route("/advisory/article",'/advisory/Article',"Article"),
        route("/advisory/customerService",'/advisory/CustomerService',"CustomerService"),
        route("/advisory/news",'/advisory/News',"News"),
        route("/advisory/patch",'/advisory/Patch',"Patch"),
        route("/advisory/patch/mods","/advisory/patchChildren/Mods","Mods"),
        route("/advisory/patch/piu","/advisory/patchChildren/Piu","Piu"),
        route("/advisory/patch/patchc","/advisory/patchChildren/Patchc","Patchc"),
        route("/advisory/article/realArticle","/advisory/articleChildren/RealArticle","RealArticle"),
        route("/trade/promotion",'/trade/Promotion',"Promotion"),
        route("/trade/promotion",'/trade/Promotion',"Promotion")
      ]
    }
  ]
})
