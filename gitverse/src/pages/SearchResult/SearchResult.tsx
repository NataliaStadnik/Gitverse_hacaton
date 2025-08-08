import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideMenuType, AsideNavigation} from '@/widgets'

export const asideItemsMunu: AsideMenuType[] = [
  {name: 'Все результаты'},
  {name: 'Статьи'},
  {name: 'Новости'},
]

const SearchResult = () => {
  return (
    <Layout
      message={'Смарт-блоки кода, которые ложатся в нужное место'}
      pageTitle="Результаты поиска"
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
