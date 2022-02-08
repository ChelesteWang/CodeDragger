import axios from 'axios'
import { v4 } from 'uuid'
import { config } from './config'

const instance = axios.create()
instance.defaults.baseURL = config.baseURL
// 请求拦截器
instance.interceptors.request.use((config: any) => {
  const localSessionKey = `local-session`
  if (!localStorage.getItem(localSessionKey)) {
    // 如果本地没有 token，则随机生成
    localStorage.setItem(localSessionKey, v4())
  }
  //加入验证请求头
  config.headers = {
    'x-tt-session-v2': localStorage.getItem(localSessionKey) as string
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  (response: any) => {
    //这里写响应拦截内容

    return response
  },
  // 服务器状态码不是200的情况
  (error) => {
    return error
  }
)

export default instance
