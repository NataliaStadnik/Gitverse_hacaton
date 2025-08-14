import {Layout, MediaVideosList} from '@/entities'
import './style.scss'
import {AppRouter, BreadcrumbType} from '@/shared'
import AsideNavigation from '@/widgets/AsideNavigation/AsideNavigation'
import {useTagFilter} from '@/hooks'
import {VideoCardArray} from '@/widgets'

export const asideItemsMunu = [
  {name: 'Git для начинающих'},
  {name: 'Обсуждения'},
  {name: 'Похожее'},
]

const OneVideoPage = () => {
  const {selectedCategory, handleCategorySelect} = useTagFilter(
    asideItemsMunu[0].name
  )

  const breadcrumbs: BreadcrumbType[] = [
    {text: 'Главная ', to: AppRouter.home.path},
    {text: 'Медиа', to: AppRouter.media.path},
    {text: 'Git для начинающих', to: ''},
  ]

  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Git для начинающих"
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation
          active={selectedCategory}
          setTypeSearch={handleCategorySelect}
          items={asideItemsMunu}
        />
        <div className="layout-inner video-page">
          <div className="video-page">
            <h2 className="video-page__title">Похожее</h2>
            <MediaVideosList dataVideos={VideoCardArray.slice(0, 4)} />
          </div>
        </div>
      </>
    </Layout>
  )
}

export default OneVideoPage
