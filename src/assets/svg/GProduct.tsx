import {FC} from 'react'
import {SvgProps} from './svgProps'

const GProduct: FC<SvgProps> = ({classes}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="16"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(32, 190, 222, 1)" />
          <stop offset="100%" stopColor="rgba(74, 11, 255, 1)" />
        </linearGradient>
        <clipPath id="clip0_5421_57132">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>

      <defs>
        <linearGradient
          id="gproduct-gradient"
          x1="0"
          y1="0"
          x2="16"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(192, 128, 96, 1)" />
          <stop offset="10%" stopColor="rgba(192, 96, 160, 1)" />
          <stop offset="90%" stopColor="rgba(255, 32, 64, 1)" />
          <stop offset="100%" stopColor="rgba(255, 128, 0, 1)" />
        </linearGradient>
        <clipPath id="clip0_5421_57132">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>

      <g clipPath="url(#clip0_5421_57132)">
        <mask
          id="mask0_5421_57132"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path d="M15.9502 0H0V16H15.9502V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_5421_57132)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0756 9.02993H8.60331C8.60331 9.02993 8.5734 9.02993 8.5734 8.99993L8.61328 7.30993C8.61328 7.30993 8.63322 7.24993 8.65315 7.24993H15.8407C15.9504 7.24993 16.0002 8.09993 16.0002 7.44993L15.9504 13.6499C15.9504 13.6999 15.9404 13.7399 15.9105 13.7699C15.8905 13.7999 15.8606 13.8199 15.8208 13.8199H11.913C11.8532 13.8199 11.8232 13.7799 11.8232 13.7099L11.8033 12.7899C11.7933 12.7399 11.7834 12.7299 11.7535 12.7499C10.2781 13.7999 8.69303 14.0499 7.0382 13.9899C4.31671 13.8799 0.847547 13.2099 0.139759 9.14993C-0.0396808 8.14993 -0.0396808 7.04993 0.12979 5.85993C0.757827 1.78993 4.29677 1.06993 6.96842 1.00993C9.9192 0.939926 15.6313 0.819926 15.9304 6.21993C15.9304 6.24993 15.9204 6.27993 15.9005 6.29993C15.9005 6.31993 15.8706 6.33993 15.8407 6.33993H11.3049C11.3049 6.33993 11.2451 6.31993 11.2351 6.27993C10.9161 5.19993 9.96904 4.89993 9.1815 4.82993C7.97527 4.71993 6.23072 4.59993 5.32356 5.44993C4.34661 6.36993 4.33664 8.62993 5.3435 9.52993C5.99147 10.1099 6.80892 10.1599 7.70611 10.1899H7.71608C8.73291 10.2199 10.4077 10.2699 11.1055 9.10993C11.1454 9.05993 11.1354 9.02993 11.0756 9.02993Z"
            fill={
              classes === 'active'
                ? 'url(#gradient)'
                : classes === 'active-red'
                  ? 'url(#gproduct-gradient)'
                  : '#999DA3'
            }
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_5421_57132">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default GProduct
