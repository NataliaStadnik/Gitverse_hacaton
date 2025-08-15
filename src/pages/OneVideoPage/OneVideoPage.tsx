import {Comments, Layout, MediaVideosList, VideoPlayer} from '@/entities'
import './style.scss'
import {AppRouter, BreadcrumbType, CategoriesTagsType} from '@/shared'
import AsideNavigation from '@/widgets/AsideNavigation/AsideNavigation'
import {useTagFilter} from '@/hooks'
import {VideoCardArray} from '@/widgets'

export const asideItemsMunu: CategoriesTagsType[] = [
  {name: 'Git для начинающих', tagLink: '#video-player'},
  {name: 'Обсуждения', tagLink: '#discusses'},
  {name: 'Похожее', tagLink: '#similar'},
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
            <VideoPlayer />
            <Comments />
            <h3 className="content-title" id="#similar">
              Похожее
            </h3>
            <MediaVideosList dataVideos={VideoCardArray.slice(0, 4)} />
          </div>
        </div>
      </>
    </Layout>
  )
}

export default OneVideoPage
