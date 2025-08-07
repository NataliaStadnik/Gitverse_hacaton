import {FC} from 'react'
import {SvgProps} from './svgProps'

const ArrowBtn: FC<SvgProps> = ({classes}) => {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
    >
      <path
        d="M8.75505 0.248075C9.03219 -0.059466 9.50686 -0.0845747 9.81462 0.192411C10.1222 0.469441 10.147 0.944162 9.87028 1.25198L5.83903 5.7305C5.6969 5.88842 5.49387 5.9794 5.28142 5.97952C5.06886 5.97952 4.86602 5.88845 4.7238 5.7305L0.692549 1.25198C0.415471 0.944117 0.440381 0.469512 0.748213 0.192411C1.05609 -0.0843601 1.53078 -0.0596489 1.80778 0.248075L5.28142 4.10745L8.75505 0.248075Z"
        fill="#707D8F"
      />
    </svg>
  )
}

export default ArrowBtn
