<!-- Event Demo3 事件修饰符 -->
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
    },

    clickHandler(e){
      // e.preventDefault();
      console.log("Clicked.");
    },

    clickDiv(){
      console.log("clickDiv.");
    },

    clickP(e){
      // e.stop
      console.log("clickP.");
    },
  }
}
</script>

<template>
  <h3>事件修饰符</h3>
  <a @click.prevent="clickHandler" href="https://www.baidu.com">baidu click .Prevent阻止跳转事件</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">
      测试阻止事件冒泡  .stop 停止传递事件
    </p>
  </div>
</template>

