<script>
export default {
  data() {
    return {
      count: 0,
      names: ['name1', 'name2', 'name3']
    }
  },

  // 函数
  methods:{
    //VUE中的event对象就是原生JS中的event对象
    addListByPush(e) {
      this.names.push("push NewName")
    },
    addListByConcat(e) {
      this.names.concat("concat NewName")
      // 如果要更新UI
      // this.names = this.names.concat("concat NewName")
    },
  }
}
</script>

<template>
  <h3>数组变化监听</h3>
  <ul>
    <li v-for="(item, index) of names" :key="index">{{ item }}</li>
  </ul>
  <!-- 变更方法。UI会自动更新 -->
  <button @click="addListByPush">Push添加数据</button>
  <!-- 替换一个数组。不会引起UI自动更新 -->
  <button @click="addListByConcat">Concat添加数据</button>
</template>

