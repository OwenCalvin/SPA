export default function importArticle (page) {
  return articles.find((article) => {
    return article.page === parseInt(page)
  })
}

const articles = [
  {
    page: 1,
    title: 'Description1',
    article: 'Blabla1'
  },
  {
    page: 2,
    title: 'Description2',
    article: 'Blabla2'
  },
  {
    page: 3,
    title: 'Description3',
    article: 'Blabla3'
  }
]
