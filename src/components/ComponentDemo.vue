<script>
import WatchDemo from './WatchDemo.vue';
// import Header from '../pages/Header.vue';
import Main from '../pages/Main.vue'
import Aside from '../pages/Aside.vue'

export default {
  //注入组件
  components: {
    WatchDemo,
    // Header,
    Main,
    Aside,
  }
}
</script>

<template>
  <h3>
    1. 引入组件，注入注解component
    2. 组件嵌套
    3. 组件的注册方式： 全局注册（main.js中注册），局部注册
      推荐局部注册，父子关系不清晰
    4. 组件传递数据 props
  </h3>
  <WatchDemo/>
  <Header />
  <Main />
  <Aside />
</template>

