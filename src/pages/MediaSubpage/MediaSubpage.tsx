import {Layout, MediaVideosList} from '@/entities'
import {
  AppRouter,
  BreadcrumbType,
  CategoriesTagsType,
  MediaSubpagesEnum,
} from '@/shared'
import {AsideNavigation, VideoCardArray} from '@/widgets'
import {useTagFilter} from '@/hooks'
import {useParams} from 'react-router-dom'

export const asideItemsMunu: CategoriesTagsType[] = [
  {name: 'Популярное', to: MediaSubpagesEnum.Popular},
  {name: 'Обзоры', to: MediaSubpagesEnum.Reviews},
  {name: 'Кейсы', to: MediaSubpagesEnum.Cases},
  {name: 'Гайды', to: MediaSubpagesEnum.Guides},
  {name: 'Интервью', to: MediaSubpagesEnum.Interviews},
]

const MediaSubpage = () => {
  const {category} = useParams()

  const activeMenuName = asideItemsMunu.find(
    (elem) => elem.to === category
  )?.name

  const {selectedCategory, handleCategorySelect} = useTagFilter(
    activeMenuName || 'Попурярное'
  )

  const breadcrumbs: BreadcrumbType[] = [
    {text: 'Главная', to: AppRouter.home.path},
    {text: 'Медиа', to: AppRouter.media.path},
    {text: selectedCategory, to: ''},
  ]

  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      breadcrumbs={breadcrumbs}
    >
      <>
        <AsideNavigation
          active={selectedCategory}
          setTypeSearch={handleCategorySelect}
          items={asideItemsMunu}
        />
        <div className="layout-inner">
          <MediaVideosList dataVideos={VideoCardArray} />
        </div>
      </>
    </Layout>
  )
}

export default MediaSubpage
