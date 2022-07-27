import  request  from "@/utils/request"

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
//获取商品
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}