<template>
  <div class="w-full fyc">
    <Bread :curItem="2"></Bread>
    <Article :conetent="content" :row="row" :title="title"></Article>
  </div>
</template>

<script>
import RankApi from '../../../api/rank-view-api'
import Article from "../../../components/article/Article"
import Bread from "../../../components/breadcrumb/MovieRankBreadcrumb"
export default {
  props:{
    commentId:Number,
    row:Object,
  },
  components:{
    Article,
    Bread
  },
  data(){
    return {
      content:'',
      title:""
    }
  },
  //有备无患
  // watch:{
  //   commentId:function(){
  //     this.loadContent();
  //   }
  // },
  methods:{
    loadContent(){
      RankApi.findCommentContent(this.commentId).then(res => {
        this.content = res.data.content;
        this.title = res.data.title;
      });
    }
  },
  mounted(){
    this.loadContent();
  }
}
</script>

<style>

</style>