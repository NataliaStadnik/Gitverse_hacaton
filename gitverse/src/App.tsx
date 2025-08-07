import {Route, Routes} from 'react-router'
import './App.css'
import {Footer, Header} from '@/widgets'
import {AppRouter} from '@/shared'
import React from 'react'

const MainLazy = React.lazy(() => import('./pages/Main/Main'))
const AllArticlesPageLazy = React.lazy(
  () => import('./pages/AllArticlesPage/AllArticlesPage')
)
const OneArticlePageLazy = React.lazy(
  () => import('./pages/OneArticlePage/OneArticlePage')
)
const AllNewsPageLazy = React.lazy(
  () => import('./pages/AllNewsPage/AllNewsPage')
)
const OneNewsPageLazy = React.lazy(
  () => import('./pages/OneNewsPage/OneNewsPage')
)
const MediaPageLazy = React.lazy(() => import('./pages/MediaPage/MediaPage'))
const AllProductsPageLazy = React.lazy(
  () => import('./pages/AllProductsPage/AllProductsPage')
)
const OneProductPageLazy = React.lazy(
  () => import('./pages/OneProductPage/OneProductPage')
)
const DocumentationPageLazy = React.lazy(
  () => import('./pages/DocumentationPage/DocumentationPage')
)
const AboutGitPageLazy = React.lazy(
  () => import('./pages/AboutGitPage/AboutGitPage')
)

const SearchPageLazy = React.lazy(
  () => import('./pages/SearchResult/SearchResult')
)

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Gitverse BLOG</h1>
        <Routes>
          <Route path={AppRouter.home.path} element={<MainLazy />} />
          <Route
            path={AppRouter.articles.path}
            element={<AllArticlesPageLazy />}
          />
          <Route
            path={AppRouter.article.path(':id')}
            element={<OneArticlePageLazy />}
          />
          <Route path={AppRouter.allNews.path} element={<AllNewsPageLazy />} />
          <Route
            path={AppRouter.news.path(':id')}
            element={<OneNewsPageLazy />}
          />
          <Route path={AppRouter.media.path} element={<MediaPageLazy />} />
          <Route
            path={AppRouter.products.path}
            element={<AllProductsPageLazy />}
          />
          <Route
            path={AppRouter.product.path(':id')}
            element={<OneProductPageLazy />}
          />
          <Route
            path={AppRouter.documentation.path}
            element={<DocumentationPageLazy />}
          />
          <Route
            path={AppRouter.aboutGitVerse.path}
            element={<AboutGitPageLazy />}
          />
          <Route
            path={AppRouter.searchResult.path}
            element={<SearchPageLazy />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
