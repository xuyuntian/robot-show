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
]
export default children;