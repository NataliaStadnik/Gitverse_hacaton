import {useTheme} from '@/shared'

const Telegram = () => {
  const {theme} = useTheme()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <g clipPath="url(#clip0_5058_4561)">
        <mask
          id="mask0_5058_4561"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="17"
          height="17"
        >
          <path d="M16.5 0.5H0.5V16.5H16.5V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_5058_4561)">
          <path
            d="M10.5 7.16003L7.83 9.83003L11.83 13.83L14.5 3.16003L2.5 7.83003L5.16 9.16003L6.5 13.16L8.5 10.5"
            stroke={theme === 'light' ? '#E3E7EB' : '#8C929C'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_5058_4561">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Telegram
