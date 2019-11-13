<template>
  <el-card class="width-450">
    <div slot="header">
      <el-row :gutter="24">
        <el-col :span="12">
          <strong>{{title}}</strong>
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
  props: {
    color: String,
    id: Number,
    oneStar: Number,
    twoStar: Number,
    threeStar: Number,
    fiveStar: Number,
    fourStar: Number,
    title: String,
    start: String,
    end: String,
    createDate: String,
    typeId: Number
  },
  data() {
    return {
      option: {
        color: [this.color ? this.color : "#3398DB"],
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
            data: []
          }
        ]
      }
    };
  },
  watch:{
    //得到id后，直接重新初始化。
    id:function(){
      this.initCharts();
    }
  },
  methods: {
    initCharts() {
      let chart = echarts.init(this.$refs.ref);
      this.option.series[0].data = [
        this.oneStar,
        this.twoStar,
        this.threeStar,
        this.fourStar,
        this.fiveStar
      ];
      chart.setOption(this.option);
    },
    gotoDetail() {
      this.$router.push({ name: "rankList" });
    }
  },
  mounted() {
    //不知为何，现在在mouted中无法获取props。
  }
};
</script>

<style>
</style>