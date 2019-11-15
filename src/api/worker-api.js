import axios from '../plugins/my-axios'
const path = {
  doc: '/robot/start-movie-documents',
  detail: '/robot/start-comment-detail'
}
/**
 * {
  "limit": 0,
  "start": 0,
  "type": 0,
  "url": "string"
}
 */
function getDoc(url, type, start, limit) {
  var obj = {
    url: url,
    type: type,
    start: start,
    limit: limit
  };
  return axios.post(path.doc, obj);
}
/**
 * {
  "typeId": 0,
  "url": "string"
}
 */
function getDetail(typeId, url) {
  var obj = {
    typeId: typeId,
    url: url,
  }
  return axios.post(path.detail, obj);
}
function getCurrentUrls(){
  return axios.get('/robot/url-list');
}
export default {
  getDoc:getDoc,
  getDetail:getDetail,
  getCurrentUrls:getCurrentUrls,
}