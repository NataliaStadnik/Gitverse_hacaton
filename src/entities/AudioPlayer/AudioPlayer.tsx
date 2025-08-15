import {Clock, Eye, Timer, Triangle} from '@/assets/svg'
import './style.scss'

const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <div className="audio-player__wrapper">
        <button className="audio-player__play">
          <Triangle />
        </button>
        <p className="audio-player__play--text">Прослушать статью</p>
        <Timer />
      </div>
      <div className="audio-player__wrapper">
        <span className="audio-player__time">00:00</span>
        <div className="audio-player__range"></div>
        <span className="audio-player__time">20:00</span>
      </div>
      <div className="audio-player__wrapper">
        <div className="audio-player__info">
          <Clock />
          <span>20 минут</span>
        </div>
        <div className="audio-player__info">
          <Eye /> <span>128</span>
        </div>
        <span>2 Июня, 2025</span>
      </div>
    </div>
  )
}

export default AudioPlayer
