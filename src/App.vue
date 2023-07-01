<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PropsTransfer :serialNumber="1" />
    <CustomEvent :serialNumber="2" />
    <SlotComponent :serialNumber="3" />
    <DynamicAsyncComponent :serialNumber="4" />
    <BoundaryHandle :serialNumber="5" />

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PropsTransfer from './components/PropsTransfer.vue';
import CustomEvent from './components/CustomEvent.vue';
import SlotComponent from './components/SlotComponent';
import DynamicAsyncComponent from './components/DynamicAsyncComponent';
import BoundaryHandle from './components/BoundaryHandle';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PropsTransfer,
    CustomEvent,
    SlotComponent,
    DynamicAsyncComponent,
    BoundaryHandle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
