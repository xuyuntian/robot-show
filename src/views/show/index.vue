<template>
  <el-container>
    <el-header>
      <el-menu :default-active="menueItems[0].index" mode="horizontal" class="fxcc" router>
        <el-menu-item
          v-for="(item,index) in menueItems"
          :key="index"
          :route="item.route"
          :index="item.index"
        >{{item.text}}</el-menu-item>
        <div class="mx-10">
          <el-button type="primary" plain size="mini" @click="showLogin = true">登录</el-button>
        </div>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
      <Login :visible.sync="showLogin"></Login>
    </el-main>
  </el-container>
</template>

<script>
import Login from "../../components/dialog/Login";
export default {
  data() {
    return {
      showLogin: false,
      menueItems: [
        {
          index: "1",
          route: { name: "movieRank" },
          text: "影评"
        },
        {
          index: "2",
          route: { name: "bookRank" },
          text: "书评"
        },
        {
          index: "3",
          route: { name: "" },
          text: "关于该网站"
        }
      ]
    };
  },
  components: {
    Login
  },
  mounted() {
    this.$router.push(this.menueItems[0].route);
  }
};
</script>

<style>
</style>