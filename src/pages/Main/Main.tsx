import {
  BestArticles,
  MainBanner,
  NewsSection,
  OurProductsSection,
  PopularNewsSection,
  SecondBanner,
  VideosSection,
} from '@/widgets'
import './style.scss'
import {AppRouter} from '@/shared'

const Main = () => {
  return (
    <>
      <MainBanner />
      <BestArticles />
      <NewsSection />
      <PopularNewsSection />
      <SecondBanner />
      <VideosSection
        headingSection="Видео"
        headingSectionClassName="title"
        to={AppRouter.media.path}
      />
      <OurProductsSection />
    </>
  )
}

export default Main
