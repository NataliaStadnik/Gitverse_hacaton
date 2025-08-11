import {FC} from 'react'
import './style.scss'
import {ArrowBtn} from '@/assets/svg'

interface ArrowButtonProps {
  text: string
  filterClick: (x: boolean) => void
  tagsDrop: boolean
  updateBtnText?: string
}

const ArrowButton: FC<ArrowButtonProps> = ({
  text,
  filterClick,
  tagsDrop,
  updateBtnText = 'Свернуть',
}) => {
  return (
    <button
      className={`clicker-btn ${tagsDrop ? 'clicker-btn--active' : ''}`}
      onClick={() => filterClick(!tagsDrop)}
    >
      <span>{tagsDrop ? updateBtnText : text}</span>
      <ArrowBtn />
    </button>
  )
}

export default ArrowButton
