<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Article/>
  </div>
</template>

<script>
import Article from './components/Article.vue'

export default {
  name: 'App',
  components: { Article }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    margin: 0;
    margin-top: 60px;
  }

  Article {
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
</style>
