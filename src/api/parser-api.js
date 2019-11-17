import axios from '../plugins/my-axios'
const path = {
    parseComment:'/comment/parse-comment',
    parseDetail:'/comment/parse-comment-detail',
}
/**
 * {
  "limit": 0,
  "typeId": 0
}
 */
function parseComment(typeId,limit){
    return axios.post(path.parseComment,{typeId:typeId,limit:limit});
}
function parseDetail(typeId,limit){
    return axios.post(path.parseDetail,{typeId:typeId,limit:limit});
}

export default {
    parseComment:parseComment,
    parseDetail:parseDetail,
}