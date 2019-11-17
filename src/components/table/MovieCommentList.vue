<template>
  <div>
    <el-row class="fxc">
      <el-col :span="8">
          <el-input v-model="typeId" placeholder="请输入影评编号" type="number"></el-input>
      </el-col>
      <el-col :span="8" class="mx-10">
          <el-button type="primary" size="mini" @click="query">查询</el-button>
          <el-button type="primary" size="mini" @click="reset">重置</el-button>
      </el-col>
    </el-row> 
    <el-table :data="comments">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="影评编号" prop="typeId"></el-table-column>
      <el-table-column label="评分" prop="star"></el-table-column>
      <el-table-column label="评论时间" prop="commentDate">
        <template slot-scope="scope">
          <label>{{dateString(scope.row.commentDate)}}</label>
        </template>
      </el-table-column>
      <el-table-column label="是否生成详情">
        <template slot-scope="scope">
          <label v-if="scope.row.status===2">已生成详情</label>
          <label v-else-if="scope.row.status ===1">未生成详情</label>
          <label v-else>没有详情</label>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadCommnets"
    ></el-pagination>
  </div>
</template>

<script>
import rankVewApi from "../../api/rank-view-api";
export default {
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      typeId: '',
      comments: []
    };
  },
  methods: {
    loadCommnets() {
      rankVewApi
        .findCommentList(this.page, this.size, this.typeId)
        .then(res => {
          this.total = res.data.total;
          this.comments = res.data.list;
        });
    },
    query(){
        //从第一页开始.
        this.page = 1;
        this.loadCommnets();
    },
    reset(){
        this.typeId = '';
        this.query();
    }
  },
  mounted(){
      this.loadCommnets();
  }
};
</script>

<style>
</style>