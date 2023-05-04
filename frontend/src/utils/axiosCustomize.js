import axios from "axios";
import NProgress from 'nprogress'

NProgress.configure({
    showSpinner:false,
    trickleSpeed:100
})
const instance=axios.create({
    baseURL='http://localhost:5000/'
})

instance.interceptors.request.use(function(config){
    NProgress.start();
    return config;
},
function(e){
    return Promise.reject(e)
}
)

instance.interceptors.request.use(function(response){
    NProgress.done();
    return response && response.data?response.data:response;
},
function(e){
    return e && e.response ? e.response.data : Promise.reject(e)
}
)
export default instance