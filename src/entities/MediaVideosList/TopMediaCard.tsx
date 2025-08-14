import {FC} from 'react'
import './style.scss'
import {Flag} from '@/assets/svg'

interface TopMediaCard {
  svg: string
  podcast: string
  saved: number
}

const TopMediaCard: FC<TopMediaCard> = ({svg, saved, podcast}) => {
  return (
    <div className="top-media-card">
      <div className="top-media-card__podcast">
        <img src={svg} alt={podcast} />
        <div className="top-media-card__text">
          <span>{podcast.split(' ')[0]}</span>
          <span>{podcast.split(' ').slice(1).join(' ')}</span>
        </div>
      </div>
      <button className="top-media-card__flag">
        <Flag />
        <span className="">{saved}</span>
      </button>
    </div>
  )
}

export default TopMediaCard
