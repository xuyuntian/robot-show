import axios from '../plugins/my-axios'
const path = {
  rankView:"/rank/find-all-view",//有关视图展示部分
  commentsList:"/list-comment/find-all", //用户评论列表.
  commentDeail:"/comment-detail/find-by-id",
  deleteView:"/rank/delete-by-id",
  createRank:'/rank/create',//生成统计信息
}
var findRankView = function(page,size){
  return axios.get(path.rankView,{params:{page:page,size:size}});
}
var findCommentList = function(page,size,typeId){
  return axios.get(path.commentsList,{params:{page:page,size:size,typeId:typeId}});
}
var commentContent = function(commentId){
  return axios.get(path.commentDeail,{params:{commentId:commentId}});
}
var deleteRankView = function(id){
  return axios.delete(path.deleteView,{params:{id:id}});
}
function createRank(typeId){
  return axios.post(path.createRank,{typeId:typeId});
}
export default {
  findRankView:findRankView,
  findCommentList:findCommentList,
  findCommentContent:commentContent,
  deleteRankView:deleteRankView,
  createRank:createRank,
};
