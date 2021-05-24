<template>
  <div class="container clearfix">
    <div class="crumb-wrap">
      <div class="crumb-list"><a href="index.html">首页</a><span class="crumb-step">&gt;</span><span class="crumb-name">文章管理</span></div>
    </div>
    <div class="result-wrap">
      <form name="myform" id="myform" method="post">
        <div class="result-content">
          <table class="result-tab" width="100%">
            <tr>
              <th class="tc" width="5%"><input class="allChoose" name="" type="checkbox"></th>
              <th>排序</th>
              <th>ID</th>
              <th>名称</th>
              <th>状态</th>


              <th>更新时间</th>
              <th>留言</th>
              <th>操作</th>
            </tr>
            <tr>
              <td class="tc"><input name="id[]" value="59" type="checkbox"></td>
              <td>
                <input name="ids[]" value="59" type="hidden">
                <input class="common-input sort-input" name="ord[]" value="0" type="text">
              </td>
              <td>59</td>
              <td title="发哥经典"><a target="_blank" href="#" title="发哥经典">劳斯莱斯</a> …
              </td>
              <td>未发货</td>


              <td>2021-04-15 21:11:01</td>
              <td>把油加满</td>
              <td>
                <a class="link-update" href="#">修改</a>
                <a class="link-del" href="#">删除</a>
              </td>
            </tr>
            <tr>
              <td class="tc"><input name="id[]" value="58" type="checkbox"></td>
              <td>
                <input name="ids[]" value="58" type="hidden">
                <input class="common-input sort-input" name="ord[]" value="0" type="text">
              </td>
              <td>58</td>
              <td title="黑色经典"><a target="_blank" href="#" title="黑色经典">iphone 11</a> …
              </td>
              <td>已签收</td>

              <td>2021-04-15 21:11:01</td>
              <td>尽快发货</td>
              <td>
                <a class="link-update" href="#">修改</a>
                <a class="link-del" href="#">删除</a>
              </td>
            </tr>
          </table>
          <div class="list-page"> 2 条 1/1 页</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>
  @import "../../assets/style/common.css";
  @import "../../assets/style/main.css";
</style>
