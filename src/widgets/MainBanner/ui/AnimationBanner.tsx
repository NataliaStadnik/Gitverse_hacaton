import {FC, JSX} from 'react'
import './style.scss'
import Github from './svg/Github'
import Gitlab from './svg/Gitlab'
import K from './svg/K'
import Git from './svg/Git'
import Docker from './svg/Docker'
import Js from './svg/Js'
import Python from './svg/Python'

interface AnimationBannerProps {
  svg: (isHover: string) => JSX.Element
  activeIndex: number
}

const AnimationBanner: FC<AnimationBannerProps> = ({svg, activeIndex}) => {
  console.log(activeIndex)
  return (
    <div className="animation-banner">
      <div className="boble boble__big">{svg('active')}</div>
      <div className={`boble boble__small boble__small--github${activeIndex}`}>
        {activeIndex === 1 ? <Python /> : <Github />}
      </div>
      <div className={`boble boble__small boble__small--gitlab${activeIndex}`}>
        <Gitlab />
      </div>
      <div className={`boble boble__small boble__small--K${activeIndex}`}>
        {activeIndex === 1 ? <Js /> : <K />}
      </div>
      <div className={`boble boble__small boble__small--git${activeIndex}`}>
        <Git />
      </div>
      <div className={`boble boble__small boble__small--docker${activeIndex}`}>
        <Docker />
      </div>
      <div
        className={`boble boble__small boble__small--empty${activeIndex}`}
      ></div>
    </div>
  )
}

export default AnimationBanner
