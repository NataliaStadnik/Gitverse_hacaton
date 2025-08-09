import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideMenuType, AsideNavigation} from '@/widgets'
import {AppRouter, BreadcrumbType} from '@/shared'

export const asideItemsMunu: AsideMenuType[] = [
  {name: 'Все результаты'},
  {name: 'Статьи'},
  {name: 'Новости'},
]

const breadcrumbs: BreadcrumbType[] = [
  {text: 'Главная ', to: AppRouter.home.path},
  {text: 'Поиск', to: AppRouter.searchResult.path},
]

const SearchResult = () => {
  return (
    <Layout
      message={'Смарт-блоки кода, которые ложатся в нужное место'}
      pageTitle="Результаты поиска"
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

export default SearchResult
