<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PropsTransfer :serialNumber="1" />
    <CustomEvent :serialNumber="2" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PropsTransfer from './components/PropsTransfer.vue';
import CustomEvent from './components/CustomEvent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PropsTransfer,
    CustomEvent
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
