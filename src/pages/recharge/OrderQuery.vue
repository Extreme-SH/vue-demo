<template>

  <div>

    订单编号:
    <el-input placeholder="请输入订单编号" v-model="input" :clearable="true" size="small" style="width: 25%;margin-right: 30px">
<!--      <span slot="prepend">订单编号:</span>-->
    </el-input>

<!--    <el-input placeholder="请输入下单时间" v-model="input" :clearable="true" size="small">-->
<!--      <span slot="prepend">下单时间</span>-->
<!--    </el-input>-->
    下单时间:
    <el-date-picker v-model="value" type="date" placeholder="请输入下单时间" :picker-options="pickerOptions">

    </el-date-picker>

    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary" icon="el-icon-refresh-right">重置</el-button><br>
    <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
    <el-button type="primary" icon="el-icon-upload2">导入</el-button>
    <el-button type="primary" icon="el-icon-download">导出</el-button>
    <el-button type="primary" icon="el-icon-search">高级查询</el-button>

    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">

      <el-table-column
        label="编号"
        prop="name"
      ></el-table-column>

      <el-table-column
        label="物品描述"
        prop="desc"
      ></el-table-column>

      <el-table-column
        label="订单日期"
        prop="date"
      ></el-table-column>


      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入编号搜索"></el-input>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index,scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index,scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

<!--    <分页>-->
    <el-pagination
      :page-size="6"
      :total="30"
      layout="total, prev, pager, next"
      :background="true"
      style="float: right"
    >

    </el-pagination>

  </div>
</template>

<script>
    export default {
      name: "OrderQuery",
      data() {
        return {
          currentPage: 1,
          input: "",
          value: "",
          pickerOptions: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: "今天",
              onClick(picker) {
                picker.$emit("pick",new Date());
              }
            },{
              text: "昨天",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime()-3600*1000*24);
                picker.$emit("pick",date);
              },
            },{
               text: "一周前",
               onClick(picker) {
                 const date = new Date();
                 date.setTime(date.getTime()-3600*1000*24*7);
                 picker.$emit("pick",date);
               }
              }
            ]
          },
          tableData: [
            {
            name: "编号1",
            date: "2021-05-03",
            desc: "物品1",
          },{
              name: "编号2",
            date: "2021-05-03",
            desc: "物品2",
          },{
              name: "编号3",
            date: "2021-05-03",
            desc: "物品3",
          },{
              name: "编号4",
            date: "2021-05-03",
            desc: "物品4",
          }],
          search: ""
        }
      },
      methods: {
        handleEdit(index,row){
          console.log(index,row);
        },
        handleDelete(index,row){
          console.log(index,row);
        }
      }
    }
    
    // $(function () {
    //   $("#test").click(function () {
    //     alert("我是sb");
    //   })
    // })
</script>

<style scoped>

</style>
