import {FC} from 'react'
import {SvgProps} from './svgProps'

const Moon: FC<SvgProps> = ({classes, colour = '#8191A8'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      className={classes}
    >
      <path
        d="M9.50765 21C15.311 21 20.0156 16.5229 20.0156 11.0001C20.0156 5.47737 15.311 1.00028 9.50765 1.00028C9.46945 1.00028 9.45698 1.05056 9.49049 1.06891C12.2918 2.60348 14.1779 5.48111 14.1779 8.77795C14.1779 13.6871 9.99602 17.6667 4.83744 17.6667C3.66026 17.6667 2.53394 17.4595 1.49658 17.0812C1.36554 17.0335 1.25045 17.187 1.34089 17.2932C1.54928 17.5378 1.76955 17.7728 2.00088 17.9975C3.90818 19.8503 6.56684 21 9.50765 21Z"
        stroke={colour}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default Moon
