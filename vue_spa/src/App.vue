<template>
  <div id="app">
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
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
