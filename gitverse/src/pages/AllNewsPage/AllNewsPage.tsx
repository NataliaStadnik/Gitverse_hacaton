import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'

const AllNewsPage = () => {
  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Новости"
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

export default AllNewsPage
