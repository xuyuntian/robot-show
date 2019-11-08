<template>
  <el-container>
    <el-header>
      <el-menu default-active mode="horizontal">
        <el-menu-item index="1">菜单一</el-menu-item>
        <el-menu-item index="2">菜单二</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <Test></Test>
    </el-main>
  </el-container>
</template>

<script>
import Test from "../../components/Test";
export default {
  data() {
    return {};
  },
  components: {
    Test
  }
};
</script>

<style>
</style>