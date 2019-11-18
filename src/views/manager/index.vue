<template>
  <el-container style="margin-top:50px">
    <el-aside width="200px">
      <el-menu :default-active="active" router>
        <el-menu-item
          v-for="(item,index) in menueItems"
          :key="index"
          :index="item.index"
          :route="item.route"
        >{{item.name}}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="w-middle">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      menueItems: [
        {
          index: "1",
          name: "影评名称管理",
          route: {
            name: "movieType"
          }
        },
        {
          index: "2",
          name: "影评统计",
          route: {name:"managerMovieRank"}
        },
        {
          index: "3",
          name: "任务管理",
          route: {
            name:"task",
          }
        },
        {
          index: "4",
          name: "文档管理",
          route: {
            name:"docList"
          }
        },
        {
          index: "5",
          name: "文档转换",
          route: {
            name:"docParser"
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>