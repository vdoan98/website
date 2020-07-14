<template>
  <div id="app">
    <Intro/>
  </div>
</template>

<script>
import Intro from './views/Intro.vue'

export default {
  name: 'App',
  components: {
    Intro
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
  margin-top: 0px;
  padding: 0;
  margin: 0;
  
}
</style>
