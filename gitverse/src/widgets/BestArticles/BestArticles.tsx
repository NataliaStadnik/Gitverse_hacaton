import {ArticleBasic} from '@/entities'
import './style.scss'

const BestArticles = () => {
  return (
    <section>
      <div className="container">
        <h2>Лучшие статьи</h2>
        <ArticleBasic />
      </div>
    </section>
  )
}

export default BestArticles
