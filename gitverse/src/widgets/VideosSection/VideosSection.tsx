import {ToDepartmentLink} from '@/shared'
import './style.scss'

const VideosSection = () => {
  return (
    <section className="videos-section">
      <div className="container videos-section__container">
        <div className="top-section">
          <h2 className="title">Видео</h2>
          <ToDepartmentLink text="В раздел" to={''} />
        </div>
      </div>
    </section>
  )
}

export default VideosSection
