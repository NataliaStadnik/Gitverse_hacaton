import {Button} from '@/shared'
import './style.scss'

const SecondBanner = () => {
  return (
    <section className="second-banner">
      <div className="second-banner__wrapper">
        <div className="container second-banner__container">
          <p className="title">
            Мы собрали всё, что&nbsp;нужно для&nbsp;идеального&nbsp;старта!
          </p>
          <div className="content-wrapper">
            <p className="second-banner__content">
              Гайды, wiki, база знаний и инструменты совместной работы — в одном
              месте
            </p>
            <Button text={'Подробнее'} linkTo={'#'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondBanner
