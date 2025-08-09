import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideNavigation} from '@/widgets'
import {AppRouter, BreadcrumbType} from '@/shared'

const breadcrumbs: BreadcrumbType[] = [
  {text: 'Главная ', to: AppRouter.home.path},
  {text: 'Новости', to: AppRouter.allNews.path},
]

const AllNewsPage = () => {
  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Новости"
      breadcrumbs={breadcrumbs}
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
