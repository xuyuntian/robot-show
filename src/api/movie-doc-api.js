import axios from '../plugins/my-axios'
const path = {
    docs:"/my-document/find-all",
};
function findAllDocs(page,size){
    return axios.get(path.docs,{params:{page:page,size:size}});
}
export default {
    findAllDocs:findAllDocs,
}