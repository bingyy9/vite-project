<script>
export default {
  data() {
    return {
      count: 0,
      names: ['name1', 'name2', 'name3'],
      test:{
        name:"name",
        content:"content",
      }
    }
  },

  methods:{
    
  },

  computed:{
    testComputeAttribute(){
      return this.test.content.length > 0 ? "Yes" : "No"
    }
  }
}
</script>

<template>
  <h3>计算属性</h3>
  <p>
    <!-- 模板语法中逻辑复杂不推荐 -->
    模板语法中逻辑复杂不推荐 {{ test.content.length > 0 ? "Yes" : "No" }}
  </p>
  <p>
    计算属性,不需要加括号,不是方法. 目的是把模板里面的复杂语法放到计算属性里面。
    {{ testComputeAttribute }}
    计算属性值会基于响应式依赖被缓存。只有当响应式发生更改的时候才会重新计算。
    方法总是会再次执行。
  </p>
</template>

