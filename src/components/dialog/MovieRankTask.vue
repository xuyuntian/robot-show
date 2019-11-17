<template>
  <el-dialog title="爬取影评得概要(目前只能爬豆瓣的)" :visible.sync="show">
    <el-row :gutter="24" class="mt-10">
      <el-col :span="8">
        <span>影评编号(不要重复)</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="typeId" type="number"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt-10">
      <el-col :span="8">
        <span>url</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="url" placeholder="请输入有效的URL"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt-10">
      <el-col :span="8">
        <span>start</span>
      </el-col>
      <el-col :span="12">
        <el-input v-model="start" placeholder="请输入开始页"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt-10">
      <el-col :span="8"><span>limit</span></el-col>
      <el-col :span="12">
        <el-input v-model="limit" placeholder="最大的评论数量"></el-input>
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