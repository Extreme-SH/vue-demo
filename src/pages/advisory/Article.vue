<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane name="first"><el-button slot="label" icon="el-icon-s-goods" :plain="true">文章发布</el-button><publish></publish></el-tab-pane>
    <el-tab-pane name="second"><el-button slot="label" icon="el-icon-s-goods" :plain="true">已发布文章</el-button><Published></Published></el-tab-pane>
    <el-tab-pane name="third"><el-button :plain="true" slot="label" icon="el-icon-present">未审核文章</el-button><unreviewed></unreviewed></el-tab-pane>
    <el-tab-pane name="fourth"><el-button :plain="true" slot="label" icon="el-icon-money">未通过文章</el-button><PassFail></PassFail></el-tab-pane>
    <el-tab-pane name="fifth"><el-button :plain="true" slot="label" icon="el-icon-money">友情链接</el-button><Link></Link></el-tab-pane>
  </el-tabs>
</template>
<script>

  import Publish from "./articleChildren/Publish"
  import Published from  "./articleChildren/Published"
  import PassFail from "./articleChildren/PassFail"
  import Unreviewed from "./articleChildren/Unreviewed"
  import Link from "./articleChildren/Link"

  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    },
    components: {
      Publish,
      Published,
      PassFail,
      Unreviewed,
      Link
    }
  };
</script>

<style scoped>

  .el-tabs {
    padding-top: 3px;
  }


</style>
