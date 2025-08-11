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

const Main = () => {
  return (
    <>
      <MainBanner />
      <BestArticles />
      <NewsSection />
      <PopularNewsSection />
      <SecondBanner />
      <VideosSection />
      <OurProductsSection />
    </>
  )
}

export default Main
