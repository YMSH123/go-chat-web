import axios from 'axios'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://127.0.0.1:54264',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  //配置无需token的路由组
  const urls = ['/login', '/register', '/sendCode']
  const url = config.url
  if (!urls.includes(url)) {
    const userStore = useUserStore()
    const token = userStore.userInfo.user.Token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})


export default http