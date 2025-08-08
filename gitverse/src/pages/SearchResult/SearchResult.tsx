import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideMenuType, AsideNavigation} from '@/widgets'

const SearchResult = () => {
  const asideItems: AsideMenuType[] = [
    {name: 'Все результаты'},
    {name: 'Статьи'},
    {name: 'Новости'},
  ]

  return (
    <Layout
      message={'Смарт-блоки кода, которые ложатся в нужное место'}
      pageTitle="Результаты поиска"
    >
      <>
        <AsideNavigation items={asideItems} active={asideItems[0].name} />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default SearchResult
