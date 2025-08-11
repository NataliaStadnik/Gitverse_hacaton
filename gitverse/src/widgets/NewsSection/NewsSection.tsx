import {useRef, useState} from 'react'
import './style.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {NewsCard, NewsCardDataType} from '@/entities/NewsCard/NewsCard'
import {Navigation} from 'swiper/modules'
import type {Swiper as SwiperClass} from 'swiper'
import NewsSliderArrow from '@/assets/svg/NewsSliderArrow'
import {useTheme} from '@/shared'

const NewsCardArray: NewsCardDataType[] = [
  {
    id: 1,
    img: './../src/assets/images/newscard-1.png',
    label: 'Событие',
    title: 'GigaConf 2024: новости конференции и релиз новой IDE',
    text: 'Разработчикам стала доступна российская среда разработки GigaIDE со встроенным AI-ассистентом',
  },
  {
    id: 2,
    img: './../src/assets/images/newscard-2.png',
    label: 'Доклад',
    title:
      'Запись доклада Анатолия Шипова, Олега Чирухина и Андрея Слекеничса о GigaIDE',
    text: 'В докладе какая функциональность будет доступна в рамках версий GigaIDE и немного о планах на будущее',
  },
  {
    id: 3,
    img: './../src/assets/images/newscard-3.png',
    label: 'Обзор',
    title: 'Amplicode: Обзор GigaIDE от СБЕРа',
    text: 'Компания Amplicode протестировала GigaIDE и делится впечатлениями',
  },
  {
    id: 4,
    img: './../src/assets/images/newscard-1.png',
    label: 'Событие',
    title: 'GigaConf 2024: новости конференции и релиз новой IDE',
    text: 'Разработчикам стала доступна российская среда разработки GigaIDE со встроенным AI-ассистентом',
  },
  {
    id: 5,
    img: './../src/assets/images/newscard-3.png',
    label: 'Обзор',
    title: 'Amplicode: Обзор GigaIDE от СБЕРа',
    text: 'Компания Amplicode протестировала GigaIDE и делится впечатлениями',
  },
  {
    id: 6,
    img: './../src/assets/images/newscard-1.png',
    label: 'Событие',
    title: 'GigaConf 2024: новости конференции и релиз новой IDE',
    text: 'Разработчикам стала доступна российская среда разработки GigaIDE со встроенным AI-ассистентом',
  },
]

const NewsSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null)
  const {theme} = useTheme()

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const onSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="news-section">
      <div className="news-section__wrapper">
        <div className="container">
          <h2 className="title">Новости GitVerse</h2>

          <div className="news-slider__nav">
            <button
              className="news-slider__prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              disabled={isBeginning}
            >
              <NewsSliderArrow
                active={!isBeginning}
                theme={theme}
                direction="left"
              />
            </button>
            <button
              className="news-slider__next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              disabled={isEnd}
            >
              <NewsSliderArrow
                active={!isEnd}
                theme={theme}
                direction="right"
              />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={48}
            slidesPerView={3}
            onSwiper={(swiper: SwiperClass) => {
              swiperRef.current = swiper
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            onSlideChange={onSlideChange}
            className="news-slider"
          >
            {NewsCardArray.map((card) => (
              <SwiperSlide key={card.id}>
                <NewsCard
                  image={card.img}
                  label={card.label}
                  title={card.title}
                  text={card.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
