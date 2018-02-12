<template>
  <div class="hello">
    <h1>{{ article.title }}</h1>
    <h2>{{ article.article }}</h2>
    <button @click="next">Previous</button>
    <button @click="previous">Next</button>
  </div>
</template>

<script>
import importer from '../articles/articles'
export default {
  name: 'Article',
  props: ['page'],
  data: () => {
    return {
      article: importer(1)
    }
  },
  methods: {
    next: () => {
      this.article = importer(this.article.page + 1)
    },
    previous: () => {
      this.article = importer(this.article.page - 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
