import './style.scss'
import {AppRouter, DogHelper, MediaSubpagesEnum} from '@/shared'
import {
  OurProductsSection,
  Podcasts,
  VideosSection,
  VideosSectionSmall,
} from '@/widgets'

const MediaPage = () => {
  return (
    <div className="media-page__container">
      <div className="media-page__heading">
        <h1 className="media-page__head-title">Медиа</h1>
        <DogHelper message="Пишу тесты и документацию, пока ты пьёшь кофе" />
      </div>
      <VideosSection
        headingSection="Популярное"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path(MediaSubpagesEnum.Popular)}
      />
      <Podcasts />
      <VideosSectionSmall
        headingSection="Обзоры"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path(MediaSubpagesEnum.Reviews)}
      />
      <VideosSectionSmall
        headingSection="Кейсы"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path(MediaSubpagesEnum.Cases)}
      />
      <VideosSectionSmall
        headingSection="Гайды"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path(MediaSubpagesEnum.Guides)}
      />
      <OurProductsSection />
    </div>
  )
}

export default MediaPage
