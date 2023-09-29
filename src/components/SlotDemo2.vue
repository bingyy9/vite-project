<script>

export default {
  data() {
    return {
      childMessage: "子组件域内数据"
    }
  },
  components:{
    
  }
 
}
</script>

<template>
  <h3>
    插槽基础知识2：
    5. 插槽的内容既包含父组件域内数据，也包含子组件域内数据。具体做法需要先把子组件内的数据通过props传递给父组件，父组件组合自己的数据，在放入slot
    6. 具名插槽传递数据
  </h3>
  <!-- 插槽的内容既包含父组件域内数据，也包含子组件域内数据。具体做法需要先把子组件内的数据通过props传递给父组件，父组件组合自己的数据，在放入slot -->
  <slot :msg="childMessage"></slot>
</template>

