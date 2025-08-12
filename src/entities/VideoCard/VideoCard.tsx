import {Link} from 'react-router-dom'
import {truncateText} from '@/shared/utils/truncateText'
import './style.scss'

type Props = {
  img?: string
  title: string
  text: string
}

export type VideoCardDataType = {
  id: number
  img?: string
  title: string
  text: string
}

const VideoCard = ({img, title, text}: Props) => {
  return (
    <Link className="videocard" to={''}>
      <div className="videocard__image-wrapper">
        <img src={img} alt={title} className="videocard__image" />
        <h2 className="videocard__title">{title}</h2>
      </div>

      <p className="videocard__text">{truncateText(text, 100)}</p>
    </Link>
  )
}

export default VideoCard
