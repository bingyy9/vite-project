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
import AttributeComponent from './components/AttributeComponent.vue';
import SlotDemo from './components/SlotDemo.vue';
import SlotDemo2 from './components/SlotDemo2.vue'
import ComponentLifecycle from './components/ComponentLifecycle.vue'

// export default {
//   data(){
//     return{
//       message: "插槽内容"
//     }
//   }
// }

let message = "插槽内容2"
let slot3 = "slot3"
let slot2 = "slot2"

function add_a() {
  this.message = "udpate message"

}
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
  <ComponentDemo />
  <Parent />
  <!-- 透传属性 -->
  <AttributeComponent class="attr-container" />
  <SlotDemo>
    <h3>插槽标题 to ALL SLOT</h3>
    <!-- <h3>插槽标题</h3> -->
    <template v-slot:header>
      <h3>插槽标题</h3>
    </template>
    <template v-slot:main>
      <p>{{ message }}</p>
    </template>
    <!-- v-slot:简写成# -->
    <template #main2>
      <p>{{ message }}</p>
    </template>
    <template #slot2="slotProps">
      <p>{{ slot2 }} - {{ slotProps.msg }}</p>
    </template>
  </SlotDemo>
  <SlotDemo2 v-slot="slotPros">
    <p>{{ slot3 }} - {{ slotPros.msg }}</p>
  </SlotDemo2>
  <ComponentLifecycle/>

</template>
