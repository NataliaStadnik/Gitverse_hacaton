import {FC} from 'react'

type NewsSliderArrowProps = {
  active: boolean
  theme: 'light' | 'dark'
  direction: 'left' | 'right'
}

const NewsSliderArrow: FC<NewsSliderArrowProps> = ({
  active,
  theme,
  direction,
}) => {
  const bgColor =
    theme === 'light'
      ? active
        ? '#D0D9DF'
        : '#DEE8F5'
      : active
        ? '#6C747D'
        : '#30363D'

  const strokeColor =
    theme === 'light'
      ? active
        ? '#707D8F'
        : '#D0D9DF'
      : active
        ? '#C9D1D9'
        : '#8191A8'

  const rotation = direction === 'left' ? 'rotate(180 17 17.5)' : undefined

  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.148438" width="34" height="34" rx="17" fill={bgColor} />
      <g transform={rotation}>
        <path
          d="M14.7598 13.1172L19.2389 17.1484L14.7598 21.1797"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default NewsSliderArrow
