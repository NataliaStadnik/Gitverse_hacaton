import {Button} from '@/shared'
import './style.scss'
import {useRef, useEffect, JSX} from 'react'
import {GlobeProduct, GProduct, ScProduct} from '@/assets/svg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectFade, Pagination} from 'swiper/modules'
import 'swiper/css'

type ContentBannerType = {
  title: string[]
  text: string
  svg: (isHover: string) => JSX.Element
}

const contentBanner: ContentBannerType[] = [
  {
    title: ['SmartClass', 'для ИТ-команд'],
    text: 'Ваш цифровой наставник для новых сотрудников',
    svg: (isHover: string) => <ScProduct classes={isHover} />,
  },
  {
    title: ['Разработка без границ', 'с CodeIDE'],
    text: 'Java, Kotlin, Python и ещё 70 инструментов',
    svg: (isHover: string) => <GProduct classes={isHover} />,
  },
  {
    title: ['Создавайте и развивайте', 'проекты с AI-помощником'],
    text: 'Ваш умный партнёр в коде, идеях и автоматизации',
    svg: (isHover: string) => <GlobeProduct classes={isHover} />,
  },
]

const MainBanner = () => {
  const swiperRef = useRef<any>(null)
  const delay = 1000
  const duration = 600

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop()
      setTimeout(() => {
        swiperRef.current.swiper.autoplay.start()
      }, delay)
    }
  }, [])

  const handleMouseEnter = () => {
    swiperRef.current?.swiper?.autoplay?.pause()
  }

  const handleMouseLeave = () => {
    swiperRef.current?.swiper?.autoplay?.resume()
  }

  return (
    <section
      className="main-banner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{
            bulletClass: 'main-banner__bullet',
            bulletActiveClass: 'main-banner__bullet--active',
          }}
          autoplay={{
            delay: delay + duration,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={duration}
          loop
          className="main-banner__slider"
        >
          {contentBanner.map((elem, i) => (
            <SwiperSlide key={i}>
              <div className="container main-banner__container">
                <div className="main-banner__wrapper">
                  <h2 className="title title--light">
                    {elem.title.map((elem, i) => (
                      <span key={i}> {elem}</span>
                    ))}
                  </h2>
                  <p className="main-banner__text">{elem.text}</p>
                  <Button text="Подробнее" linkTo="#" />
                </div>

                <div className="animation-banner">
                  <div className="boble-big">
                    {elem.svg('active')}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MainBanner
