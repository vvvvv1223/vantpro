import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001',
    timeout: 5000
})

// 请求拦截【instance.interceptors.request.use(cb, cb)】
instance.interceptors.request.use(config => {
    // config.headers.token = "xxxx"
    return config;
}, err => {
    return Promise.reject(err)
})

// 响应拦截【instance.interceptors.response.use(cb, cb)】
instance.interceptors.response.use(result => {
    return result.data;
}, err => {
    return Promise.reject(err)
})

export default instance;