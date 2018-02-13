<template>
  <div class="hello">
    <component :is="View"></component>
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
      View: Loader.LoadView(Page),
      Page: Page
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
      this.View = Loader.LoadView(this.Page)
    }
  }
}
</script>

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
