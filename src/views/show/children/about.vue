<template>
  <div style="width:100%" class="fyc">
    <el-card class="w-middle">
      <div slot="header">
        <strong>关于该网站</strong>
      </div>
      <div>
        <p>该网站是一个展示爬虫爬取内容的网站。目前只能爬取豆瓣的影评。</p>
        <p>所有内容爬取后会保存，所有内容都来自该网站。图片的信息已经被我处理，并不会直接访问第三方的内容 (然而，想访问也访问不了，除非用代理)。</p>
        <p>过程如下:</p>
        <ul>
          <li>找到某个影评内容</li>
          <li>抓取该网页。</li>
          <li>将抓取到网页的内容进行整理，获取有用的评论内容</li>
          <li>根据整理后的内容进一步抓取评论的具体内容</li>
          <li>将具体内容进行进一步转化</li>
          <li>进行统计，生成视图</li>
        </ul>
        <h4>对影评的文档进行分析</h4>
        <ol>
          <li class="fyc">
            <label class="mt-10">比如说，对于雷米奇遇记来说,要首先分析它的文档结构。</label>
            <img src="../../../assets/imgs/0.png" class="mt-10" />
            <img src="../../../assets/imgs/1.png" class="mt-10" />
            <label class="mt-10">不难发现,评论的标识为date-cid属性,而评分和日期都在span标签中</label>
            <img src="../../../assets/imgs/2.png" class="mt-10" />
            <img src="../../../assets/imgs/3.png" class="mt-10" />
            <label class="mt-10">点击进入评论详情页，对它的详情进一步分析,发现它的内容在class=link-report的标签下</label>
            <img src="../../../assets/imgs/5.png" class="mt-10" />
          </li>
        </ol>
        <h4>流程分析后，我制作了针对该流程的控制台，在控制台可以轻松抓取。</h4>
        <article>
          <p>1.创建影评</p>
          <p>
            <img src="../../../assets/imgs/6.png" class="mt-10" />
          </p>
          <p>2.根据影评的URL进行抓取</p>
          <p>
            <img src="../../../assets/imgs/7.png" class="mt-10" />
          </p>
          <p>3.根据抓取后的文档，生成评论概要</p>
          <p>
            <img src="../../../assets/imgs/9.png" class="mt-10" />
          </p>
          <p>4.根据评论概要抓取评论详情</p>
          <p>
            <img src="../../../assets/imgs/19.png" class="mt-10" />
          </p>
          <p>5.根据抓取后的评论详情提取信息</p>
          <p>
            <img src="../../../assets/imgs/11.png" class="mt-10" />
          </p>
          <p>6.进行评论统计</p>
          <p>
            <img src="../../../assets/imgs/16.png" class="mt-10" />
          </p>
          <p>7.视图已经生成了，可以在前台展示页面看到。</p>
          <p>
            <img src="../../../assets/imgs/18.png" class="mt-10" />
          </p>
        </article>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>