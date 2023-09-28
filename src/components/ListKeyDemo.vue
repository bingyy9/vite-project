<!-- Key属性添加V-for -->
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
  <h3>Key属性添加V-for</h3>
  <p v-for="item in names">遍历列表：{{ item }}</p>
  <p v-for="item, index in names" :key="index">通过key index管理状态：{{ item }} - {{ index }}</p>
  <p v-for="item, index of names">of迭代：{{ item }} - {{ index }}</p>
  <div v-for="item in result" :key="item.id"> 
    <p>for遍历json数组：key是每个item的id. title = {{ item.title }}</p>      
    <!-- <img :src="item.avatar" alt=""> -->
  </div>
  <!-- for遍历对象 -->
  <div v-for="(value, key, index) of userInfo">
    <p>for遍历对象： {{ item }} - {{ key }} - {{ index }}</p>      
  </div>
</template>

