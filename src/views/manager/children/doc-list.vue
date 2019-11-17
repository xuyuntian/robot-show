<template>
  <el-card class="w-middle">
    <el-tabs>
      <el-tab-pane label="评论列表文档">
        <MvDoc></MvDoc>
      </el-tab-pane>
      <el-tab-pane label="评论概况内容">
        <MvCommnet></MvCommnet>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import MvCommnet from "../../../components/table/MovieCommentList";
import MvDoc from "../../../components/table/MovieDocTable";
export default {
  components: {
    MvCommnet,
    MvDoc
  }
};
</script>

<style>
</style>