<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GridConfig, { DataSourceOption, User } from './dto/GridConfig';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    var gridConfig = new GridConfig('./education/get', [{}], [{}])
    gridConfig.render();
    basejs.init(gridConfig)
    new DataSourceOption().render();
    const  user =  new User();
    user.login();
    user.signUp();
    user.resetPassword();
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
