<template>
    <div style="height: 100%;width: 100%;background-image: url('../../../../static/BGP1.jpeg')">

      <div class="pageTop" >
        <img  src="../../../assets/images/mhi-logo-lite.jpg" alt="" height="100%" width="100%" style="border: black solid;position: relative;bottom: 4px;filter: brightness(80%)">
      </div>
      <div class="pageMain">
        <div class="Left" >
          &nbsp使用相关
          <li><a>使用条例</a></li>
          <li><a>版权支持</a></li>
          <li><a>文字规范</a></li>
          <li><a>关于</a></li>
        </div>
        <div class="right">
          <div class="InnerLeft">
            <input type="text" class="text" placeholder="请输入标题">
            <textarea style="left: 1px;min-height: 400px" class="text" placeholder="请编辑内容"></textarea>
          </div>
          <div class="InnerRight">
            <div class="InnerExam" align="center" style="float: top;position: fixed;left: 75.5%" >
              <div class="label">
                类型<br><br>
                <input type="radio" name="类型" value="攻略">攻略
                <input type="radio" name="类型" value="资源">资源
                <input type="radio" name="类型" value="评论">评论
                <input type="radio" name="类型" value="资讯">资讯
              </div>
              <div class="label">
                添加标签<br><br>
                <textarea class="text" style="height: 100px" placeholder="输入标签，用“&”分隔" ></textarea>
              </div>
              <button class="submit">交付审核</button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "publish"
    }
</script>

<style scoped>
@import "../../../assets/style/default1.css";
</style>
