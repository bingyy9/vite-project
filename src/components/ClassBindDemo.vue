<script>
export default {
  data() {
    return {
      myClass: "demo",
      isActive: false,
      hasError: true,
      classObject:{
        'active': true,
        'text-danger':true,
      },
      arrActive:"active",
      arrHasError: true,
    }
  },

  methods:{
    
  },
}
</script>

<template>
  <h3>Class样式绑定 - 增强 - 可以接收对象</h3>
  <!-- CSS class列表 -->
  <p :class="{'active': isActive, 'test-danger': hasError}">Class绑定</p>
  <h3>Class样式绑定 - 多个对象的绑定方式</h3>
  <p :class="classObject">Class绑定 多个对象的绑定方式</p>
  <h3>Class样式绑定 - 绑定数组</h3>
  <p :class="[arrActive,arrHasError]">Class绑定数组</p>
  <h3>Class样式绑定 - 三元表达式</h3>
  <p :class="[isActive? 'active':'']">Class绑定三元表达式</p>
  <h3>Class样式绑定 - 数组和对象一起使用</h3>
  <p :class="[isActive? 'active':'', {'text-danger': hasError}]">Class绑定 数组和对象一起使用</p>
</template>

<style>
.active{
  color: red;
  font-size: 30px;
}
.test-danger{
  color: green;
}
</style>

