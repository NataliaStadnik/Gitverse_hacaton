import {ArrowBtn} from '@/assets/svg'
import '../style.scss'
import {FC} from 'react'

interface FilterButtonProps {
  text: string
  filterClick: (x: boolean) => void
  tagsDrop: boolean
  updateBtnText?: string
}

const FIlterButton: FC<FilterButtonProps> = ({
  text,
  filterClick,
  tagsDrop,
  updateBtnText = 'Свернуть',
}) => {
  return (
    <button
      className={`filter-block__btn ${tagsDrop ? 'filter-block__btn--active' : ''}`}
      onClick={() => filterClick(!tagsDrop)}
    >
      <span>{tagsDrop ? updateBtnText : text}</span>
      <ArrowBtn />
    </button>
  )
}

export default FIlterButton
