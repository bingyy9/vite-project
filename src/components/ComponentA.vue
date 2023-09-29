<script>

export default {
  data() {
    return {
      banner:[]
    }
  },
  beforeUnmount() {
    console.log("ComponentA beforeUnmount")
  },
  unmounted() {
    console.log("ComponentA unmounted")
  },
}
</script>

<template>
  <h3>
    动态组件 ComponentB
  </h3>
</template>

