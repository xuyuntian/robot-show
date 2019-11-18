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
    path:'/about',
    name:'about',
    component:()=>import('../../views/show/children/about.vue'),
  },
]
export default children;