<template>
  <div>
  </div>
</template>

<script>
//用于控制弹框的打开与关闭。子组件不要有与父类名称一致的属性。
export default {
  props:{
    visible:Boolean,
  },
  data(){
    return {
      show:false,
    }
  },
  watch:{
    visible:function(val){
      this.show = val;
    },
    show:function(val){
      this.$emit("update:visible",val);
    }
  }
}
</script>

<style>

</style>