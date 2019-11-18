<template>
  <el-dialog title="登录控制台" :visible.sync="show" width="450px">
    <el-row>
      <el-input
        v-model="un"
        placeholder="请输入账户"
        class="mt-10"
        prefix-icon="el-icon-user-solid"
        type
      ></el-input>
      <el-input
        v-model="pwd"
        placeholder="请输入密码"
        class="mt-10"
        prefix-icon="el-icon-lock"
        show-password
      ></el-input>
    </el-row>
    <div slot="footer">
      <el-button type="primary" :disabled="un===''||pwd===''" @click="login">登录</el-button>
    </div>
    <el-row></el-row>
  </el-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog";
import loginApi from "../../api/login-api";
export default {
  extends: BaseDialog,
  data() {
    return {
      un: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      loginApi
        .login(this.un, this.pwd)
        .then(res => {
          localStorage.setItem("token", res.data);
          this.$router.push({ name: "manager" });
        })
        .catch(err => {
          this.$message.error(err.response.data);
        });
    }
  }
};
</script>

<style>
</style>