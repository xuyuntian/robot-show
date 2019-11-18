<template>
  <div>
    <el-card class="w-middle">
      <div slot="header">
        <el-row>
          <el-button type="primary" @click="showPc = true">转换评论概况</el-button>
          <el-button type="primary" @click="showPd = true">转换评论详情</el-button>
        </el-row>
      </div>
      <p>
        如果存在评论的概要文档才可以进行概况转换。(一定要确保只被操作一次)
      </p>
      <p>
        只有存在评论详情的内容才可以进行转换。转换过的文档不会再次被转换。
      </p>
    </el-card>
    <PC :visible.sync="showPc"></PC>
    <PD :visible.sync="showPd"></PD>
  </div>
</template>

<script>
import PC from "../../../components/dialog/ParseComment";
import PD from "../../../components/dialog/ParseDetail";
export default {
  data() {
    return {
      showPc: false,
      showPd: false
    };
  },
  components: {
    PC,
    PD
  }
};
</script>

<style>
</style>