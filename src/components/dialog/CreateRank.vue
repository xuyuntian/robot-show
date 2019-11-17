<template>
  <el-dialog title="统计评分" :visible.sync="show">
    <el-row :gutter="24">
      <el-col :span="8">影评编号</el-col>
      <el-col :span="12">
        <el-input v-model="typeId" placeholder="请输入影评编号"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="disableBt">开始创建</el-button>
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
    create() {
      this.disableBt = true;
      parseApi
        .createRank(this.typeId)
        .then(res => {
          this.show = false;
          (this.disableBt = false),
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