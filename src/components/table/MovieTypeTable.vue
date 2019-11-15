<template>
  <el-card class="w-middle">    
    <el-button type="primary" @click="add">添加类别</el-button>
    <el-table :data="typeItems">
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="名称" prop="title"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <label v-if="scope.row.isShow===0">隐藏</label>
          <label v-else>显示</label>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row.id,scope.row.title)">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
          <el-button size="mini" @click="chageStatus(scope.row.id,scope.row.isShow)">切换状态</el-button>
        </template>
      </el-table-column>
    </el-table>
    <MyTypeEditor :id="editId" :title="editTitle" :flush="loadTypeItems" :visible.sync="showEdit"></MyTypeEditor>
    <MyTypeEditor :title="addTitle" :flush="loadTypeItems" :visible.sync="showAdd"></MyTypeEditor>
    <el-pagination
      :total="total"
      :current-page.sync="page"
      :page-size="size"
      @current-change="loadTypeItems"
    ></el-pagination>
    </el-card>
</template>

<script>
import moveTypeApi from "../../api/movie-type-api";
import MyTypeEditor from "../../components/dialog/MyTypeEditor"
export default {
  data() {
    return {
      page: 1,
      size: 16,
      total: 0,
      addTitle:'',
      editTitle:'',
      editId:0,
      showAdd:false,
      showEdit:false,
      showDelete:false,
      typeItems: []
    };
  },
  components:{
    MyTypeEditor
  },
  methods: {
    loadTypeItems() {
      moveTypeApi.findAll(this.page, this.size).then(res => {
        this.typeItems = res.data.list;
        this.total = res.data.total;
      });
    },
    chageStatus(id,isShow){
      var nextStaus = 0;
      if(isShow ===0){
        nextStaus = 1;
      }
      moveTypeApi.changeShow(id,nextStaus).then(()=>{
        this.loadTypeItems();
      })
    },
    add(){
      this.addTitle = '',
      this.showAdd = true;
    },
    edit(id,title){
      this.showEdit = true;
      this.editId = id;
      this.editTitle = title;
    }
  },
  mounted(){
    this.loadTypeItems();
  }
};
</script>

<style>
</style>