/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

const request= axios.create({
    baseURL:'http://realworld.api.fed.lagounews.com'
})
//请求拦截器
// Add a request interceptor
// 任何请求都要经过请求拦截器
// 我们可以在请求拦截中做一些公共的业务处理，例如统一处置Token
// request.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // 请求会经过这里
//     console.log('test')
//     config.headers.Authorization=`Token 用户token`
//     // 返回config请求配置对象
//     return config;
//   }, function (error) {
//     //   如果请求失败（此时请求还没有发出去）
//     // Do something with request error
//     return Promise.reject(error);
//   });

export default request