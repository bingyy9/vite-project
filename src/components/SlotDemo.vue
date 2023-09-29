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
    插槽基础知识：
    1. 组件和组件直接传递的不在是props了，而是HTML模板内容,通过slot
    2. 渲染作用域：插槽内容可以访问到父组件的作用域
    3. 默认内容 “《slot》 插槽默认值”
    4. 具名插槽 template v-slot:header  or #slotName
    5. 插槽的内容既包含父组件域内数据，也包含子组件域内数据。具体做法需要先把子组件内的数据通过props传递给父组件，父组件组合自己的数据，在放入slot
    6. 具名插槽传递子组件数据
  </h3>
  <slot></slot>
  <slot name="header">插槽默认值</slot>
  <hr>
  <slot name="main">插槽默认值</slot>
  <slot name="main2"></slot>
  <slot name="slot2" :msg="childMessage"></slot>
</template>

