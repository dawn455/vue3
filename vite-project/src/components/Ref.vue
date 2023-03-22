<template>
  <div>
    <div>ref {{ ageRef }}</div>
    <div div>ref {{ hz.age }}</div>
    <p ref="pRef">123</p>
  </div>

</template>

<script setup >
import { onMounted, reactive, ref } from 'vue';
// 生成值类型的响应式数据,通过.value修改值
// ref也可以获取dom
// reactive 是 Vue3 中提供的实现响应式数据的方法。

// reactive做对象的响应式，ref做值类型响应式
// setup中返回toRefs(state), 或者toRef(state, 'xxx')---(这样就能够在template中不使用state.xxx)
// ref的变量命名都用xxxRef
// 合成函数返回响应式对象时，使用toRefs

// 值类型不具备proxy
// setup()、computed()...都可能返回值类型,如果vue不定义ref,用户需要响应式的值类型的时候就会通过其他方式(reactive/toRef, reactive/toRefs)自造ref,就会造成代码更混乱

// toRef
// 针对一个响应式对象的prop
// 创建一个ref，具有响应式
// 两者保持引用关系

// toRefs
// 将一个响应式对象转为普通对象
// 对象的每一个属性都是对应的ref
// 两者保持引用关系
const ageRef = ref(18)
const pRef = ref(null)

const hz = reactive({
  age: 12
})

setInterval(() => {
  ageRef.value = 1
  hz.age = 1
},1000)

onMounted(()=> {
  console.log(pRef.value);
})
</script>

<style scoped>

</style>
