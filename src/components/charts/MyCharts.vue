<template>
  <el-card class="width-450">
    <div slot="header">
      <el-row :gutter="24">
        <el-col :span="12">
          <strong>XXX影评</strong>
        </el-col>
        <el-col :span="12" class="frx">
          <el-button type="primary" size="mini" @click="gotoDetail">详情</el-button>
        </el-col>
      </el-row>
      
    </div>
    <div ref="ref" style="width:420px;height:400px"></div>
  </el-card>
</template>

<script>
//这些需要修改。
const echarts = require("echarts");
export default {
  props:{
    color:String,
  },
  data() {
    return {
      option: {
        color: [this.color?this.color:"#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["一星", "二星", "三星", "四星", "五星"],
            axisTick: {
              alignWithLabel: true
            }
            //  color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53'],
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "评论数量",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390]
          }
        ]
      }
    };
  },
  methods: {
    initCharts() {
      let chart = echarts.init(this.$refs.ref);
      chart.setOption(this.option);
    },
    gotoDetail(){
      this.$router.push({name:'rankList'})
    }
  },
  mounted() {
    this.initCharts();
  }
};
</script>

<style>
</style>