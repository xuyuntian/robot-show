<template>
  <el-breadcrumb separator=">" id="bread-style">
    <el-breadcrumb-item
      v-for="(item,index) in breadItems"
      :key="index"
      :to="mapRouter(index)"
    >{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    curItem: Number
  },
  data() {
    return {
      breadItems: ["首页", "详情", "影评内容"],
      routes: [
        {
          name: "movieRank"
        },
        {
          name: "rankList",
          params: {
            typeId: this.$store.state.typeId
          }
        },
        {
          name: "rankContent"
        }
      ],
      currentRoutes: []
    };
  },
  computed: mapState(["typeId"]),
  watch:{
    typeId:function(val){
      this.routes[1].params.typeId = val;
    }
  },
  methods: {
    changeCurrent(breadItem) {
      var x;
      var temp = [];
      if ((x = this.breadItems.indexOf(breadItem)) === -1) {
        this.currentRoutes = temp;
      } else {
        for (let i = 0; i <= x; i++) {
          temp.push(this.routes[i]);
        }
        this.currentRoutes = temp;
      }
    },
    mapRouter(index) {
      if (this.currentRoutes.length - 1 > index) {
        return this.currentRoutes[index];
      }
      return null;
    }
  },
  mounted() {
    this.changeCurrent(this.breadItems[this.curItem]);
  }
};
</script>

<style>
#bread-style {
  height: 60px;
  display: flex;
  align-items: center;
  background: #eaeaea6b;
  width: 1200px;
  padding-left: 60px;
}
</style>