import { createApp } from 'vue'
import App from './App.vue'
// 全局注入组件
import Header from './pages/Header.vue'

// app是Vue的实例对象
// 在一个Vue项目中，有且仅有一个Vue实例对象，App是根组件
const app = createApp(App)
//在这中间写组件的注册
app.component("Header", Header)
app.provide('globalData1', '我是全局数据!')

//挂载应用到容器中，才能被渲染出来。这个#app就是index.html中的<div id="app"></div>
app.mount('#app')
