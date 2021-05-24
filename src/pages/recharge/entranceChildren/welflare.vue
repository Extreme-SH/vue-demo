<template>
        <div style="height: 800px;background-image: url('../../../../static/main_bg.jpg')">
          <!-- 上 -->
          <div class="up">
            <!-- 上左 -->
            <div class="pictures" id="pictures1">
        <el-image style="height: 150px;width: 150px" :src="src1" :preview-src-list="srcList1"></el-image>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src1Name}}</el-link>
        <div class="introduce">{{src1Introduce}}</div>
      </div>

      <!-- 上中 -->
      <div class="pictures" id="pictures2">
        <el-image style="height: 150px;width: 150px" :src="src2" :preview-src-list="srcList2"></el-image>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src2Name}}</el-link>
        <div class="introduce">{{src2Introduce}}</div>
      </div>

      <!-- 上右 -->
      <div class="pictures" id="pictures3">
        <el-image style="height: 150px;width: 150px" :src="src3" :preview-src-list="srcList3" alt="图鉴"/>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src3Name}}</el-link>
        <div class="introduce">{{src3Introduce}}</div>
      </div>
    </div>

    <!-- 下 -->
    <div class="down">
      <!-- 下左 -->
      <div class="pictures" id="pictures4">
        <el-image style="height: 150px;width: 150px" :src="src4" :preview-src-list="srcList4" alt="图鉴"/>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src4Name}}</el-link>
        <div class="introduce">{{src4Introduce}}</div>
      </div>

      <!-- 下中 -->
      <div class="pictures" id="pictures5">
        <el-image style="height: 150px;width: 150px" :src="src5" :preview-src-list="srcList5" alt="图鉴"/>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src5Name}}</el-link>
        <div class="introduce">{{src5Introduce}}</div>
      </div>
      <!-- 下右 -->
      <div class="pictures" id="pictures6">
        <el-image style="height: 150px;width: 150px" :src="src6" :preview-src-list="srcList6" alt="图鉴"/>
        <el-link @click="dialog = true" :underline="false" icon="el-icon-view">{{src6Name}}</el-link>
        <div class="introduce">{{src6Introduce}}</div>
      </div>
      <el-pagination style="float: right;margin-top:1%;margin-right: 3%"
                     :current-page.sync="currentPage"
                     :page-size="6"
                     layout="total, prev, pager, next"
                     :total="30"
                     :background="true"
      >
      </el-pagination>
    </div>


          <el-drawer
            :before-close="handleClose"
            :visible.sync="dialog"
            direction="rtl"
            custom-class="demo-drawer"
            ref="drawer"
          >
            <div class="demo-drawer__content">
              <el-form :model="form">
                <el-form-item label="商品名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" style="width: 300px" :disabled="true" placeholder="doge头盔"></el-input>
                </el-form-item>
                <el-form-item label="收货账户" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择游戏账户">
                    <el-option label="攻城略地" value="gcld"></el-option>
                    <el-option label="AZrookie" value="cainiao"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div class="demo-drawer__footer">
                <el-button @click="cancelForm">取 消</el-button>
                <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
              </div>
            </div>
          </el-drawer>

  </div>
</template>

<script>
  export default {
    name: "welflare",
    data() {
      return {
        currentPage: 1,
        dialog: false,
        loading: false,
        table: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px',
        timer: null,

        src1: "/static/hl1.jpg",
        srcList1: [
          "/static/hl1.jpg",
          "/static/hl2.jpg",
          "/static/hl3.jpg",
          "/static/hl5.jpg",
          "/static/hl6.jpg",
          "/static/hl7.jpg",
          "/static/hl8.jpg",
          "/static/hl9.jpg",
          "/static/hl10.jpg",
        ],
        src1Name:"真人cos服",
        src1Introduce: "宅男都心动的cos，穿上他，你就是怪猎世界最亮的仔",
        src2: "/static/jilang1.jpg",
        srcList2: [
          "/static/jilang1.jpg",
          "/static/jilang2.jpg",
          "/static/jilang3.jpg",
          "/static/jilang4.jpg",
          "/static/jilang5.jpg",
          "/static/jilang6.jpg",
          "/static/jilang7.jpg",
          "/static/jilang8.jpg",
          "/static/jilang9.jpg",
          "/static/jilang10.jpg",
        ],
        src2Name:"雪鬼兽武器套装",
        src2Introduce:"猎人有什么坏心思呢，不过是把雪鬼兽做成了武器罢了",
        src3: "/static/tr1.jpg",
        srcList3: [
          "/static/tr1.jpg",
          "/static/tr2.jpg",
          "/static/tr3.jpg",
          "/static/tr4.jpg",
        ],
        src3Name:"个人主页背景",
        src3Introduce:"有哪个猎人能拒绝拥有一个炫酷的背景呢",
        src4: "/static/gf3.gif",
        srcList4: [
          "/static/gf1.gif",
          "/static/gf2.gif",
          "/static/gf3.gif",
          "/static/gf4.gif",
          "/static/gf5.gif",
          "/static/gf6.gif",
          "/static/gf7.gif",
          "/static/gf8.gif",
        ],
        src4Name:"头像gif兑换",
        src4Introduce:"背景不能失去头像，正如西方不能失去耶路撒冷",
        src5: "/static/zb4.jpg",
        srcList5: [
          "/static/zb1.jpg",
          "/static/zb2.jpg",
          "/static/zb3.jpg",
          "/static/zb4.jpg",
          "/static/zb5.jpg",
          "/static/zb6.jpg",
          "/static/zb7.jpg",
        ],
        src5Name:"同人周边",
        src5Introduce:"猎人们的yy具象化的产物",
        src6: "/static/bzs3.jpg",
        srcList6: [
          "/static/bzs1.jpg",
          "/static/bzs2.jpg",
          "/static/bzs3.jpg",
          "/static/bzs4.jpg",
          "/static/bzs5.jpg",
          "/static/bzs6.jpg",
          "/static/bzs7.jpg"
        ],
        src6Name:"怪兽图鉴",
        src6Introduce:"你可以用这本书来记录你打倒的怪兽，当然，也可能是怪物记录猎人的图鉴",
      }
    },
    methods: {
      handleClose(done) {
        if (this.loading) {
          return;
        }
        this.$confirm('确定要提交表单吗？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {});
      },
      cancelForm() {
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      }
    }

  }
</script>

<style scoped>
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

  .el-image {
    margin-left: 40%;
    margin-top: 15%;
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
    font-family: LiSu;
    background-color: rgba(231, 220, 220, 0.144);
    font-size: 25px;
  }
  .el-link {
    height: 50%;
    width: 40%;
    float: left;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-top: -30%;
    color: black;
    font-family: LiSu;
  }
</style>
