export const DefaultArticle = {
  page: 0,
  title: 'No article found',
  view: () => import('./Pages/NoPage.vue')
}

export default [
  {
    page: 1,
    title: 'Title1',
    view: () => import('./Pages/Page1.vue')
  },
  {
    page: 2,
    title: 'Title2',
    view: () => import('./Pages/Page2.vue')
  },
  {
    page: 3,
    title: 'Title3',
    view: () => import('./Pages/Page3.vue')
  },
  {
    page: 4,
    title: 'Title4',
    view: () => import('./Pages/Page4.vue')
  }
]
