var prefix = '/manager'
const children = [
  {
    path: prefix+'/movie-type',
    name:'movieType',
    props:true,
    component:()=>import('../../views/manager/children/movie-type.vue'),
  },
  {
    path: prefix+'/movie-rank',
    name:'managerMovieRank',
    props:true,
    component:()=>import('../../views/manager/children/movie-rank.vue'),
  },
  {
    path: prefix+'/task',
    name:'task',
    props:true,
    component:()=>import('../../views/manager/children/task.vue'),
  },
  {
    path: prefix+'/doc-list',
    name:'docList',
    props:true,
    component:()=>import('../../views/manager/children/doc-list.vue'),
  },
]
export default children;