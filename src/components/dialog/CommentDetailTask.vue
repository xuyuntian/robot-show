<template>
  <el-dialog title="爬取评论详情" :visible.sync="show">
    <el-row :gutter="24" class="mt-10">
      <el-col :span="6">
        <span>影评的编号</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="typeId" placeholder="请输入影评的编号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt-10">
      <el-col :span="6">
        <span>url前缀</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="url" placeholder="请输入有效的URL"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="!testParams()" @click="startTask">添加到任务队列</el-button>
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
      typeId: '',
      url: ""
    };
  },
  methods: {
    startTask() {
      workerApi.getDetail(this.typeId, this.url).then(res => {
        this.$message({
          message: res.data,
          type: "success"
        });
      });
      this.show = false;
    },
    testParams() {
      return this.typeId && this.url;
    }
  }
};
</script>

<style>
</style>