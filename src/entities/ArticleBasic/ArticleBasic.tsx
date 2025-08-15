import {FC} from 'react'
import './style.scss'
import {AppRouter, ArticleLabel, TagLink} from '@/shared'
import {Link} from 'react-router-dom'
import {CurlyArrow, Eye, Flag, Messages} from '@/assets/svg'
import {truncateText} from '@/shared/utils/truncateText'

export type ArticleCardDataType = {
  id: number
  name: string
  tags: string[]
  svg?: string
  date?: string
  label: string
  text: string
}

type Statistic = {
  watch?: number
  messages?: number
  saved?: number
}

export type CardWithStatisticType = Statistic & ArticleCardDataType

interface ArticleBasicProps {
  data: CardWithStatisticType
}

const ArticleBasic: FC<ArticleBasicProps> = ({data}) => {
  return (
    <article className="article-basic">
      <div
        className={`article-basic__bottom ${data?.watch ? 'article-basic__bottom--top' : ''}`}
      ></div>
      {data?.watch && (
        <div className="statistic">
          <button>
            <Eye />
            <span className="statistic__data">{data?.watch}</span>
          </button>
          <div className="statistic__right">
            <button>
              <Messages />
              <span className="statistic__data">{data?.messages}</span>
            </button>
            <button>
              <Flag />
              <span className="statistic__data">{data?.saved}</span>
            </button>
            <button>
              <CurlyArrow />
            </button>
          </div>
        </div>
      )}

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

        <Link to={AppRouter.article.path(data.id.toString())}>
          <h3 className="article-basic__title">
            {truncateText(data.name, 55)}
          </h3>
          <p className="article-basic__text">{truncateText(data.text, 84)}</p>
        </Link>
      </div>
    </article>
  )
}

export default ArticleBasic
