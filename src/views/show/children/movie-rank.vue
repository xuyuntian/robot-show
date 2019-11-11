<template>
  <div>
      <Bread :curItem="0"></Bread>
      <div id="charts-content">
        <MyCharts class="mx-10 mt-10" color="#123456"></MyCharts>
        <MyCharts class="mx-10 mt-10"></MyCharts>
        <MyCharts class="mx-10 mt-10"></MyCharts>
        <MyCharts class="mx-10 mt-10"></MyCharts>
        <MyCharts class="mx-10 mt-10"></MyCharts>
      </div>
      <!-- <Article></Article> -->
  </div>
</template>

<script>
import MyCharts from "../../../components/charts/MyCharts";
import Bread from '../../../components/breadcrumb/MovieRankBreadcrumb'
export default {
    components: {
    MyCharts,
    Bread
  },
}
</script>

<style>
#charts-content {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>