<template>
  <el-dialog title="将文档转化成评论概要" :visible.sync="show" width="350px">
    <el-row :gutter="24" class="mt-10 fxc">
      <el-col :span="8">影评编号</el-col>
      <el-col :span="12">
        <el-input v-model="typeId" placeholder="请输入影评编号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt-10 fxc">
      <el-col :span="8">转化的个数</el-col>
      <el-col :span="12">
        <el-input v-model="limit" placeholder="请输入转化个数"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="disableBt" @click="startParse">进行转化</el-button>
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
        .parseComment(this.typeId, this.limit)
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