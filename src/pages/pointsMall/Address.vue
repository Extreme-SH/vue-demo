<template>
  <div class="container clearfix">

    <div class="crumb-wrap">
      <div class="crumb-list"><a href="index.html">首页</a><span class="crumb-step">&gt;</span><span class="crumb-name">系统设置</span></div>
    </div>
    <div class="result-wrap">
      <form action="#" method="post" id="myform" name="myform">
        <div class="config-items">
          <div class="config-title">
            <h1>地址信息设置</h1>
          </div>
          <div class="result-content">
            <table width="100%" class="insert-tab">
              <tbody><tr>
                <th width="15%"><i class="require-red">*</i>省：</th>
                <td><input type="text"  value="" size="85" name="keywords" class="common-text"></td>
              </tr>
              <tr>
                <th><i class="require-red">*</i>市：</th>
                <td><input type="text"  value="" size="85" name="title" class="common-text"></td>
              </tr>
              <tr>
                <th><i class="require-red">*</i>区/县</th>
                <td><input type="text"  value="" size="85" name="keywords" class="common-text"></td>
              </tr>
              <tr>
                <th><i class="require-red">*</i>详细：</th>
                <td><input type="text" id="" value="" size="85" name="description" class="common-text"></td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <input type="submit" value="添加" class="btn btn-primary btn6 mr10">
                  <input type="button" value="返回" onClick="history.go(-1)" class="btn btn6">
                </td>
              </tr>
              </tbody></table>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style scoped>
  @import "../../assets/style/main.css";
  @import "../../assets/style/common.css";
</style>
