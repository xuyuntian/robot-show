import axios from '../plugins/my-axios'
const path = {
  login:'/login',
}
function login(username,password){
  return axios.post(path.login,{username:username,password:password});
}
export default {
  login:login,
}