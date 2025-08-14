import {AppRouter, ToDepartmentLink} from '@/shared'
import './style.scss'
import {VideoCardDataType} from '@/entities/VideoCard/VideoCard'
import VideoCard from '@/entities/VideoCard/VideoCard'
import video1 from '@/assets/images/video-img1.png'
import video2 from '@/assets/images/video-img2.png'
import video3 from '@/assets/images/video-img3.png'
import video4 from '@/assets/images/video-img4.png'
import video5 from '@/assets/images/video-img5.png'
import video6 from '@/assets/images/video-img6.png'

const VideoCardArray: VideoCardDataType[] = [
  {
    id: 1,
    img: video1,
    title: 'Git для начинающих',
    text: 'История из практики с разбором типичных ошибок и советами по предотвращению потери данных в командной работе',
    category: 'Гайд',
  },
  {
    id: 2,
    img: video2,
    title: 'GitLab и GitHub',
    text: 'Обзор ключевых возможностей обеих платформ, их отличия и советы по выбору для разных сценариев командной работы',
    category: 'Гайд',
  },
  {
    id: 3,
    img: video3,
    title: 'Open Sourse. Как начать',
    text: 'Гайд для новичков по поиску open source проектов, оформлению pull request’ов и взаимодействию с сообществом',
    category: 'Обзоры',
  },
  {
    id: 4,
    img: video4,
    title: 'Как Git спас команду от потери кода',
    text: 'История из практики с разбором типичных ошибок и советами по предотвращению потери данных в командной работе',
    category: 'Обзоры',
  },
  {
    id: 5,
    img: video5,
    title: 'Автоматизация сборки и деплоя с помощью GitHub Actions',
    text: 'Практический разбор настройки пайплайнов CI/CD для автоматической сборки и деплоя проектов на GitHub',
    category: 'Обзоры',
  },
  {
    id: 6,
    img: video6,
    title: 'Git HooksКак автоматизировать задачи ',
    text: 'Настройка и применение Git Hooks для проверки кода, автоматического форматирования и других задач до и после коммитов',
    category: 'Обзоры',
  },
]

type Props = {
  headingSection: string
  headingSectionClassName: string
  to: string
}
const VideosSectionSmall = ({
  headingSectionClassName,
  headingSection,
  to
}: Props) => {
  const randomThreeCards = [...VideoCardArray]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <section className="videos-section">
      <div className="container videos-section__container">
        <div className="top-section">
          <h2 className={headingSectionClassName}>{headingSection}</h2>
          <ToDepartmentLink text="В раздел" to={to} />
        </div>
        <div className="videos-section__cards">
          {randomThreeCards.map((card) => (
            <VideoCard
              key={card.id}
              img={card.img}
              title={card.title}
              text={card.text}
              category={card.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideosSectionSmall
