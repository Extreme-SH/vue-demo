<template>
<el-container>
  <el-aside>
    <el-menu :collapse="isCollapsed" :router="router" class="el-menu-vertical-demo" :unique-opened="uniqueOpened">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">头像管理</template>
          <el-link href="https://azrookie.gitee.io/" :underline="false"><el-avatar :src="pig" size="large" style="margin-left: 40px"></el-avatar></el-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">个人信息管理</template>
          <el-menu-item :disabled="true">我的信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="权限">
          <el-menu-item :disabled="true">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">资讯管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">管理</template>
          <el-menu-item index="/advisory/patch">补丁</el-menu-item>
          <el-menu-item index="/advisory/article">文章</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">服务</template>
          <el-menu-item index="/advisory/news">新闻</el-menu-item>
          <el-menu-item index="/advisory/customerService">客服</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>
          <span slot="title">游戏管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">游戏功能</template>
          <el-menu-item index="/gameManage/match">配装器</el-menu-item>
          <el-menu-item index="/gameManage/pictures">图鉴</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">其他功能</template>
          <el-menu-item index="/gameManage/community">社区</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-coin"></i>
          <span slot="title">充值管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">充值</template>
          <el-menu-item index="/recharge/entrance">充值入口</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">管理</template>
          <el-menu-item index="/recharge/orderQuery">订单查询</el-menu-item>
          <el-menu-item index="/recharge/myData">我的数据</el-menu-item>
          <el-menu-item index="/recharge/myRights">我的权益</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-present"></i>
          <span>积分商城</span>
        </template>
        <el-menu-item-group>
          <template slot="title">管理</template>
          <el-menu-item index="/pointsMall/order">订单管理</el-menu-item>
          <el-menu-item index="/pointsMall/address">地址管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">奖品</template>
          <el-menu-item :disabled="true">积分抽奖</el-menu-item>
          <el-menu-item :disabled="true">促销打折</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">物流</template>
          <el-menu-item :disabled="true">自动发货</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title"><i class="el-icon-basketball"></i>
          <span>小游戏</span>
        </template>
        <el-menu-item-group>
          <template slot="title">游戏1</template>
          <el-menu-item index="/game/rock-paper-scissors">三手群英传7</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">游戏2</template>
          <el-menu-item index="/game/canYouTouchMe">来点我啊!</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">游戏3</template>
          <el-menu-item index="/game/puzzle">你会数数吗?</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">游戏4</template>
          <el-menu-item index="/game/bomb">拆弹蛋砖家</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right;">

      <el-dropdown style="font-size: 30px" @command="handleCommand">
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><el-link :underline="false" href="/login">退出登录</el-link></el-dropdown-item>
          <el-dropdown-item :disabled="isCollapsed">隐藏导航栏</el-dropdown-item>
          <el-dropdown-item :disabled="!isCollapsed">打开导航栏</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>
      <el-main style="height: 900px">
        <el-scrollbar style="height: 100%">
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: false,
        pig: require("../assets/images/pig.jpg"),
        router: true,
        uniqueOpened: true,
      }
    },
    methods: {
      handleCommand() {
        this.isCollapsed = !this.isCollapsed;
      }
    }
  };
</script>


<style>


  .el-header {
    background-color: rgba(53, 128, 201, 0.16);
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    width: 20%;
    /*background-color: rgb(238, 241, 246)*/
    background-color: rgba(53, 128, 201, 0.16)
  }

  .el-container {
    height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 299px;
    min-height: 400px;
  }

  .el-scrollbar__wrap{
    overflow-x: hidden;
  }

  .is-horizontal {
    display: none;
  }

</style>


