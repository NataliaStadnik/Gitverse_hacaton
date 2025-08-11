export const AppRouter = {
  home: {path: '/'},
  tag: {path: (text = ':text') => `/tag/${text}`,},
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
  productSmartClass: {path: '/products/Smart-Class'},
  productGigaIDE: {path: '/products/Giga-IDE'},
  productGigaCloude: {path: '/products/Giga-IDE-Cloude'},
  productGigaCode: {path: '/products/Giga-Code'},

  documentation: {path: '/documentation'},
  aboutGitVerse: {path: '/about'},
  searchResult: {path: '/result'},
}
