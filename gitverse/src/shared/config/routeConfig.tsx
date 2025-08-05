export const AppRouter = {
  home: {path: '/'},
  articles: {path: '/articles'},
  article: {
    path: (id = ':id') => `/articles/${id}`,
  },
  allNews: {path: '/news'},
  news: {
    path: (id = ':id') => `/news/${id}`,
  },

  media: {path: '/media'},
  products: {path: '/products'},
  product: {
    path: (id = ':id') => `/products/${id}`,
  },
  documentation: {path: '/documentation'},
  aboutGitVerse: {path: '/about'},
  searchResult: {path: '/result'},
}
