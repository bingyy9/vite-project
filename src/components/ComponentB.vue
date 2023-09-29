<script>

export default {
  data() {
    return {
      banner:[]
    }
  },
  beforeUnmount() {
    console.log("ComponentB beforeUnmount")
  },
  unmounted() {
    console.log("ComponentB unmounted")
  },
}
</script>

<template>
  <h3>
    动态组件 ComponentA
  </h3>
</template>

