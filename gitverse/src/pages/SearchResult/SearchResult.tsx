import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideMenuType, AsideNavigation} from '@/widgets'
import {AppRouter, BreadcrumbType} from '@/shared'
import {useTagFilter} from '@/hooks'

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
  const {
    selectedTags,
    selectedCategory,
    isDropdownOpen,
    filterTags,
    handleCategorySelect,
    toggleDropdown,
    handleTagClick,
    handleRemoveTag,
    handleResetTags,
  } = useTagFilter(asideItemsMunu[0].name)

  return (
    <Layout
      message={'Смарт-блоки кода, которые ложатся в нужное место'}
      pageTitle="Результаты поиска"
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation
          active={selectedCategory}
          setTypeSearch={handleCategorySelect}
          items={asideItemsMunu}
        />
        <div className="layout-inner">
          <FilterBlock
            allTags={filterTags}
            tagsDrop={isDropdownOpen}
            setTagsDrop={toggleDropdown}
            reset={handleResetTags}
            handleTagClick={handleTagClick}
            handleRemoveTag={handleRemoveTag}
            selectedTags={selectedTags}
          />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default SearchResult
