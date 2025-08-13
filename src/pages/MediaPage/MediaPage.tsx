import './style.scss'
import {DogHelper} from '@/shared'
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
      />
      <Podcasts />
      <VideosSectionSmall
        headingSection="Обзоры"
        headingSectionClassName="title"
      />
      <VideosSectionSmall
        headingSection="Кейсы"
        headingSectionClassName="title"
      />
      <VideosSectionSmall
        headingSection="Гайды"
        headingSectionClassName="title"
      />
      <OurProductsSection />
    </div>
  )
}

export default MediaPage
