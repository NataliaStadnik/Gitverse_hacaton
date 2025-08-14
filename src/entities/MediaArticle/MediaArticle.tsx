import {VideoCardArray} from '@/widgets'
import './style.scss'
import VideoCard from '../VideoCard/VideoCard'

const MediaArticle = () => {
  return (
    <div className="videos-section__cards">
      {VideoCardArray.map((card) => (
        <VideoCard
          key={card.id}
          img={card.img}
          title={card.title}
          text={card.text}
          category={card.category}
        />
      ))}
    </div>
  )
}

export default MediaArticle
