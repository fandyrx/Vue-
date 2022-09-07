// 封装防抖函数   复用防止多次重复调用函数
export function debounce(func,delay){
  let timer = null;
  //设置空计时器 ，当计时器在运行，清除计时器 重新开启 
  // 要放在return 外，不然一直重置等于没有
  return function (...args) {
   
    if(timer) clearTimeout(timer);
    //计时器开启
      timer = setTimeout(() => {
        //外部传入函数使用 apply 改变this指向
           func.apply(this,args)
      }, delay);
  }
}
