<template>
  <div class="fyc w-full">
    <Bord :curItem="1"></Bord>
    <CommentTable :typeId="Number(typeId)"></CommentTable>
  </div>
</template>

<script>
import Bord from '../../../components/breadcrumb/MovieRankBreadcrumb';
import CommentTable from '../../../components/table/UserCommentsTable'
export default {
  props:['typeId'],
  components:{
    Bord,
    CommentTable,
  }
}
</script>

<style>

</style>