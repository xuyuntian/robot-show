<template>
  <el-card class="w-large">
    <div slot="header">
      <el-button type="primary" @click="showCreate = true">统计</el-button>
    </div>
    <el-table :data="rankRes">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="title" prop="title"></el-table-column>
      <el-table-column label="typeId" prop="typeId"></el-table-column>
      <el-table-column label="oneStar" prop="oneStar"></el-table-column>
      <el-table-column label="twoStar" prop="twoStar"></el-table-column>
      <el-table-column label="threeStar" prop="threeStar"></el-table-column>
      <el-table-column label="fourStar" prop="fourStar"></el-table-column>
      <el-table-column label="fiveStar" prop="fiveStar"></el-table-column>
      <el-table-column label="createDate">
        <template slot-scope="scope">
          <label>{{parseTime(scope.row.createDate)}}</label>
        </template>
      </el-table-column>
      <!-- <el-table-column label="start" prop="start"></el-table-column>
      <el-table-column label="end" prop="end"></el-table-column> -->
    </el-table>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadRankRes"
    ></el-pagination>
    <CR :visible.sync="showCreate"></CR>
  </el-card>
</template>

<script>
import rankViewApi from "../../api/rank-view-api";
import CR from '../../components/dialog/CreateRank'
export default {
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      rankRes: [],
      showCreate:false,
    };
  },
  components:{
    CR,
  },
  methods: {
    loadRankRes() {
      rankViewApi.findRankView(this.page, this.size).then(res => {
        this.rankRes = res.data.list;
        this.total = res.data.total;
      });
    }
  },
  mounted(){
    this.loadRankRes();
  }
};
</script>

<style>
</style>