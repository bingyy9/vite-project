<script>
export default {
  data() {
    return {
      content: 'content',
    }
  },
  methods: {
    getElementHandle(){
      console.log(this.$refs.container)
      //innerHTML是原生JS的属性
      this.$refs.container.innerHTML = "update content"
      console.log("DOM refer get username input value: " + this.$refs.username.value)
    }
  }
}
</script>

<template>
  <h3>
    模板引用. 本质就是DOM操作. 
    内容改变: {{ 模板语法 }}
    属性改变: v-bind:指令
    事件: v-on:click

    Vue为你抽象了大部分DOM的直接操作，在某些情况下，仍然需要直接访问底层DOM元素。ref attribute

    innerHTML是原生JS的属性。通过获取DOM节点，原生JS的所有操作都可以。
    如果没有特别需求，不要操作DOM。性能不好。
  </h3>
  <div ref="container" class="container">{{ content }}</div>
  <button @click="getElementHandle">获取DOM元素</button>
  <input type="text" ref="username">

</template>

