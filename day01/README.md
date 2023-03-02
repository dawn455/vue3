**Vue2响应性原理：**

1.vue2响应式核心Object.defineProperty()作为核心API实现响应性

2.Object.defineProperty()只可以监听**指定对象的指定属性的getter和setter**

3.被监听了getter和setter的属性，我们叫做**该属性具备了响应性**

**缺陷：**由于JavaScript的限制，Vue不能监测数组和对象的变化

1.当为对象新增一个没有在data中声明的属性时,**新增的属性不是响应性的**

2.当数组通过下标的形式新增一个元素时,**新增的元素不是响应性的**


**Vue3响应性原理：**

1. vue3响应式核心Proxy()作为核心API实现响应性

2. Proxy将代理一个对象，得到一个新的对象，同时拥有被代理对象中的所有属性。

3. 当想要修改对象的指定属性时，我们应该使用**代理对象**进行修改

4. **代理对象**的任何一个属性都能触发hander的getter和setter

   Vue3不会再存在新增属性时失去响应性

**Reflect:**

当我们期望监听代理对象的getter和setter时，不应该使用target[key]，因为它在某些时刻下是不可靠的，应该使用Reflect,借助它的的get和set方法，使用receiver作为‘this’

​																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																
