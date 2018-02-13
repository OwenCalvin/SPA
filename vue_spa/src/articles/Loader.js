import Articles, { DefaultArticle } from './Articles'

export default class Loader {
  // Return the number of articles
  static get Count () {
    return Articles.length
  }

  // Turn a page
  static TurnPage (actualPage, value) {
    let newPage = actualPage + value
    return actualPage + ((newPage <= Loader.Count && newPage > 0) ? value : 0)
  }

  // Load view from JSON datas
  static LoadView (page) {
    return Loader.Load(page).view
  }

  // Load datas from JSON file
  static Load (page) {
    let articleFound = Articles.find((article) => {
      return article.page === parseInt(page)
    })
    return articleFound || DefaultArticle
  }
}
