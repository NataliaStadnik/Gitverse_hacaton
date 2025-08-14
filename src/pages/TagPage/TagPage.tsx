import {
  ArticleBasic,
  FilterBlock,
  Layout,
  searchArticle,
} from '@/entities'
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

export default TagPage
