import './style.scss'
import PodcastCard from '@/entities/PodcastCard/PodcastCard'
import Cup from '@/assets/images/CupIcon.svg'
import InfinityIcon from '@/assets/images/InfinityIcon.svg'
import Git from '@/assets/images/GitIcon.svg'
import PeopleIcon from '@/assets/images/PplIcon.svg'
import CodeIcon from '@/assets/images/CodeIcon.svg'
import Lock from '@/assets/images/LockIcon.svg'
import {PodcastCardDataType} from '@/entities/PodcastCard/PodcastCard'

const PodcastCardArray: PodcastCardDataType[] = [
  {
    id: 1,
    img: Git,
    title: 'GIT',
    subtitle: 'без паники',
  },
  {
    id: 2,
    img: Cup,
    title: 'DevOps',
    subtitle: 'за чашкой кофе',
  },
  {
    id: 3,
    img: Lock,
    title: 'open sourse',
    subtitle: 'изнутри',
  },
  {
    id: 4,
    img: PeopleIcon,
    title: 'командная разработка',
    text: 'лайфхаки',
  },
  {
    id: 5,
    img: InfinityIcon,
    title: 'СI/CD',
    subtitle: 'просто',
  },
  {
    id: 6,
    img: CodeIcon,
    title: 'инструменты программиста',
  },
]

export default function Podcasts() {
  return (
    <div className="podcast__container">
      <h1 className="podcast__title">Подкасты</h1>
      <div className="podcast__wrapper">
        {PodcastCardArray.map(({id, img, title, text, subtitle}) => (
          <PodcastCard
            key={id}
            title={title}
            text={text}
            img={img}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  )
}
