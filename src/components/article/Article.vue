<template>
  <div class="w-middle">
    <div>
      <h3>标题: {{this.title}}</h3>
      <el-row :gutter="24" style="margin-left:0;margin-right:0">
        <label style="font-family: cursive;">作者:{{row.username}}</label>
        <label id="lable-rate">评分:{{row.star}}</label>
        <label id="lable-date">评论时间: {{dateString(row.commentDate)}}</label>
      </el-row>
    </div>
    <article ref="article" style="font-family: cursive;font-size: 1.45em;"></article>
  </div>
</template>

<script>
export default {
  props: {
    // commentId:Number,
    title: String,
    conetent: String,
    row: Object
  },
  watch: {
    conetent: function() {
      this.loadContent();
    }
  },
  methods: {
    loadContent() {
      // this.$refs.article.innerHTML = this.conetent;
      // this.$refs.article.rem
      var markup = this.conetent;
      var parser = new DOMParser();
      var el = parser.parseFromString(markup, "text/html");
      // window.console.log();
      // var div = document.createElement("div");
      // div.innerHTML = this.conetent.trim();
      for (let node of el.body.childNodes) {
        if (node.nodeName !== "DIV") {
          this.$refs.article.appendChild(node);
          // window.console.log(node.nodeName);
        } else {
          // window.console.log(node.childNodes[1].childNodes[1].src);
          var nodex = document.createElement("div");
          nodex.innerHTML = `<strong style="color:#acc3f7">该图片不支持跨域访问 原图片地址为:${node.childNodes[1].childNodes[1].src}</strong>`;
          this.$refs.article.appendChild(nodex);
        }
      }
      // div.childNodes
      // window.console.log(div.childNodes[29].nodeName);
    }
  },
  mounted() {
    // this.loadContent();
  }
};
</script>

<style>
#lable-rate {
  font-family: cursive;
  margin-left: 50px;
  font-size: 1.1em;
  color: #d86580;
}
#lable-date {
  margin-left: 50px;
  font-family: cursive;
  font-size: 1.1em;
}
</style>