<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

// 异步加载组件
import { defineAsyncComponent } from 'vue';
const ComponentC = defineAsyncComponent(()=>
  import('./ComponentC.vue')
)

// import ComponentC from './ComponentC.vue';

export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  },

  data() {
    return {
      banner: [],
      // 组件的表示一定是字符串的格式
      tabComponent: "ComponentA",
      tabComponentAC: "ComponentA"
    }
  },

  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")

  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted" + this.$refs.name)
    //网络请求
    this.banner = [{
      "title": "title1",
      "content": "content1",
    }, {
      "title": "title2",
      "content": "content2",
    }]
  },
  beforeUpdated() {
    console.log("beforeUpdated")
  },
  updated() {
    console.log("updated")
  },
  beforeUnmount() {
    console.log("beforeUnmount")
  },
  unmounted() {
    console.log("unmounted")
  },
  methods: {
    switchComponent() {
      //组件的表示一定是字符串的格式
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"
      this.tabComponentAC = this.tabComponentAC == "ComponentA" ? "ComponentC" : "ComponentA"
    }
  }
}
</script>

<template>
  <h3>
    组件生命周期
    1. 通过ref获取DOM结构
    2. 组件之间的切换 通过component :is. 组件的表示一定是字符串的格式
    3. 组件的保活，KeepAlive
    4. 异步加载组件，为了启动效率。用到的时候再加载。defineAsyncComponent
  </h3>
  <p ref="name">测试ref获取dom</p>
  <ul>
    <li v-for="(item, index) of banner" :key="index">
      <h3>{{ item.title }}</h3>
      <p> {{ item.content }}</p>
    </li>
  </ul>
  <!-- 通过KeepAlive让组件切换的时候不销毁 -->
  <KeepAlive>
    <component :is="tabComponent"></component>
  </KeepAlive>
  <component :is="tabComponentAC"></component>

  <button @click="switchComponent">切换组件</button>
</template>

