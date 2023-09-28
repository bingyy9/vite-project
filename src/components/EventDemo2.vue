<!-- Event Demo2 -->
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
    addCount(e) {
      this.count++
      console.log("click addCount():" + this.count)
      console.log(e)
      console.log(e.target)
      e.target.innerHTML = "ADD" + this.count
    },

    addCount2(msg) {
      console.log("msg: " + msg)
    },

    print(msg) {
      console.log("click item: " + msg)
    },

    print(msg, e) {
      console.log("click item: " + msg + "e: " + e)
    }
  }
}
</script>

<template>
  <h3>事件传递参数</h3>
  <button @click="addCount">Add</button>
  <p>count = {{ count }}</p>
  <button @click="addCount2('hello')">ClickWithParams</button>
  <p @click="print(item)" v-for="(item, index) of names" :key="index">{{ item }}</p>
  <p @click="print(item, $event)" v-for="(item, index) of names" :key="index">{{ item }}</p>
</template>

