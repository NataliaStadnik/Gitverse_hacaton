import './style.scss'
import {Link} from 'react-router-dom'
import NewsCardLabel from '@/shared/NewsCardLabel/NewsCardLabel'
import { AppRouter } from '@/shared'

type Props = {
  image?: string
  label: string
  title: string
  text: string
  id: number
}

export type NewsCardDataType = {
  id: number
  img?: string
  label: string
  title: string
  text: string
}

export const NewsCard = ({image, label, title, text, id}: Props) => {
  return (
    <Link to={AppRouter.news.path(id.toString())}>
      <div className="newscard">
        <img src={image} alt={title} className="newscard__image" />
        <NewsCardLabel>{label}</NewsCardLabel>
        <div className="newscard__text">
          <h2 className="newscard__title">{title}</h2>
          <p className="newscard__article">{text}</p>
        </div>
      </div>
    </Link>
  )
}
