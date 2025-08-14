import {ArticleBasic, FilterBlock, Layout, searchArticle} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'
import {AppRouter, BreadcrumbType, categoriesTags} from '@/shared'
import {useTagFilter} from '@/hooks'

const breadcrumbs: BreadcrumbType[] = [
  {text: 'Главная ', to: AppRouter.home.path},
  {text: 'Статьи', to: AppRouter.articles.path},
]

const AllArticlesPage = () => {
  const {
    selectedCategory,
    selectedTags,
    isDropdownOpen,
    filterTags,
    handleCategorySelect,
    toggleDropdown,
    handleTagClick,
    handleRemoveTag,
    handleResetTags,
  } = useTagFilter(categoriesTags[0].name)

  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Статьи"
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation
          active={selectedCategory}
          setTypeSearch={handleCategorySelect}
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

export default AllArticlesPage
