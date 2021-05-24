<template>
    <div>
      <div class="Inner" align="center">
        <h1 style="color: cornflowerblue">Mods</h1>
        <li class="li">《怪物猎人：世界》雪花初音未来外观MOD</li>
        <li class="li">《怪物猎人：世界》尼尔A2发型MOD</li>
        <li class="li">《怪物猎人：世界》女性角色走路更女性化MOD</li>
        <li class="li">《怪物猎人：世界》厨师艾露猫MOD</li>
        <li class="li">《怪物猎人：世界》可爱喵喵厨师套装MOD</li>
        <li class="li">《怪物猎人：世界》贝希摩斯伤害字体MOD</li>
        <li class="li">《怪物猎人：世界》镜头高度优化MOD</li>
        <li class="li">《怪物猎人：世界》农场双倍收获MOD</li>
        <li class="li">《怪物猎人：世界》完美的冲刺效果MOD</li>
        <li class="li">《怪物猎人：世界》双刀更长的持续时间MOD</li>
        <li class="li">《怪物猎人：世界》更多可耕种的物品MOD</li>
        <li class="li">《怪物猎人：世界》更长的长剑持续时间MOD</li>
        <li class="li">《怪物猎人：世界》原神岩枪MOD</li>
        <li class="li">《怪物猎人：世界》MH4U盾斧动作值MOD</li>
        <li class="li">《怪物猎人：世界》万恶之眼锤MOD</li>
        <li class="li">《怪物猎人：世界》黑龙灵魂尖啸盾斧MOD</li>
        <li class="li">《怪物猎人：世界》白色黑龙赤膊套装MOD</li>
        <li style="color: cornflowerblue;list-style:none;">
          <a href="patch/mods" style="text-decoration: none">阅读更多>></a>
        </li>
      </div>
      <div class="Inner" align="center">
        <h1 style="color: cornflowerblue">补丁</h1>
        <li class="li">《怪物猎人：世界》简体中文正常化补丁</li>
        <li class="li">《怪物猎人：世界》怪物三星元素弱点图标指示</li>
        <li class="li">《怪物猎人：世界》农场肥料提示补丁</li>
        <li class="li">《怪物猎人：世界》ReShade画质补丁增强版</li>
        <li class="li">《怪物猎人：世界》LMAO简体汉化补丁V2.0</li>
        <li style="color: cornflowerblue;list-style:none;">

          <a href="patch/piu" style="text-decoration: none">阅读更多>></a>
        </li>
      </div>

      <div class="Inner" align="center" style="border-top: gray solid">
        <h1 style="color: cornflowerblue">插件</h1>
        <li class="li">《怪物猎人世界：冰原》NativePC加载程序v0512</li>
        <li class="li">《怪物猎人世界：冰原》商店清单编辑器</li>
        <li class="li">《怪物猎人世界：冰原》怪物掉落编辑器</li>
        <li class="li">《怪物猎人世界：冰原》简易武器替代品工具</li>
        <li class="li">《怪物猎人世界：冰原》修改存档ID工具</li>
        <li class="li">《怪物猎人：世界》Steam好友联机选择工具V1.2</li>
        <li class="li">《怪物猎人：世界》Mod管理工具汉化版v1.41</li>
        <li class="li">《怪物猎人：世界》显血插件V5.4</li>
        <li class="li">《怪物猎人：世界》mod管理软件Vortex</li>
        <li style="color: cornflowerblue;list-style:none;">
          <a href="patch/patchc" style="text-decoration: none">阅读更多>></a>
        </li>

      </div>

    </div>
</template>

<script>
  import Mods from "./Mods"
  import PIU from "./Piu"
  import Patchc from "./Patchc"

    export default {
      name: "Default",
      data() {
        return {

        }
      },
      methods: {

      },
      components: {
        Mods,
        PIU,
        Patchc
      },

    }
</script>

<style scoped>
  @import "../../../assets/style/default.css";


</style>
