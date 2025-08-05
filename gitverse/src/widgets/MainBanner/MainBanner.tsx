import {Button} from '@/shared'
import './style.scss'

const MainBanner = () => {
  return (
    <section className='main-banner'>
      <div className="container">
        <h2>Разработка без границ с CodeIDE</h2>
        <p>Java, Kotlin, Python и ещё 70 инструментов</p>
        <Button text="Подробнее" linkTo='#' />
      </div>
    </section>
  )
}

export default MainBanner
