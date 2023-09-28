<!-- Event Demo -->
<script>
export default {
  data() {
    return {
      count: 0,
    }
  }
}
</script>

<template>
  <h3>Event Demo</h3>
  <button v-on:click="count++">Add</button>
  <button @click="count++">Add</button>
  <p>count = {{ count }}</p>
</template>

