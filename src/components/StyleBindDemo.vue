<script>
export default {
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
      styleObject:{
        color:'red',
        fontSize: "30px",
      }
    }
  },

  methods:{
    
  },
}
</script>

<template>
  <h3>Style绑定 - 增强 - 可以接收对象</h3>
  <div :style="{color: activeColor, fontSize: fontSize + 'px'}">Style绑定</div>
  <div :style="styleObject">Style绑定2</div>
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

