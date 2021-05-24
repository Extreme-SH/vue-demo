<template>
  <div style="height: 700px;width: 100%;background-size: 100% 100%;background-image: url('../../../static/main_bg.jpg')">
    <!-- 上 -->
    <div class="up">
    <!-- 上左 -->
    <div class="pictures" id="pictures1">
      <img :src="picIndex[0]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[0]">{{item[0].monsterName}}</el-link>
      </el-popover>
      <div class="introduce">{{item[0].introduces}}</div>
    </div>

    <!-- 上中 -->
    <div class="pictures" id="pictures2">
      <img :src="picIndex[1]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[1]">{{item[1].monsterName}}</el-link>
      </el-popover>
        <div class="introduce">{{item[1].introduces}}</div>
    </div>

    <!-- 上右 -->
    <div class="pictures" id="pictures3">
      <img :src="picIndex[2]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[2]">{{item[2].monsterName}}</el-link>
      </el-popover>
        <div class="introduce">{{item[2].introduces}}</div>
    </div>
  </div>

    <!-- 下 -->
    <div class="down">
    <!-- 下左 -->
    <div class="pictures" id="pictures4">
      <img :src="picIndex[3]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[3]">{{item[3].monsterName}}</el-link>
      </el-popover>
        <div class="introduce">{{item[3].introduces}}</div>
    </div>

    <!-- 下中 -->
    <div class="pictures" id="pictures5">
      <img :src="picIndex[4]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[4]">{{item[4].monsterName}}</el-link>
      </el-popover>
        <div class="introduce">{{item[4].introduces}}</div>
    </div>
    <!-- 下右 -->
    <div class="pictures" id="pictures6">
      <img :src="picIndex[5]" alt="图鉴">
      <el-popover
        placement="top-start"
        title="点击了解详情"
        width="120"
        trigger="hover"
        content="带你走进怪猎世界"
      >
      <el-link slot="reference" :underline="false" icon="el-icon-view" :href="hrefs[5]">{{item[5].monsterName}}</el-link>
      </el-popover>
        <div class="introduce">{{item[5].introduces}}</div>
    </div>
  </div>

    <!--分页-->
    <el-pagination style="float: right;margin-top:-6%; "
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="6"
                   layout="total, prev, pager, next"
                   :total="30"
                   :background="true"
    >
    </el-pagination>
  </div>
</template>

<script>

  import monsters from "../../monsters";

   export default {
      name: "pictures",
      data() {
        return {
          currentPage: 1,
          item:monsters[0],
          picIndex: ["/static/pictures1.png","/static/pictures2.png","/static/pictures3.png","/static/pictures4.png","/static/pictures5.png","/static/pictures6.png"],
          hrefs: ["https://mhworld.kiranico.com/monsters/KpViL/acidic-glavenus","https://mhworld.kiranico.com/monsters/ErdcV/alatreon","https://mhworld.kiranico.com/monsters/N3vuk/ancient-leshen","https://mhworld.kiranico.com/monsters/ZqptN/anjanath","https://mhworld.kiranico.com/monsters/BaYte/azure-rathalos","https://mhworld.kiranico.com/monsters/6dJI8/banbaro"]
        }
      },

      methods: {
        handleCurrentChange(val) {
          this.currentPage = val;
          let i=0;
          this.item = monsters[--val];
          this.item.forEach(m=>{
            this.picIndex[i++]=m.pics;
          })
        }
      },

    }
</script>

<style scoped>
  body,html{
    border: 0;
    padding: 0;
  }
  .up{
    width: 99%;
    height: 300px;
    float: left;
    margin:2% 2% 5%;
    background-color: rgba(235, 227, 227, 0.192);
  }
  .down{
    width: 99%;
    height: 300px;
    float: left;
    margin:2% 2% 5%;
    background-color: rgba(235, 227, 227, 0.192);
  }
  .pictures{
    width: 30%;
    float: left;
    margin-left: 1%;
    margin-right: 1%;
  }
  img{
    width: 50%;
    max-height: 50%;
  }
  .name{
    height: 50%;
    width: 40%;
    float: left;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-top: 24%;
  }
  .introduce{
    float: left;
    font-style: italic;
    background-color: rgba(231, 220, 220, 0.144);
  }
  .el-link {
    height: 50%;
    width: 40%;
    float: left;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-top: 24%;
    color: black;
  }

</style>
