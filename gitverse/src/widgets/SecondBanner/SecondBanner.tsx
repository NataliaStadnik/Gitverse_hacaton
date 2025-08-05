import { Button } from '@/shared'
import './style.scss'

const SecondBanner = () => {
  return (
    <section className='second-banner'>
      <div className="container">
        <p>Мы собрали всё, что нужно для идеального старта!</p>
        <p>Гайды, wiki, база знаний и инструменты совместной работы — в одном месте</p>
        <Button text={'Подробнее'} linkTo={'#'}/>
      </div>
    </section>
  )
}

export default SecondBanner
