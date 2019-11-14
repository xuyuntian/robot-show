const children = [
  {
    path:'/rank-content/:commentId',
    name:'rankContent',
    props:true,
    component:()=>import('../../views/show/children/rank-content.vue'),
  },
  {
    path:'/rank-list/:typeId',
    name:'rankList',
    props:true,
    component:()=>import('../../views/show/children/rank-list.vue'),
  },
  {
    path:'/movie-rank',
    name:'movieRank',
    component:()=>import('../../views/show/children/movie-rank.vue'),
  },
  {
    path:'/book-rank',
    name:'bookRank',
    component:()=>import('../../views/show/children/book-rank.vue'),
  },
]
export default children;