import { ArticleBasic } from '@/entities'
import './style.scss'

const PopularNewsSection = () => {
  return (
    <section>
      <div className='container'>
        <h2>Популярные новости</h2>
        <ArticleBasic/>
      </div>
    </section>
  )
}

export default PopularNewsSection
