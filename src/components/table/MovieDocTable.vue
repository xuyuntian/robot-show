<template>
  <div>
    <el-table :data="docs">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="url" prop="url" width="600px"></el-table-column>
      <el-table-column label="typeId" prop="typeId"></el-table-column>
      <el-table-column label="createDate">
          <template slot-scope="scope">
              {{parseTime(scope.row.createDate)}}
          </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadDocs"
    ></el-pagination>
  </div>
</template>

<script>
import docApi from '../../api/movie-doc-api';
export default {
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      docs: []
    };
  },
  methods: {
    loadDocs() {
        docApi.findAllDocs(this.page,this.size).then(res => {
            this.docs = res.data.list;
            this.total = res.data.total;
        })
    }
  },
  mounted(){
      this.loadDocs();
  }
};
</script>

<style>
</style>