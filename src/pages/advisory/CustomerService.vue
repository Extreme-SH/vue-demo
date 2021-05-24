<template>
<div>
  <div class="right" v-if="index">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    我们能为你提供什么样的协助？
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <a @click="changeyouxiruanjian">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            游戏、软件等…
                    </span>
          </div>
        </a>

        <a @click="changegoumaixiaofei">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            购买消费
                    </span>
          </div>
        </a>

        <a @click="changewodezhanghu">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我的账户
                    </span>
          </div>
        </a>

        <a @click="changejiaoyi">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            交易
                    </span>
          </div>
        </a>

        <a @click="changesongli">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            送礼
                    </span>
          </div>
        </a>

        <a @click="changeshequshichang">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            市场
                    </span>
          </div>
        </a>

        <a @click="changedianshu">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            猎人点数
                    </span>
          </div>
        </a>

        <a @click="changeyingjian">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            游戏硬件
                    </span>
          </div>
        </a>

        <a @click="changeyingjian">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            更新器
                    </span>
          </div>
        </a>

        <a @click="changechajian">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            插件、mod…
                    </span>
          </div>
        </a>

        <a @click="changechuangyigongf">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            创意工坊
                    </span>
          </div>
        </a>

        <a @click="changebumingshoufei">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我有来自怪物猎人的不明收费
                    </span>
          </div>
        </a>
    </div>

    <hr style="color: white;width: 40%;position: absolute;left: 30%;">

    <div class="searh">
      <input type="text"
             placeholder="搜索问题、功能和游戏"
             style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
    </div>

    </div>

  </div>


  <div class="right" v-if="youxiruanjian">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    你在哪一款产品中遇到困难？
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter World 本体
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter World Iceborne
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter XX
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter Rise
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter 物语
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter 物语2 DeathWings
                    </span>
        </div>

      </div>
      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="goumaixiaofei">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    选择问题或购买来获得更多帮助
                </span>
        </div>
      </div>


      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">
        <a>
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我无法在怪猎商城完成购买
                    </span>
          </div>
        </a>

        <a>
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我有来自怪物猎人的不明收费
                    </span>
          </div>
        </a>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            查看完整购买记录
                    </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="wodezhanghu">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            管理账户详情（电子邮件、手机、支付方式、国家/地区）
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            家庭库共享
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            家庭监护
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            怪猎令牌
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            手机号码
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            怪猎令牌手机验证器
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我的账户被盗窃或劫持了
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            帮助我登陆我的账户
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            您怪猎账户的相关数据
                    </span>
        </div>

      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>

  </div>


  <div class="right" v-if="shequshichang">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    您在尝试购买什么
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我需要查看我的社区市场的历史记录
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想对怪猎社区市场了解更多
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我需要帮助验证我的信用卡所有权
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我无法使用我的怪猎社区市场
                    </span>
        </div>
      </div>
      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>



</div>

  <div class="right" v-if="jiaoyi">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            我要查看我的全部交易记录
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我需要交易报价方面的帮助
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我的物品消失或盗窃
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想举报诈骗者
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想要阅读交易政策与建议实践
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我无法进行交易
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想要我的怪猎交易URL
                    </span>
        </div>


      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="songli">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            我要查看我的送礼记录
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想对额外副本了解更多
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我想对怪猎礼物了解更多
                    </span>
        </div>

      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="dianshu">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            怪猎点数常见问题
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            访问点数商店
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            查看你的怪猎点数历史记录
                    </span>
        </div>


      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="yingjian">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    您在使用哪款硬件产品时需要帮助？
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter VR
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter Controller
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter Link
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter 硬件配件
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            Monster Hunter 流式应用
                    </span>
        </div>

      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>

  </div>



  <div class="right" v-if="gengxinqi">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            更新器启动失败
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            游戏更新配置文件失效
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            下载最新版本更新器
                    </span>
        </div>


      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>



  <div class="right" v-if="chajian">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            插件无法安装
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            插件不适配
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            插件不起作用
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            访问插件社区
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            查看插件安装历史
                    </span>
        </div>

      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>



  <div class="right" v-if="chuangyigongf">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    请选择一个需要协助的项目
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent" onclick="">
                    <span style="font-size: 15px;line-height: 37px;">
                            无法进入创意工坊
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            无法在工坊发布自己的作品
                    </span>
        </div>


        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            访问创意工坊
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            查看创意工坊下载历史
                    </span>
        </div>

      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>
  </div>


  <div class="right" v-if="bumingshoufei">

    <div class="cotent">
      <div class="title">
        <div class="titlecontent">
          <a @click="changeindex">
                <span style="font-size: 30px;letter-spacing: 4px;">
                        怪物猎人客服
                </span>
          </a>
          <br>
          <span style="font-size: 20px;letter-spacing: 2px; ">
                    我有来自怪物猎人的不明收费
                </span>
        </div>
      </div>

      <hr style="color: white;width: 40%;position: absolute;left: 30%;">
      <div class="cotentcontent">

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我有怪猎账户
                    </span>
        </div>

        <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我不是怪猎账户
                    </span>
        </div>

        <a @click="changeindex">
          <div class="cotentcotentcontent">
                    <span style="font-size: 15px;line-height: 37px;">
                            我有其他付款问题
                    </span>
          </div>
        </a>

      </div>
      <hr style="color: white;width: 40%;position: absolute;left: 30%;">

      <div class="searh">
        <input type="text"
               placeholder="搜索问题、功能和游戏"
               style="text-align: center;width: 100%; height: 40px;font-size: 18px;background-color: rgba(169,169,169,0.15);">
      </div>


    </div>

  </div>

</div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        index: true,
        youxiruanjian: false,
        goumaixiaofei: false,
        wodezhanghu: false,
        shequshichang: false,
        jiaoyi: false,
        songli: false,
        dianshu: false,
        yingjian: false,
        gengxinqi: false,
        chajian: false,
        chuangyigongf: false,
        bumingshoufei: false
      }
    },
    methods: {
      changeindex() {
          this.index= true,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changeyouxiruanjian(){
        this.index= false,
          this.youxiruanjian= true,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changegoumaixiaofei(){
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= true,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changewodezhanghu() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= true,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changeshequshichang() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= true,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changejiaoyi() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= true,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changesongli() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= true,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changedianshu() {
          this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= true,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changeyingjian () {
          this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= true,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changegengxinqi() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= true,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changechajian() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= true,
          this.chuangyigongf= false,
          this.bumingshoufei= false
      },
      changechuangyigongf() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= true,
          this.bumingshoufei= false
      },
      changebumingshoufei() {
        this.index= false,
          this.youxiruanjian= false,
          this.goumaixiaofei= false,
          this.wodezhanghu= false,
          this.shequshichang= false,
          this.jiaoyi= false,
          this.songli= false,
          this.dianshu= false,
          this.yingjian= false,
          this.gengxinqi= false,
          this.chajian= false,
          this.chuangyigongf= false,
          this.bumingshoufei= true
      }
    }
  }
</script>

<style scoped>

  a{
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }

  span{
    color: white;
  }
  ul{
    color: white;
  }
  .right{
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to bottom right,rgba(0,0,0,0.5),black);
  }
  .cotent{
    top: 85px;
    float: left;
    width: 60%;
    position: absolute;
    left: 15%;
    top: 2%;
  }
  .title{
  }
  .titlecontent{
    width: 80%;
    margin-left: 10%;
    text-align: center;
  }
  .cotentcontent{
  }
  .cotentcotentcontent{
    width: 38%;
    margin-left: 31%;
    background-color: rgba(169,169,169,0.15);
    transition: background-color 0.3s;
    height:37px;
    vert-align: middle;
    margin-top: 10px;
    /*border: 1px red solid;*/
  }
  .cotentcotentcontent:hover{
    background-color: rgba(255,255,255,0.25);
  }
  button{
    transition: opacity 0.3s;
    opacity: 0.6;
  }
  button:hover{
    opacity: 100%;
  }

  .searh{
    width: 38%;
    margin-left: 31%;
    height:55px;
    vert-align: middle;
    margin-top: 10px;
    outline: none;
  }

</style>
