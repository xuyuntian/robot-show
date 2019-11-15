<template>
  <el-card class="w-middle">
    <div slot="header">
      <p>爬取网页(其中的评论详情需要先通过转换成评论列表-->转换之后才能开始爬取与列表对应用户相关的评论细节)</p>
      <p>爬取影评概要需要先创建影评名称，在将它的id绑定到对应字段上。</p>
      <el-row>
        <el-button type="primary">抓取影评概要</el-button>
        <el-button type="primary">抓取影评细节</el-button>
        <el-button @click="loadUrls">刷新队列</el-button>
      </el-row>
    </div>
    <h3>任务队列共{{total}}条任务</h3>
    <div id="urlList">
      <el-row>
        <label v-for="(url,index) in urls" :key="index">{{url}}</label>
      </el-row>
    </div>
    <DetailTask></DetailTask>
    <DocTask></DocTask>
  </el-card>
</template>

<script>
import workerApi from "../../../api/worker-api";
import DocTask from "../../../components/dialog/MovieRankTask";
import DetailTask from "../../../components/dialog/CommentDetailTask";
export default {
  data() {
    return {
      urls: [],
      total: 0,
      openDoc: false,
      openDetail: false
    };
  },
  methods: {
    loadUrls() {
      workerApi.getCurrentUrls().then(res => {
        this.urls = res.data.list;
        this.total = res.data.total;
      });
    }
  },
  components: {
    DocTask,
    DetailTask
  },
  mounted() {
    this.loadUrls();
  }
};
</script>

<style>
#urlList {
  width: 100%;
  height: 800px;
  overflow: auto;
}
</style>