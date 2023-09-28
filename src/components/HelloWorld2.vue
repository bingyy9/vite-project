<!-- 属性的绑定 -->
<script>
  export default {
    data() {
      return {
        msg: "active",
        dynamicId: "appID",
        appClass: "appClass",
        dynamicTitle: null,
        dynamicTitleUndefined: undefined,
        isButtonDisabled:true,
        objectOfAttrs: {
          id: 'container',
          class: 'wrapper'
        }
      }
    }
  }
</script>

<!-- 响应式的绑定attribute x-bind指令 -->
<!-- {{ }} 不能在HTML attribute中使用 -->
<template>
  <div v-bind:class="msg">测试</div>
  <div v-bind:id="dynamicId" v-bind:class="appClass">dynamicId</div>
  <div class="{{ msg }}">错误测试</div>
  <div v-bind:id="dynamicId" v-bind:class="appClass" v-bind:title="dynamicTitle">绑定的属性为null, 这个属性会被动态移除</div>
  <div v-bind:id="dynamicId" v-bind:class="appClass" v-bind:title="dynamicTitleUndefined">绑定的属性为undefined, 这个属性会被动态移除</div>
  <!-- v-bind非常常用，简写的方案 -->
  <div :id="dynamicId" :class="appClass">v-bind:简写方案</div>
  <button :id="dynamicId" :disabled="isButtonDisabled">Boolean attribute</button>
  <!-- 动态绑定多个值 --> 
  <div v-bind="objectOfAttrs">动态绑定多个值测试，只需要v-bind</div>
</template>

<style>
.appClass{
  color: red;
  font-size: 30px;
}
</style>
