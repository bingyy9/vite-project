<script>
export default {
  data() {
    return {
      message: '',
      checked: false,
    }
  },
}
</script>

<template>
  <h3>表单输入数据 手动连接值绑定和更改事件监听会比较麻烦，v-model大大简化了这一步 
    v-model修饰符 .trim .number .lazy失去焦点才更新
  </h3>
  <form>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
    <input type="checkbox" id="checkboxId" v-model="checked"/>
    <label for="checkboxId">{{ checked }}</label>
    <input type="text" v-model.trim="message">
    <p>{{ message }}</p>
  </form>

</template>

