<template>

  <div>

    <!-- 上，攻略分享 -->
    <div class="up">
      <!-- 标题 -->
      <div class="name" id="glName">
        <span>攻略分享</span>
      </div>
      <!-- 攻略 -->
      <div class="gl" id="glLink">
        <ul>
          <li><a href="https://nga.178.com/read.php?tid=26098713" target="_blank">百龙夜行思路抛砖引玉</a>
            <div class="time">2021-03-29 09:39</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26555800" target="_blank">不同炼金档位的出率讨论</a>
            <div class="time">2021-04-30 17:49</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26598068" target="_blank">[抛砖引玉] 斗技大会06 轻弩单人控制流5-6分钟S评价打法</a>
            <div class="time">2021-05-03 13:20</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26333593" target="_blank">[RISE] 分享一些太刀使用中的细碎经验</a>
            <div class="time">2021-04-15 00:57</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26238961" target="_blank">[MHRise] 弓箭配装与技能选择(V2.0.0 | 04/29初步更新完成) </a>
            <div class="time">2021-04-08 03:43</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26676578" target="_blank">[弓箭]个人摸索出来的切瓶子方法 </a>
            <div class="time">2021-04-08 03:43</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26623340" target="_blank">[转发]MHR狩猎笛初步解析 Ver 2.0 </a>
            <div class="time">2021-03-29 09:39</div></li>
          <li><span>...</span></li>
        </ul>
      </div>
    </div>
    <!-- 下，吐槽意见 -->
    <div class="down">
      <!-- 标题 -->
      <div class="name" id="sourceName">
        <span>吐槽意见</span>
      </div>
      <!-- 吐槽意见 -->
      <div class="source" id="gameSource">
        <ul>
          <li><a href="https://nga.178.com/read.php?tid=26683672" target="_blank">[破事水] 2021年了b站上居然还有“民科”数学家</a>
            <span class="time">2021-05-09 21:06</span></li>
          <li><a href="https://nga.178.com/read.php?tid=26683107" target="_blank">[炎王氵]这设计也太搞心态了</a>
            <div class="time">2021-05-09 20:21</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26684277" target="_blank">[RISE氵] 准毕业狗子</a>
            <div class="time">2021-05-09 21:52</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26684475" target="_blank">有没有什么好玩的打法流派或者玩法啊</a>
            <div class="time">2021-05-09 22:08</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26669163" target="_blank">[瞎氵] 百龙遇到全程烧炕划水的卵人你们会踢吗</a>
            <div class="time">2021-05-08 18:36</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26659244" target="_blank">[黑泥] 谢谢大家的鼓励 盾斧炎王龙已经7分台</a>
            <div class="time">2021-05-08 01:07</div></li>
          <li><a href="https://nga.178.com/read.php?tid=26682335" target="_blank">[RISE氵] 片手是不是上下限差距巨大啊</a>
            <div class="time">2021-05-09 19:18</div></li>
          <li><span>...</span></li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "Community"
    }
</script>

<style scoped>
  *{
    margin: 0;
    border: 0;
    padding: 0;
  }
  .up{
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
    height: 360px;
    float: left;
  }
  .down{
    width: 100%;
    height: 360px;
    float: left;
    /* background: rgb(143, 114, 114); */
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
  li{
    height: 40px;
    /* background: green; */
  }
  .source{
    float: left;
    height: 320px;
    width: 100%;
    /* text-align: center; */
    border: 1px black solid;
    border-top:none;
    background-color: rgba(243, 232, 232, 0.267);
  }
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  li:hover{
    font-style: italic;
    font-size: 20px;

  }
  li:hover{
    background-color: rgba(236, 223, 223, 0.404);

  }
  .time{
    float: right;
  }
</style>
