import {FC} from 'react'
import './style.scss'
import {ArticleLabel, TagLink} from '@/shared'
import {Link} from 'react-router-dom'

export type ArticleCardDataType = {
  id: number
  name: string
  tags: string[]
  svg?: string
  date?: string
  label: string
  text: string
}

interface ArticleBasicProps {
  data: ArticleCardDataType
}

const ArticleBasic: FC<ArticleBasicProps> = ({data}) => {
  return (
    <article className="article-basic">
      <div className="article-basic__top">
        {data.svg && <img src={data.svg} alt={data.svg} />}
        {data.date && <span className="article-basic__date">{data.date}</span>}
        <ArticleLabel text={data.label} />
      </div>

      <div className="article-basic__wrapper">
        <div>
          {data.tags.map((elem) => (
            <TagLink key={elem} text={elem} />
          ))}
        </div>

        <Link to={''}>
          <h3 className="article-basic__title">{data.name}</h3>
          <p className="article-basic__text">{data.text}</p>
        </Link>
      </div>
    </article>
  )
}

export default ArticleBasic
