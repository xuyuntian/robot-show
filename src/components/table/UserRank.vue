<template>
  <div>
    <el-table :data="ranks">
      <el-table-column label="编号"></el-table-column>
      <el-table-column label="用户名"></el-table-column>
      <el-table-column label="评分"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary">
            {{scope.row.id}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ranks:[
        {
          id:1,

        }
      ]
    }
  }
}
</script>

<style>

</style>