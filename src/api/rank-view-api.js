import axios from '../plugins/my-axios'
const path = {
  rankView:"/rank/find-all-view",//有关视图展示部分
}
var findRankView = function(page,size){
  return axios.get(path.rankView,{params:{page:page,size:size}});
}
export default {
  findRankView:findRankView,
};
