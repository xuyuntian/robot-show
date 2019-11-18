<template>
  <div class="fyc w-full">
    <Bread :curItem="0"></Bread>
    <div id="charts-content">
      <MyCharts class="mx-10 mt-10" v-for="(item,index) in rankSouce" :key="index" v-bind="item"></MyCharts>
      <!-- <Article></Article> -->
    </div>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadView"
      class="mt-10"
    ></el-pagination>
  </div>
</template>

<script>
import MyCharts from "../../../components/charts/MyCharts";
import Bread from "../../../components/breadcrumb/MovieRankBreadcrumb";
import rankViewApi from "../../../api/rank-view-api";
export default {
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      rankSouce: []
    };
  },
  components: {
    MyCharts,
    Bread
  },
  methods: {
    loadView() {
      rankViewApi.findRankView(this.page, this.size).then(res => {
        this.rankSouce = res.data.list;
        this.total = res.data.total;
      });
    }
  },
  mounted() {
    this.loadView();
  }
};
</script>

<style>
#charts-content {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>