import {ToDepartmentLink} from '@/shared'
import './style.scss'
import {ProductCardType} from '@/widgets'
import {FC} from 'react'

interface ProductArticleProps {
  data: ProductCardType
}

const ProductArticle: FC<ProductArticleProps> = ({data}) => {
  return (
    <article className="product-article">
      <div className="product-article__top">
        <img src={data.svg} alt={data.name} />
        {data.name === 'Giga IDE Cloude' ? (
          <div>
            <span>Giga IDE </span>
            <span className="product-cloud">Cloude</span>
          </div>
        ) : (
          <p>{data.name}</p>
        )}
      </div>

      <div className="product-article__content">
        <p className="product-article__text">{data.text}</p>
        <ToDepartmentLink text="Перейти" to={data.path} />
      </div>
    </article>
  )
}

export default ProductArticle
