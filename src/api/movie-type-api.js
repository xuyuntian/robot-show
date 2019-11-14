import axios from '../plugins/my-axios'
const path = {
  add: '/movie-type/add',
  changeShow: '/movie-type/change-status',
  findAll:"/movie-type/find-all",
  update:'/movie-type/update',
}
var add = function (title) {
  return axios.post(path.add, { title: title });
}
var changeShow = function (id, status) {
  return axios.put(this.changeShow, { id: id, status: status });
}
var findAll = function(page,size){
  return axios.get(path.findAll,{params:{page:page,size:size}});
}
var update = function(id,title){
  return axios.put(path.update,{id:id,title:title});
}
export default {
  add:add,
  changeShow:changeShow,
  findAll:findAll,
  update:update
}