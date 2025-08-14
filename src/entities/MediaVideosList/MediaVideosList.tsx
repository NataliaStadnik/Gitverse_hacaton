import {AppRouter, MediaSubpagesEnum} from '@/shared'
import './style.scss'
import {ExtendedVideoCardDataType} from '@/widgets'
import {FC} from 'react'
import {useParams} from 'react-router-dom'
import {VideoCard} from '@/entities'
import TopMediaCard from './TopMediaCard'

interface MediaVideosListProps {
  dataVideos: ExtendedVideoCardDataType[]
}

const MediaVideosList: FC<MediaVideosListProps> = ({dataVideos}) => {
  const {category} = useParams()

  const isValidCategory = (
    value: string | undefined
  ): value is MediaSubpagesEnum =>
    Object.values(MediaSubpagesEnum).includes(value as MediaSubpagesEnum)

  const safeCategory: MediaSubpagesEnum = isValidCategory(category)
    ? category
    : MediaSubpagesEnum.Popular

  return (
    <ul className="media-list">
      {dataVideos.map((card) => (
        <li key={card.id}>
          <VideoCard
            key={card.id}
            to={AppRouter.mediaVideo.path(safeCategory, card.id.toString())}
            id={card.id}
            img={card.img}
            title={card.title}
            text={card.text}
            category={card.category}
            children={
              <TopMediaCard
                podcast={card?.podcast}
                saved={card.saved}
                svg={card.svg}
              />
            }
          />
        </li>
      ))}
    </ul>
  )
}

export default MediaVideosList
