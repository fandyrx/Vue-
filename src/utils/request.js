import axios from 'axios';


export default function request(config){
     // 1.创建一个axios实例
     const service = axios.create({
      baseURL:'',
      timeout: 5000
})
// 2.axios 拦截器
// 2.1 请求拦截
service.interceptors.request.use((config)=>{
      return config
},err=>{
      console.log(err); 
})

// 2.2响应拦截
service.interceptors.response.use((res)=>{
      return res.data 
},err=>{
      console.log(err,'response err');
})

//3.发送网络请求
 return service(config)  

}
