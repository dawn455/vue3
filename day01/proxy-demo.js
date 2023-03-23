const data = {
  name:'qwe',
  age:18
}

const proxyData = new Proxy(data,{
  get(target, key, receiver) {
    const result = Reflect.get(target,key,receiver)
    console.log('get',key);
    return result
  },
  set(target,key,val,receiver) {
    const result = Reflect.set(target,key,val,receiver)
    console.log('set',key,val);
    console.log('result',result);
    return result //是否设置成功
  },
  deleteProperty(target,key) {
    const result = Reflect.deleteProperty(target,key)
    console.log('delete property', key);
    console.log('result', result);//true
    return result
  }
})
Object.defineProperty
// Proxy能规避Object.defineProperty的问题
// 但是无法兼容所有浏览器,无法polyfill