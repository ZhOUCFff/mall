import axios from 'axios'

export function request1(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  return instance(config)
}

export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  return instance(config)
}

export function request3(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data.result
  }, err => {
  })
  //发送真正的网络请求
  return instance(config)
}

export function request4(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
  })
  //发送真正的网络请求
  return instance(config)
}