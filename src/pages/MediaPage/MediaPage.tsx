import './style.scss'
import {AppRouter, DogHelper} from '@/shared'
import {OurProductsSection} from '@/widgets'
import Podcasts from '@/widgets/Podcasts/Podcasts'
import {VideosSection} from '@/widgets'
import VideosSectionSmall from '@/widgets/VideosSection/VideosSectionSmall/VideosSectionSmall'

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
        to={AppRouter.mediaSubpages.path('popular')}
      />
      <Podcasts />
      <VideosSectionSmall
        headingSection="Обзоры"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path('reviews')}
      />
      <VideosSectionSmall
        headingSection="Кейсы"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path('cases')}
      />
      <VideosSectionSmall
        headingSection="Гайды"
        headingSectionClassName="title"
        to={AppRouter.mediaSubpages.path('guides')}
      />
      <OurProductsSection />
    </div>
  )
}

export default MediaPage
