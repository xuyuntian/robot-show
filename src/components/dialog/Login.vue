<template>
  <el-dialog title="登录控制台" :visible.sync="show" width="450px">
    <el-row>
      <el-input v-model="un" placeholder="请输入账户" class="mt-10" prefix-icon="el-icon-user-solid" type=""></el-input>
      <el-input v-model="pwd" placeholder="请输入密码" class="mt-10" prefix-icon="el-icon-lock" show-password></el-input>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled='un===""||pwd===""' @click="login">登录</el-button>
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
  },
  methods:{
    login(){
      this.$router.push({name:'manager'})
    }
  }
};
</script>

<style>
</style>