<template>
  <el-dialog title="将文档转化成评论详情" :visible.sync="show">
    <el-row :gutter="24">
      <el-col :span="8">影评编号</el-col>
      <el-col :span="12">
        <el-input v-model="typeId" placeholder="请输入影评编号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="8">转化的个数</el-col>
      <el-col :span="12">
        <el-input v-model="limit" placeholder="请输入转化个数"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="disableBt">进行转化</el-button>
    </div>
  </el-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog";
import parseApi from "../../api/parser-api";
export default {
  extends: BaseDialog,
  data() {
    return {
      typeId: "",
      limit: "",
      disableBt: false
    };
  },
  methods: {
    startParse() {
      this.disableBt = true;
      parseApi
        .parseDetail(this.typeId, this.limit)
        .then(res => {
          this.show = false;
          this.disableBt = false,
            this.$message({
              message: res.data,
              type: "success"
            });
        })
        .catch(() => {
          (this.disableBt = false), (this.show = false);
        });
    }
  }
};
</script>

<style>
</style>