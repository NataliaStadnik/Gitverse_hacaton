import './style.scss'
import {Link} from 'react-router-dom'

export type PodcastCardDataType = {
  id: number
  img?: string
  title: string
  subtitle?: string
  text?: string
}

type Props = {
  title: string
  text?: string
  subtitle?: string
  img?: string
}

const PodcastCard = ({title, text, subtitle, img}: Props) => {
  return (
    <Link className="podcast-card" to={''}>
      <div className="podcast-card__wrapper">
        <img className="podcast-card__img" src={img} alt={title} />
        <div className="podcast-card__textgroup">
          <h3 className="podcast-card__title">{title}</h3>
          <p className="podcast-card__subtitle">{subtitle}</p>
          <p className="podcast-card__text">{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default PodcastCard
