import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { ToastPlugin  } from 'vux'
Vue.use(ToastPlugin)

//请求拦截
axios.interceptors.request.use(
    config => {
        console.log(config.data)
      if(config.method === "post")  {
          config.data = qs.stringify(config.data)
      }
      return config;
    }
)
//响应拦截
axios.interceptors.response.use(
    res => {
        if(res.data.code == 1){
            Vue.$vux.toast.show({
                text: res.data.msg,
                type:'cancel'
            }) 
        }
        return res.data
    },
    error => {
        let errMsg = '网路错误'
        switch(error.response.status){
            case 400:
                errMsg = '网路错误'
                break;
            case 403:
                errMsg = '拒绝访问'
                break;
            case 404:
                errMsg = '请求地址未找到'
                break;
            case 408:
                errMsg = '请求超时'
                break;
            case 500:
                errMsg = '服务器内部错误'
                break;
            case 501:
                errMsg = '服务未实现'
                break
            case 502:
                errMsg = '网关错误'
                break
            case 503:
                errMsg = '服务不可用'
                break
            case 504:
                errMsg = '网关超时'
                break
            case 505:
                errMsg = 'HTTP版本不受支持'
                break   
        }
        Vue.$vux.toast.show({
            text: errMsg,
            type:'cancel'
        })
        return Promise.reject(error)
    }
)
export default {
    install: function(Vue, Option) {
        Object.defineProperty(Vue.prototype, "$http", { value: axios });
    }
};