import {FC} from 'react'
import {SvgProps} from './svgProps'

const Sun: FC<SvgProps> = ({colour = '#707D8F', classes}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={classes}
    >
      <path
        d="M11 21V19.0303M19.1884 11.4545H21M1 11.4545H2.81159M16.8333 6L18.5 4.33333M3.5 4.33333L5.16667 6M3.5 18.5L5.16667 16.8333M16.8333 16.8333L18.5 18.5M11 2.9697V1M15.7826 11C15.7826 13.7614 13.6414 16 11 16C8.35864 16 6.21739 13.7614 6.21739 11C6.21739 8.23858 8.35864 6 11 6C13.6414 6 15.7826 8.23858 15.7826 11Z"
        stroke={colour}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Sun
