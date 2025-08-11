import {FC} from 'react'
import './style.scss'

interface SortingBlockProps {
  options: string[]
  isOpen: boolean
  setSorting: (a: string) => void
  activeState: string
}

const SortingBlock: FC<SortingBlockProps> = ({
  options,
  isOpen,
  setSorting,
  activeState,
}) => {
  return (
    <div
      className={`sorting-block tags-wrapper ${isOpen ? 'tags-wrapper--expanded' : 'tags-wrapper--collapsed'}`}
    >
      <ul className="sorting-block__list">
        {options.map((elem) => (
          <li key={elem}>
            <button
              className={`sorting-block__btn ${activeState === elem ? 'sorting-block__btn--active' : ''}`}
              onClick={() => setSorting(elem)}
            >
              {elem}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortingBlock
