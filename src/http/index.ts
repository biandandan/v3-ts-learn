import axios from 'axios'
import { ElMessage } from 'element-plus'

// http状态码
enum MSGS {
  'OK' = 200,
  'Created',
  'Accepted',
  'Bad Request' = 400, // 语义有误，当前请求无法被服务器理解。
  'Unauthorized',
}

const $http = axios.create({
  baseURL: 'https://mock.apifox.cn/m1/2274064-0-default',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    apifoxToken: 'ybg8JdlGvmn7TkTkobnjSVMsNiMRmhth',
  },
})

$http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || ''
  if (!token) {
  }
  return config
})
$http.interceptors.response.use(
  (res) => {
    const code: number = res.data.code
    if (code !== 200) {
      ElMessage.error(MSGS[code])
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    console.warn(err, 'err')
  }
)

export default $http
