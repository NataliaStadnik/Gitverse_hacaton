import {CurlyArrow, Flag, Heart} from '@/assets/svg'
import './style.scss'

const Statistic = () => {
  return (
    <div className="common-statistic">
      <button>
        <Heart />
        <span>257</span>
      </button>
      <button>
        <Flag />
        <span>5</span>
      </button>
      <button>
        <CurlyArrow />
      </button>
    </div>
  )
}

export default Statistic
