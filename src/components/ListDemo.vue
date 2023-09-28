<!-- 列表渲染 -->
<script>
export default {
  data() {
    return {
      names: ["name1", "name2", "name3", "name4"],
      // json format data
      result: [{
        "id": 1,
        "title": "title1",
        "avatar": "https://img1.baidu.com/it/u=1556946023,371853632&fm=253&fmt=auto&app=138&f=JPEG?w=180&h=180",
      },
      {
        "id": 2,
        "title": "title2",
        "avatar": "https://img1.baidu.com/it/u=1556946023,371853632&fm=253&fmt=auto&app=138&f=JPEG?w=180&h=180",
      },
      {
        "id": 3,
        "title": "title3",
        "avatar": "https://img1.baidu.com/it/u=1556946023,371853632&fm=253&fmt=auto&app=138&f=JPEG?w=180&h=180",
      },
      ],
      userInfo:{
        name:"for遍历对象",
        age:20,
        sex:"M",
      }
    }
  }
}
</script>

<template>
  <h3>列表渲染</h3>
  <p v-for="item in names">遍历列表：{{ item }}</p>
  <p v-for="item, index in names">in迭代：{{ item }} - {{ index }}</p>
  <p v-for="item, index of names">of迭代：{{ item }} - {{ index }}</p>
  <div v-for="item in result">
    <p>for遍历json数组：{{ item.title }}</p>      
    <!-- <img :src="item.avatar" alt=""> -->
  </div>
  <!-- for遍历对象 -->
  <div v-for="(value, key, index) of userInfo">
    <p>for遍历对象： {{ item }} - {{ key }} - {{ index }}</p>      
  </div>
</template>

<style>
.appClass {
  color: red;
  font-size: 30px;
}
</style>
