import {Button} from '@/shared'
import './style.scss'
import {useEffect, useState} from 'react'

const backgrounds = [
  './../src/assets/images/banner-1.svg',
  './../src/assets/images/banner-2.svg',
  './../src/assets/images/banner-3.svg',
  // './../src/assets/images/banner-4.svg',
]

const MainBanner = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="main-banner">
      <div className="wrapper">
        <div className="main-banner__slider">
          {backgrounds.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`background ${i}`}
              className={`main-banner__image ${i === index ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="container main-banner__container">
          <div className="main-banner__wrapper">
            <h2 className="title title--light">
              Разработка без границ с CodeIDE
            </h2>
            <p className="main-banner__text">
              Java, Kotlin, Python и ещё 70 инструментов
            </p>
            <Button text="Подробнее" linkTo="#" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
