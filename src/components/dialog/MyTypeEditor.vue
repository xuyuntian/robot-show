<template>
  <el-dialog :title='id?"修改类型名称":"添加类型"' :visible.sync="show" width="450px">
    <el-row v-if="id">
      <el-col :span="12"><label>编号</label></el-col>
      <el-col :span="12">
        <el-input v-model="tempId" :disabled="true"></el-input>
      </el-col>
    </el-row>
    <el-row class="mt-10">
      <el-col :span="12"><label>名称</label> </el-col>
      <el-col :span="12">
        <el-input v-model="tempTitle"></el-input>
      </el-col>
    </el-row>
    <div slot="footer">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog";
import movieTypeApi from "../../api/movie-type-api"
export default {
  extends:BaseDialog,
  props:{
    id:Number,
    title:String,
    flush:Function,//用于刷新
  },
  data(){
    return {
      tempTitle:'',
      tempId:0,
    }
  },
  watch:{
    id:function(val){
      this.tempId = val;
    },
    title:function(val){
      this.tempTitle = val;
    }
  },
  methods:{
    add(){
      movieTypeApi.add(this.tempTitle).then(()=>{
        this.flush();
      })
    },
    update(){
      movieTypeApi.update(this.tempId,this.tempTitle).then(()=>{
        this.flush();
      })
    },
    save(){
      this.show= false;
      if(this.id){
        this.update();
      }else{
        this.add();
      }
    }
  }
}
</script>

<style>

</style>