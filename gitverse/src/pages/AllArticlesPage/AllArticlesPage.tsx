import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'
import {useEffect, useState} from 'react'
import {AppRouter, BreadcrumbType, categoriesTags} from '@/shared'

const breadcrumbs: BreadcrumbType[] = [
  {text: 'Главная ', to: AppRouter.home.path},
  {text: 'Статьи', to: AppRouter.articles.path},
]

const AllArticlesPage = () => {
  const [typeSearch, setTypeSearch] = useState(categoriesTags[0].name)
  const [tagsDrop, setTagsDrop] = useState(false)

  const filterTags: string[] =
    typeSearch === 'Все категории'
      ? Array.from(
          new Set(
            categoriesTags
              .filter((obj) => Array.isArray(obj.tags))
              .flatMap((obj) => obj.tags)
          )
        )
      : categoriesTags.find((obj) => obj.name === typeSearch)?.tags || []

  useEffect(() => {
    setTagsDrop(false)
  }, [typeSearch])

  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Статьи"
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation active={typeSearch} setTypeSearch={setTypeSearch} />
        <div className="layout-inner">
          <FilterBlock
            allTags={filterTags}
            tagsDrop={tagsDrop}
            setTagsDrop={setTagsDrop}
          />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default AllArticlesPage
