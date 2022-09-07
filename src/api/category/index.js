import request from "@/utils/request";


export function getCategory() {
  return request({
    url:'/category',
    
  })
}
//子分类
export function getSubcategory(maitKey) {
  return request({
    url:"/subcategory",
    params: {
      maitKey
    }
  })
}
//分类详情
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}