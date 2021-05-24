<template>
  <div style="background-image: url('../../../../static/main_bg.jpg')">
  <el-carousel indicator-position="outside" height="490px" type="card" >
    <el-carousel-item v-for="item in srcList" :key="item">
      <el-image :src="item"></el-image>
    </el-carousel-item>
  </el-carousel>


  <el-button @click="dialog = true" style="margin-left: 43%" type="success" icon="el-icon-check" circle><p class="pStyle">点击抢购</p><p class="pStyle">机不可失,淦就完事了</p></el-button>


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
    name: "gift",
    data() {
      return {
        srcList: [
          "/static/gift1.jpg",
          "/static/gift2.jpg",
          "/static/gift3.jpg",
          "/static/gift4.jpg",
          "/static/gift5.jpg",
        ],
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

  .el-carousel__item {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item .el-image {
    max-width: 100%;
    max-height: 100%;
  }
  .el-button--success {
    width: 170px;
    font-size: 3px;
    padding: 0px;
    height: 170px;
    /*background-color: #e23232;*/
  }

  .pStyle {
    font-size: 20px;
  }
</style>
