<script>
import { provide } from 'vue';


export default {
  data() {
    return {
     
    }
  },
  inject:["provideData", 'globalData1']
}
</script>

<template>
  <h3>
    依赖注入 
    1. 通过provide， inject
    注意：provide和inject只能由上往下传递
    2. 除了一个组件中提供依赖，还可以在整个应用层面提供依赖 main.js app.provide('label', 'value'), inject
  </h3>
  <p>{{ provideData }}</p>
  <p>{{ globalData1 }}</p>
</template>

