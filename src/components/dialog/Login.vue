<template>
  <el-dialog title="登录控制台" :visible.sync="show" width="450px">
    <el-row>
      <el-input v-model="un" placeholder="请输入账户" class="mt-10" prefix-icon="el-icon-user-solid"></el-input>
      <el-input v-model="pwd" placeholder="请输入密码" class="mt-10" prefix-icon="el-icon-lock" show-password></el-input>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled='un===""||pwd===""'>登录</el-button>
    </div>
    <el-row></el-row>
  </el-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog";
export default {
  extends: BaseDialog,
  data() {
    return {
      un: "",
      pwd: ""
    };
  }
};
</script>

<style>
</style>