

<template>
<Ref @send1="getData"/>
</template>

<script setup>
import Ref from './components/Ref.vue';
const getData = (data) => {
  console.log(data);
}

</script>

<style scoped>

</style>
