import { FC } from "react"
import { SvgProps } from "./svgProps"

const Search:FC<SvgProps> = ({colour}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M21.9446 22.4212C23.5181 20.8477 24.4913 18.674 24.4913 16.273C24.4913 11.471 20.5985 7.57812 15.7964 7.57812C10.9944 7.57812 7.10156 11.471 7.10156 16.273C7.10156 21.0751 10.9944 24.9679 15.7964 24.9679C18.1975 24.9679 20.3712 23.9947 21.9446 22.4212ZM21.9446 22.4212L25.945 26.4215"
        stroke={colour}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
