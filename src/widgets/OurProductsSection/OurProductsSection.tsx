import {ProductArticle} from '@/entities'
import './style.scss'
import {AppRouter} from '@/shared'
import prod1 from '@/assets/images/prod-icon-1.svg'
import prod2 from '@/assets/images/prod-icon-2.svg'
import prod3 from '@/assets/images/prod-icon-3.svg'
import prod4 from '@/assets/images/prod-icon-4.svg'

export type ProductCardType = {
  name: string
  svg: string
  text: string
  path: string
}

const productsArray: ProductCardType[] = [
  {
    name: 'Smart Class',
    svg: prod1,
    text: 'Инструмент для обучения и онбординга ИТ-специалистов',
    path: AppRouter.productSmartClass.path,
  },
  {
    name: 'Giga IDE',
    svg: prod2,
    text: 'IDE на базе IDEA/PyCharm Community и еще 70 инструментов',
    path: AppRouter.productGigaIDE.path,
  },
  {
    name: 'Giga IDE Cloude',
    svg: prod3,
    text: 'Облачное решение для ваших проектов',
    path: AppRouter.productGigaCloude.path,
  },
  {
    name: 'Giga Code',
    svg: prod4,
    text: 'AI-ассистент разработчика, который ускоряет создание ПО',
    path: AppRouter.productGigaCode.path,
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
