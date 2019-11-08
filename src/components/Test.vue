<template>
  <el-card>
    <div ref="ref" style="width:500px;height:450px"></div>
  </el-card>
</template>

<script>
const echarts = require("echarts");
export default {
  data() {
    return {
      option: {
        color: ["#3398DB"],
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
      window.console.log(echarts);
      let chart = echarts.init(this.$refs.ref);
      chart.setOption(this.option);
    }
  },
  mounted() {
    this.initCharts();
  }
};
</script>

<style>
</style>