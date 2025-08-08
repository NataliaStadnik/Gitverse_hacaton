import { FilterBlock, Layout, SearchList } from '@/entities'
import './style.scss'
import { AsideNavigation } from '@/widgets'

const AllArticlesPage = () => {
  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Статьи"
    >
      <>
        <AsideNavigation />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default AllArticlesPage
