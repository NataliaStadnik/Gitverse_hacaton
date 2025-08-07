import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'

const SearchResult = () => {
  const asideItems = ['Все результаты', 'Статьи', 'Новости']

  return (
    <Layout
      message={'Смарт-блоки кода, которые ложатся в нужное место'}
      pageTitle="Результаты поиска"
    >
      <>
        <AsideNavigation items={asideItems} active={asideItems[0]} />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default SearchResult
