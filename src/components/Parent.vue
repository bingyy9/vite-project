<!-- Event Demo -->
<script>
import Child from './Child.vue';

export default {
  data() {
    return {
      messsage: "Parent data",
      search: "",
      age: 20,
      names: ['name1', 'name2', 'name3'],
      userInfo: {
        name: "name",
        age: 10
      }
    }
  },
  
  // provide:{
  //   provideData: "provideData爷爷的数据",
  // },

  //数据来源data
  provide(){
    return {
      provideData: this.messsage
    }
  },
  components: {
    Child,
  },
  methods: {
    getHandle(data) {
      console.log("get event from Child " + data)
      this.messsage = data
    },
    searchUpdate(data) {
      console.log("get event from Child " + data)
      this.search = data
    },
    dataFn(data){
      console.log("dataFn " + data)
    }
  }
}
</script>

<template>
  <h3>Parent Demo
    2. 组件事件emit: 子传递给父
  </h3>
  <div>
    <!-- v-bind形式传递动态数据  传递int-->
    <Child :title="messsage" demo="test" :age="age" :names="names" :userInfo="userInfo" @someEvent="getHandle" 
      @searchUpdate="searchUpdate" :onEvent="dataFn">
    </Child>
  </div>
  <p> {{ message }}</p>
  <p> search data {{ search }}</p>
</template>

