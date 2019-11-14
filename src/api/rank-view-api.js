import axios from '../plugins/my-axios'
const path = {
  rankView:"/rank/find-all-view",//有关视图展示部分
  commentsList:"/list-comment/find-all", //用户评论列表.
  commentDeail:"/comment-detail/find-by-id"
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
export default {
  findRankView:findRankView,
  findCommentList:findCommentList,
  findCommentContent:commentContent,
};
