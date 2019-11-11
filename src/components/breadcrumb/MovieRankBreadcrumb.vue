<template>
  <el-breadcrumb separator=">" style="height:60px">
    <el-breadcrumb-item v-for="(item,index) in breadItems" :key="index" :to="mapRouter(index)">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props:{
    curItem:Number,
  },
  data() {
    return {
      breadItems: ["首页", "详情", "影评内容"],
      routes: [
        {
          name: "movieRank"
        },
        {
          name: "rankList"
        },
        {
          name: "rank-content"
        },
      ],
      currentRoutes:[
        
      ]  
    };
  },
  methods:{
    changeCurrent(breadItem){
      var x ;
      var temp = [];
      if((x = this.breadItems.indexOf(breadItem)) === -1){
        this.currentRoutes = temp;
      }else{
        for(let i = 0; i<= x; i++){
          temp.push(this.routes[i]);
        }
        this.currentRoutes = temp;
      }
    },
    mapRouter(index){
      if(this.currentRoutes.length > index){
        return this.currentRoutes[index];
      }
      return null;
    }
  },
  mounted(){
    this.changeCurrent(this.breadItems[this.curItem]);
  }
};
</script>

<style>
</style>