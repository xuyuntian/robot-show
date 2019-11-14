<template>
  <div class="w-middle">
    <el-table :data="comments">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="评分" prop="star"></el-table-column>
      <el-table-column label="评论时间" prop="commentDate">
        <template slot-scope="scope">
          <label>{{dateString(scope.row.commentDate)}}</label>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status === 2"
            type="primary"
            size="mini"
            @click="gotoDetail(scope.row)"
          >查看详情</el-button>
          <label v-else-if="scope.row.status ===1">未生成详情</label>
          <label v-else>没有详情</label>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadCommentList"
    ></el-pagination>
  </div>
</template>

<script>
import rankApi from "../../api/rank-view-api";
export default {
  props: {
    typeId: Number
  },
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      comments: [
        // {
        //   id:1,
        //   commentId:1,
        //   username:'',
        //   typeId:'',
        //   star:'',
        //   status:'',
        //   commentDate:'',
        // }
      ]
    };
  },
  watch: {
    typeId: function() {
      this.loadCommentList();
    }
  },
  methods: {
    loadCommentList() {
      rankApi.findCommentList(this.page, this.size, this.typeId).then(res => {
        this.comments = res.data.list;
        this.total = res.data.total;
      });
    },
    gotoDetail(row) {
      this.$store.commit('updateTypeId',this.typeId);
      this.$router.push({
        name: "rankContent",
        params: { commentId: row.commentId, row:row }
      });
    }
  },
  mounted() {
    this.loadCommentList();
  }
};
</script>

<style>
</style>