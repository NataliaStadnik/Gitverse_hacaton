import {ArticleBasic, FilterBlock, Layout, searchArticle} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'
import {AppRouter, BreadcrumbType} from '@/shared'
import {useTagFilter} from '@/hooks'

export const asideItemsMunu = [
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
          <ul className="searches">
            {[1, 2, 3, 4, 5].map((elem) => (
              <ArticleBasic key={elem} data={searchArticle} />
            ))}
          </ul>
        </div>
      </>
    </Layout>
  )
}

export default SearchResult
