<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },

  
  methods:{
    updateMessage(){
      this.message = 'UpdateMessage'
    }
  },

  watch:{
    //函数名与监听的数据对象保持一致
    message(newValue, oldValue){
      console.log("watch message change from " + oldValue + " to " + newValue)
    }
  }
}
</script>

<template>
  <h3>监听器</h3>
  <p>{{ message }}</p>
  <button @click="updateMessage">Update</button>
</template>

