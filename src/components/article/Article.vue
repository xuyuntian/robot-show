<template>
  <div>
    <article ref="article">

    </article>
  </div>
</template>

<script>
export default {
  props:{
    conetent:String,
  },
  mounted(){
    let str = "<p>假如你现在想看一部日本电影，又觉得大师们的片子太厚重，不易接近，新电影又拿不准看个啥能轻松娱乐赏心悦目又不失逼格，那么电影红花会就给你指条明路:《小森林夏秋篇》！就是一部不看不知道，一看真奇妙的佳片，去年全世界最好看的电影之一，不信？看完无感您回来插了战台烽！</p>";
    let conetent = "";
    for(let i = 0; i < 10 ;i++){
      conetent += str;
    }
    this.$refs.article.innerHTML = conetent;
  }
}
</script>

<style>

</style>