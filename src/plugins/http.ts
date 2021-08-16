import fly from 'flyio'

fly.config={
    baseURL:'/',
    timeout:10*10000,
    parseJson:true,
    withCredentials:false,
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
    }
}

fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    request.headers['X-Tag'] = 'flyio'
    const auth=true
    if(auth){
        return Promise.resolve(request)
    }
    else{
        return Promise.resolve('没有请求权限')
    }
  })
  
  // respone拦截器
  fly.interceptors.response.use(
    (response) => {
      //只将请求结果的data字段返回
      return response.data
    },
    (err) => {
      //发生网络错误后会走到这里
      return Promise.resolve(err, '请求失败！')
    }
  )
  
  export default fly