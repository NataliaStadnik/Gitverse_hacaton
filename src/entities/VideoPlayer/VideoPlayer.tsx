import {useParams} from 'react-router-dom'
import './style.scss'
import {VideoCardArray} from '@/widgets'
import Back from './svg/Back'
import Play from './svg/Play'
import Forward from './svg/Forward'
import Next from './svg/Next'
import Mute from './svg/Mute'
import Settings from './svg/Settings'
import Resize from './svg/Resize'
import Window from './svg/Window'
import WindowDot from './svg/WindowDot'
import {CurlyArrow, Flag, Heart} from '@/assets/svg'

const VideoPlayer = () => {
  const {id} = useParams()

  if (!id) return null
  const data = VideoCardArray.find((elem) => elem.id === parseInt(id))

  return (
    <section className="video-player" id="#video-player">
      <div className="video-player__wrapper">
        <img className="video-player__img" src={data?.img} alt="video" />
        <div className="video-player__label">
          <img src={data?.svg} alt="label" />
          <div className="video-player__podcast">
            <span>{data?.podcast.split(' ')[0]}</span>
            <span>{data?.podcast.split(' ').slice(1).join(' ')}</span>
          </div>
        </div>
        <button className="video-player__play">
          <Play />
        </button>

        <div className="navigo-wrapper">
          <input className="video-range" type="range" name="range" id="" />
          <div className="video-player__nav">
            <ul className="video-player__nav-list">
              {[<Back />, <Play />, <Forward />, <Next />, <Mute />].map(
                (elem, i) => (
                  <li key={i}>
                    <button>{elem}</button>
                  </li>
                )
              )}
            </ul>

            <p className="video-player__time">01:06/42:30</p>

            <ul className="video-player__nav-list">
              {[<Settings />, <Resize />, <Window />, <WindowDot />].map(
                (elem, i) => (
                  <li key={i}>
                    <button>{elem}</button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="outer-hover"></div>
      </div>

      <div className="video-player__statistic">
        <button>
          <Heart />
          <span>257</span>
        </button>
        <button>
          <Flag />
          <span>{data?.saved}</span>
        </button>
        <button>
          <CurlyArrow />
        </button>
      </div>

      <p className="video-player__descr">{data?.text}</p>
    </section>
  )
}

export default VideoPlayer
