import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:page?',
      name: 'Article',
      component: Article,
      props: true
    }
  ]
})
