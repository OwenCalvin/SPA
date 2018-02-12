<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ page }}</h1>
    <button @click="next">Next</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['page'],
  methods: {
    next: () => {
      console.log(this.page)
      this.page++
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
