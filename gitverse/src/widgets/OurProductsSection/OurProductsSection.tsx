import {ProductArticle} from '@/entities'
import './style.scss'

export type ProductCardType = {
  name: string
  svg: string
  text: string
  path: string
}

const productsArray: ProductCardType[] = [
  {
    name: 'Smart Class',
    svg: './../src/assets/images/prod-icon-1.svg',
    text: 'Инструмент для обучения и онбординга ИТ-специалистов',
    path: '',
  },
  {
    name: 'Giga IDE',
    svg: './../src/assets/images/prod-icon-2.svg',
    text: 'IDE на базе IDEA/PyCharm Community и еще 70 инструментов',
    path: '',
  },
  {
    name: 'Giga IDE Cloude',
    svg: './../src/assets/images/prod-icon-3.svg',
    text: 'Облачное решение для ваших проектов',
    path: '',
  },
  {
    name: 'Giga Code',
    svg: './../src/assets/images/prod-icon-4.svg',
    text: 'AI-ассистент разработчика, который ускоряет создание ПО',
    path: '',
  },
]

const OurProductsSection = () => {
  return (
    <section className="our-prod-section">
      <div className="container our-prod-section__container">
        <h2 className="title">Наши продукты</h2>
        <ul className="our-prod-section__list">
          {productsArray.map((elem) => (
            <li key={elem.name} className="our-prod-section__item">
              <ProductArticle data={elem} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurProductsSection
