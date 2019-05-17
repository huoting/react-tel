import axios from 'axios'

// "proxy": {
//   "/api": {
//     "target": "http://192.168.1.6",
//     "ws": true
//   }
// },
const service = axios.create({
    // baseURL: 'http://192.168.1.6', // api的base_url
    timeout: 15000 // request timeout
})
service.defaults.withCredentials = true

// 发送时
service.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

// 响应式
service.interceptors.response.use(response => {
    // 开始
    if (response.status === 200) {
        return response.data
    } else {
        return Promise.reject(response)
    }
}, err => {
    return Promise.reject(err.response)
})

export default service