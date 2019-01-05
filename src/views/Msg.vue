<template>
  <div>
<el-container>
  <el-aside  style="padding-top: 10px; width:750px;height: 500px; border: 1px solid #eee">
    <el-button size="small" @click="allread">所有留言</el-button>
    <el-badge :value="noReadNum" class="item">
      <el-button size="small" style="margin-left: 10px" @click="unread()">未读留言</el-button>
    </el-badge>
    <el-button size="small" style="margin-left: 10px">删除选中</el-button>
    <el-button size="small">忽略选中</el-button>
    <el-button size="small">统一回复</el-button>
    <el-input size="mini" style="width: 150px; margin-left: 20px" placeholder="请输入用户名"  clearable ></el-input>
    <el-button size="small">查询</el-button>
    <el-table
      v-if="uread"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        label="全选"
        width="55">
      </el-table-column>
      <el-table-column
        label="留言日期"
        width="120"
        prop="date">
        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="content"
        label="留言内容"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="处理方式">
        <template slot-scope="scope" >
          <el-button
            size="mini"
            @click="greet(scope.$index, scope.row)">回复</el-button>
          <el-button
            size="mini"
            @click="ignore(scope.$index, scope.row)">忽略</el-button>
          <el-button
            size="mini"
            @click="delete1(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      v-if="read"
      ref="multipleTable"
      :data="tableDataAll"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        label="全选"
        width="55">
      </el-table-column>
      <el-table-column
        label="留言日期"
        width="120"
        prop="date">
        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="content"
        label="留言内容"
        width="300"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="处理方式">
        <template slot-scope="scope" >
          <el-button
            size="mini"
            @click="greet(scope.$index, scope.row)">回复</el-button>
          <el-button
            size="mini"
            @click="delete1(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-aside>
  <el-container v-if="response">
    <el-main style="width:400px; height: 500px; border: 1px solid #eee" >
      <el-form>
        <el-form-item label="回复留言">
          <el-input type="textarea" resize="none" rows="12"   placeholder="请输入回复内容" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-star-off" circle></el-button>
          <el-button type="success" icon="el-icon-picture" circle ></el-button>
          <el-button type="warning" icon="el-icon-new-paizhao" circle></el-button>
          <el-button type="success" icon="el-icon-new-qq" circle ></el-button>
        </el-form-item>
        <el-form-item>
          <template slot-scope="scope">
          <el-button type="primary" @click="onSubmit">提交回复</el-button>
          <el-button type="warning" @click="offSubmit">取消回复</el-button>
          </template>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index:-1,
        row:{},
        uread:false,
        read:true,
        response:false,
        noReadNum: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }],
        tableDataAll: [{
          date: '2016-05-03',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄'
        }],

        multipleSelection: [],
        form: {
          desc: ''
        }
      }
    },

    methods: {
      allread(){
        this.read=true;
        this.uread=false;
      },
      unread(){
        this.noReadNum=this.tableData.length;
        this.read=false;
        this.uread=true;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      greet(index, row){
        this.response=true;
        this.index=index;
        this.row=row;
        console.log(index + '  ' + row)
      },
      ignore(index, row){
        this.response=false;
        console.log(index + '  ' + row)
        this.noReadNum = this.noReadNum - 1;
        this.tableData.splice(index,1)
      },
      delete1(index, row){
        this.response=false;
        console.log(index + '  ' + row);
        this.noReadNum = this.noReadNum - 1;
        this.tableData.splice(index,1)
      },
      onSubmit(){
        this.ignore(this.index,this.row);
        console.log("ok!")
      },
      offSubmit(){
        this.ignore(this.index,this.row);
        console.log("wait!")

      },
    }
  }
</script>
