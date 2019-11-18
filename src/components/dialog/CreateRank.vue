<template>
  <el-dialog title="统计评分" :visible.sync="show" width="300px">
    <el-row :gutter="24" class="fxc">
      <el-col :span="8">影评编号</el-col>
      <el-col :span="16">
        <el-input v-model="typeId" placeholder="请输入影评编号"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="disableBt" @click="create">开始创建</el-button>
    </div>
  </el-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog";
import rankViewApi from "../../api/rank-view-api";
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
      rankViewApi
        .createRank(this.typeId)
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