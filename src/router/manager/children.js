var prefix = '/manager'
const children = [
  {
    path: prefix+'/movie-type',
    name:'movieType',
    props:true,
    component:()=>import('../../views/manager/children/movie-type.vue'),
  },
]
export default children;