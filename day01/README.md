# Vue的响应性原理

## **Vue2响应性原理：**

1.vue2响应式核心Object.defineProperty()作为核心API实现响应性

2.Object.defineProperty()只可以监听**指定对象的指定属性的getter和setter**

3.被监听了getter和setter的属性，我们叫做**该属性具备了响应性**

**缺陷：**由于JavaScript的限制，Vue不能监测数组和对象的变化

1.当为对象新增一个没有在data中声明的属性时,**新增的属性不是响应性的**

2.当数组通过下标的形式新增一个元素时,**新增的元素不是响应性的**

## **Vue3响应性原理：**

1. vue3响应式核心Proxy()作为核心API实现响应性

2. Proxy将代理一个对象，得到一个新的对象，同时拥有被代理对象中的所有属性。

3. 当想要修改对象的指定属性时，我们应该使用**代理对象**进行修改

4. **代理对象**的任何一个属性都能触发hander的getter和setter

   Vue3不会再存在新增属性时失去响应性

**Reflect:**

当我们期望监听代理对象的getter和setter时，不应该使用target[key]，因为它在某些时刻下是不可靠的，应该使用Reflect,借助它的的get和set方法，使用receiver作为‘this’

# mixin

## **1.mixin是什么**

`Mixin`类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂

**Vue中的mixin**

官方定义：

`mixin`（混入），提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。

本质其实就是一个`js`对象，它可以包含我们组件中任意功能选项，如`data`、`components`、`methods`、`created`、`computed`等等

在`Vue`中我们可以**局部混入**跟**全局混入**

### 注意事项：

当组件存在与`mixin`对象相同的选项的时候，进行递归合并的时候组件的选项会覆盖`mixin`的选项

但是如果相同选项为生命周期钩子的时候，会合并成一个数组，先执行`mixin`的钩子，再执行组件的钩子

## 2.使用场景

定义一个`tooltip`提示框，内部通过`isShowing`来控制显示

# 前端路由

## 1.hash模式

- hash变化会触发网页跳转,即浏览器的前进后退
- hash变化不会刷新页面,SPA必须的特点
- hash永远不会提交到server端
- window.onhashchange

## 2.H5 history模式

- 用url规范的路由，跳转不刷新页面
- history.pushState
- window.onpropstate		
																													
# Vue3为什么比Vue2快

#### 1.  Proxy响应式
#### 2.  PatchFlag
- 编译模板时，动态节点做标记
- 标记，分为不同的类型，入TEXT PROPS
- diff算法时，可以区分静态节点，以及不同类型的动态节点
#### 3.  hoistStatic

- 将静态节点的定义，提升到父级作用域，缓存起来
- 多个相邻的静态节点，会被合并起来
- 典型的拿空间换时间的优化策略

#### 4.  cacheHandler

缓存事件

#### 5.  SSR优化
#### 6.  tree-shanking

编译时，根据不同的情况，引入不同的API



# Vite

## Vite是什么

- 一个前端打包工具，Vue作者发起的项目
- 借助Vue的影响力，发展较快，和webpack竞争
- 优势：开发环境下无需打包，启动更快

## Vite为什么启动快？

- 开发环境使用ES6 Module，无需打包 ---非常快
- 生产环境使用rollup，并不会快很多



# Composition API和React Hooks对比

- 前者setup只会被调用一次，而后者函数会被多次调用
- 前者无需useMemo useCallback，因为setup只调用一次
- 前者无需顾虑调用顺序，而后者需要保证hooks的顺序一致
