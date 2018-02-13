import Articles, { DefaultArticle } from './Articles'

export default class Loader {
  static get Count () {
    return Articles.length
  }

  static TurnPage (actualPage, value) {
    let newPage = actualPage + value
    return actualPage + ((newPage <= Loader.Count && newPage > 0) ? value : 0)
  }

  static Load (page) {
    let articleFound = Articles.find((article) => {
      return article.page === parseInt(page)
    })
    return articleFound || DefaultArticle
  }
}
