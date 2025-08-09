import {FilterBlock, Layout, SearchList} from '@/entities'
import {AsideNavigation} from '@/widgets'
import {asideItemsMunu} from '../SearchResult/SearchResult'
import {useParams} from 'react-router-dom'
import {AppRouter, BreadcrumbType} from '@/shared'

const TagPage = () => {
  const {text} = useParams()

  const breadcrumbs: BreadcrumbType[] = [
    {text: 'Главная ', to: AppRouter.home.path},
    {text: text || '', to: AppRouter.tag.path(text)},
  ]

  return (
    <Layout
      message={'Контекстное автодополнение слов, строк и целых функций'}
      pageTitle={text || ''}
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation
          items={asideItemsMunu}
          active={asideItemsMunu[0].name}
        />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default TagPage
