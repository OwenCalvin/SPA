import Vue from 'vue'
import App from './App'
import Importer from './articles/articles'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: () => {
    return {
      page: 1,
      article: Importer(this.page)
    }
  },
  components: { App },
  template: '<App page="1"></App>'
})
