<script setup>
import HelloWorld2 from './components/HelloWorld2.vue';
import IfDemo from './components/IfDemo.vue';
import ListDemo from './components/ListDemo.vue';
import ListKeyDemo from './components/ListKeyDemo.vue';
import EventDemo from './components/EventDemo.vue'
import EventDemo2 from './components/EventDemo2.vue';
import EventDemo3 from './components/EventDemo3.vue';
import ArrayListDemo from './components/ArrayListDemo.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import ClassBindDemo from './components/ClassBindDemo.vue';
import StyleBindDemo from './components/StyleBindDemo.vue'
import WatchDemo from './components/WatchDemo.vue';
import ModelDemo from './components/ModelDemo.vue';
import RefDemo from './components/RefDemo.vue';
import ComponentDemo from './components/ComponentDemo.vue';
import Parent from './components/Parent.vue';

// export default {
//   data(){
//     return{
//       msg:"test2",
//       rawHtml:"<a href='https://www.baidu.com'>baidu</a>"
//     }
//   }
// }
</script>

<template>
  <!-- <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p v-html="rawHtml"></p> -->
  <HelloWorld2 />
  <IfDemo />
  <ListKeyDemo />
  <EventDemo />
  <EventDemo2 />
  <EventDemo3 />
  <ArrayListDemo />
  <ComputedDemo />
  <ClassBindDemo />
  <StyleBindDemo />
  <WatchDemo />
  <ModelDemo />
  <RefDemo />
  <ComponentDemo/>
  <Parent/>
</template>
