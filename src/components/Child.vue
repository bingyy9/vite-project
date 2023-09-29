<!-- Event Demo -->
<script>
import SubChild from './SubChild.vue';

export default {
  data() {
    return {
      msg: "child data",
      search: "",
    }
  },
  // props:["title", "demo", "age", "names", "userInfo"]
  props:{
    title:{
      type:[String,Number,Array,Object],  //同时支持多种类型
      default: "default" 
    },
    age:{
      type:Number,
      required: true,
    },
    names:{
      type: Array,
      default(){
        return ["default null"]
      }
    },
    userInfo:{

    },
    onEvent:{
      title: String,
      onEvent: Function,
    }
  },
  methods:{
    sendDataToParent(){
      console.log("send event to parent");
      this.$emit("someEvent", this.msg)
      // this.$emit["someEvent", this.msg]
      // this.$emit: ['someEvent', this.msg]
    }
  },
  watch:{
    //函数名与监听的数据对象保持一致
    search(newValue, oldValue){
      console.log("watch search change from " + oldValue + " to " + newValue)
      this.$emit("searchUpdate", this.search)
    }
  },
  components:{
    SubChild,
    SubChild
}
}
</script>

<template>
  <h3>Child Demo 组件传递数据props
    1. 接收Parent组件数据
    2. v-bind形式传递动态数据
    3. 传递Number, Array, Object, String, Function
    4. 组件传递Props类型效验 type:[String,Number,Array,Object]  //同时支持多种类型
    5. 默认值default: 数字和字符串可以直接default用默认值,数组和对象,必须通过函数返回默认值
    6. 必须项required true: 
    7. 组件事件emit: 子传递给父
    8. 组件事件配合v-model使用 + watch监听 + emit发送给父组件。 在组件A中输入数据, 在组件B中能够实时读取到这个数据
    9. 子View通过函数传递数据给父View， :onEvent= 传递函数参数
    注意： 
    1. 组件传递数据时单向的，只能从父级传递给子级. 
    2. props是只读的
    3. 父传子： props
    4. 子传父： this.$emit
    5. props也可以通过函数，实现子传父。函数是可以携带参数的:onEvent=functionName。


  </h3>
  <p>{{ title }}</p>
  <p>{{ demo }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="(item, index) of names" :key="index"> 
      {{ item }}
    </li> 
  </ul>
  <p>{{ userInfo.name }}</p>
  <p>{{ userInfo.age }}</p>
  <p>{{ onEvent('传递数据给父View') }}</p>
  <div>
    <button @click="sendDataToParent">传递数据给Parent</button>
  </div>
  
  搜索：<input type="text" v-model="search">
  <SubChild/>
</template>

