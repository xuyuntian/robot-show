<template>
  <el-dialog title="爬取影评得概要(目前只能爬豆瓣的)" :visible.sync="show">
    <el-rwo>
      <el-input v-model="typeId" placeholder="请输入影评的编号"></el-input>
    </el-rwo>
    <el-row>
      <el-input v-model="url" placeholder="请输入有效的URL"></el-input>
    </el-row>
    <el-row>
      <el-input v-model="start" placeholder="请输入开始页"></el-input>
    </el-row>
    <el-row>
      <el-input v-model="limit" placeholder="最大的评论数量"></el-input>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="!testParams()">添加到任务队列</el-button>
    </div>
  </el-dialog>
</template>

<script>
import workerApi from "../../api/worker-api";
import BaseDialog from "./BaseDialog";
export default {
  extends: BaseDialog,
  data() {
    return {
      typeId: 0,
      url: "",
      start: "",
      limit: ""
    };
  },
  methods: {
    startTask() {
      workerApi
        .getDoc(this.url, this.typeId, this.start, this.limit)
        .then(res => {
          this.$message({
            message: res.data,
            type: "success"
          });
        });
      this.show = false;
    },
    testParams() {
      return this.typeId && this.url && this.start && this.limit;
    }
  }
};
</script>

<style>
</style>