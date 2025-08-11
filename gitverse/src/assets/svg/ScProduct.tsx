import {FC} from 'react'
import {SvgProps} from './svgProps'

const ScProduct: FC<SvgProps> = ({classes}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <defs>
        <radialGradient
          id="scproduct-gradient"
          cx="8"
          cy="8"
          r="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(81, 122, 231, 1)" />
          <stop offset="25%" stopColor="rgba(110, 61, 150, 1)" />
          <stop offset="75%" stopColor="rgba(62, 115, 216, 1)" />
          <stop offset="100%" stopColor="rgba(68, 165, 255, 1)" />
        </radialGradient>
        <clipPath id="clip0_5421_57133">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_5421_57133)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.57895 10.2815C7.57895 12.5107 6.36842 13.7142 3.63158 13.7142C2.14737 13.7142 0.91579 13.3898 0.157895 12.9502V10.3443C0.663158 10.7943 1.85263 11.4222 3.47368 11.4222C4.62105 11.4222 5.02105 11.035 5.02105 10.4384C5.02105 8.39763 0 9.4128 0 5.57188C0 3.46827 1.17895 2.28564 3.94737 2.28564C5.24211 2.28564 6.41053 2.51589 7.10526 2.84033V5.44629C6.36842 4.89161 5.21053 4.57764 4.10526 4.57764C2.87368 4.57764 2.55789 4.89161 2.55789 5.4149C2.55789 7.29873 7.57895 6.28355 7.57895 10.2815Z"
          fill={classes === 'active' ? 'url(#scproduct-gradient)' : '#999DA3'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0002 13.0967C16.0002 13.0967 14.8844 13.7142 13.2318 13.7142C9.67389 13.7142 8.10547 12.1548 8.10547 7.92667C8.10547 3.93923 9.7581 2.28564 13.2318 2.28564C14.7265 2.28564 16.0002 2.84033 16.0002 2.84033V5.28931C15.3897 4.91254 14.5686 4.57764 13.316 4.57764C11.516 4.57764 10.6528 5.43583 10.6528 7.92667C10.6528 10.5745 11.516 11.4222 13.316 11.4222C14.5686 11.4222 15.4949 11.0245 16.0002 10.6478V13.0967Z"
          fill={classes === 'active' ? 'url(#scproduct-gradient)' : '#999DA3'}
        />
      </g>
      <defs>
        <clipPath id="clip0_5421_57133">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ScProduct
