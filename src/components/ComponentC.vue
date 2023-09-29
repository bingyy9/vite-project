<script>

export default {
  data() {
    return {
      banner:[]
    }
  },
  beforeUnmount() {
    console.log("ComponentC beforeUnmount")
  },
  unmounted() {
    console.log("ComponentC unmounted")
  },
}
</script>

<template>
  <h3>
    动态组件 ComponentC
  </h3>
</template>

