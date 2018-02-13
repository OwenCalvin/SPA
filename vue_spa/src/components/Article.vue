<template>
  <div class="hello">
    <h1>{{ Article.title }}</h1>
    <h2>{{ Article.article }}</h2>
    <button @click="previous">Previous</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import Loader from '../Articles/Loader'

export default {
  name: 'Article',
  data: function () {
    let Page = 1
    return {
      Page: Page,
      Article: Loader.Load(Page)
    }
  },
  methods: {
    next: function () {
      this.pageTurner(1)
    },
    previous: function () {
      this.pageTurner(-1)
    },
    pageTurner: function (value) {
      this.Page = Loader.TurnPage(this.Page, value)
    }
  },
  watch: {
    Page: function () {
      this.Article = Loader.Load(this.Page)
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
