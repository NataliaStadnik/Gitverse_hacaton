import {FilterBlock, Layout, SearchList} from '@/entities'
import {AsideNavigation} from '@/widgets'
import {asideItemsMunu} from '../SearchResult/SearchResult'
import {useParams} from 'react-router-dom'
import {AppRouter, BreadcrumbType} from '@/shared'
import {useTagFilter} from '@/hooks'

const TagPage = () => {
  const {text} = useParams()

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

export default TagPage
