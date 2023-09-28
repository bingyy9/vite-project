<!-- 条件渲染 -->
<script>
  export default {
    data() {
      return {
        flag: true,
        type: 'B'
      }
    }
  }
</script>

<template>
  <h3>条件渲染</h3>
  <div v-if="flag">ifDemo测试</div>
  <div v-else>else</div>

  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A,B,C</div>
 
  <div v-show="flag">v-show</div>
</template>

<style>
.appClass{
  color: red;
  font-size: 30px;
}
</style>
