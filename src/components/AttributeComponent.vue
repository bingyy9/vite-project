<script>
export default {
  data() {
    return {

    }
  },
  // 禁止继承属性
  // inheritAttrs: false 
}

</script>

<template>
  <!-- 仅仅唯一根元素，才能透传属性 -->
  <h3>透传属性</h3>
</template>

<style>
.attr-container{
  color: red;
}
</style>

