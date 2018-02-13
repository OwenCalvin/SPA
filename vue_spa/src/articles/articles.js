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
  }
]
