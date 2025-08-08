import {ArrowBtn} from '@/assets/svg'
import './style.scss'
import {FC} from 'react'

interface FilterButtonProps {
  text: string
  filterClick: (x: boolean) => void
  tagsDrop: boolean
}

const FIlterButton: FC<FilterButtonProps> = ({text, filterClick, tagsDrop}) => {
  return (
    <button
      className={`filter-block__btn ${tagsDrop ? 'filter-block__btn--active' : ''}`}
      onClick={() => filterClick(!tagsDrop)}
    >
      <span>{tagsDrop ? 'Свернуть' : text}</span>
      <ArrowBtn />
    </button>
  )
}

export default FIlterButton
