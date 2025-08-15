import {ArticleBasic, Comments, Layout, searchArticle} from '@/entities'
import './style.scss'
import {AppRouter, BreadcrumbType, CategoriesTagsType} from '@/shared'
import {AsideNavigation, OurProductsSection} from '@/widgets'
import {useTagFilter} from '@/hooks'

export const asideItemsMunu: CategoriesTagsType[] = [
  {name: 'Что такое webpack', tagLink: '#about-wp'},
  {name: 'Зачем нужен webpack', tagLink: '#why-wp'},
  {name: 'Обсуждения', tagLink: '#discusses'},
  {name: 'Похожее', tagLink: '#similar'},
]

const OneArticlePage = () => {
  const {selectedCategory, handleCategorySelect} = useTagFilter(
    asideItemsMunu[0].name
  )

  const breadcrumbs: BreadcrumbType[] = [
    {text: 'Главная ', to: AppRouter.home.path},
    {text: 'Статьи', to: AppRouter.articles.path},
    {text: 'Как собрать проект на Webpack', to: ''},
  ]

  return (
    <>
      <Layout
        message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
        breadcrumbs={breadcrumbs}
        classes='layout__one-article'
      >
        <>
          <AsideNavigation
            active={selectedCategory}
            setTypeSearch={handleCategorySelect}
            items={asideItemsMunu}
          />
          <div className="layout-inner">
            <div>
              <Comments />
              <h3 className="content-title" id="#similar">
                Похожее
              </h3>
              <ul className="searches">
                {[1, 2, 3].map((elem) => (
                  <ArticleBasic key={elem} data={searchArticle} />
                ))}
              </ul>
            </div>
          </div>
        </>
      </Layout>
      <OurProductsSection />
    </>
  )
}

export default OneArticlePage
