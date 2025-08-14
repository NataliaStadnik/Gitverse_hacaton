import './style.scss'
import {Link} from 'react-router-dom'
import {truncateText} from '@/shared/utils/truncateText'
import PlayImg from '@/assets/images/Play.svg'
import {JSX} from 'react'

type Props = {
  img?: string
  title: string
  text: string
  category: string
  children?: JSX.Element
}

export type VideoCardDataType = {
  id: number
  img?: string
  title: string
  text: string
  category: string
}

const VideoCard = ({img, title, text, category, children}: Props) => {
  return (
    <Link className="videocard" to={''}>
      <div className={`videocard__bottom`}></div>
      <div className="videocard__image-wrapper">
        <img src={img} alt={title} className="videocard__image" />
        <h2 className="videocard__title">{title}</h2>
        <img className="videocard__play-img" src={PlayImg} alt="play" />
        <div className="videocard__time">12:32</div>
        <div className="videocard__category">{category}</div>
      </div>

      <div className="videocard__text">
        {children}
        <p>{truncateText(text, 100)}</p>
      </div>
    </Link>
  )
}

export default VideoCard
