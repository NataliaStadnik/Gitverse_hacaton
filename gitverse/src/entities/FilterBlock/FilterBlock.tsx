import {useLocation} from 'react-router-dom'
import './style.scss'
import FIlterButton from './FIlterButton'
import TagButton from './TagButton'
import {FC} from 'react'

interface FilterBlockProps {
  allTags: string[]
  tagsDrop: boolean
  setTagsDrop: (a: boolean) => void
}

const FilterBlock: FC<FilterBlockProps> = ({
  allTags,
  tagsDrop,
  setTagsDrop,
}) => {
  const {pathname} = useLocation()
  const location = pathname.startsWith('/tag')

  return (
    <div className="filter-outer">
      <div className="filter-block">
        <div
          className={`filter-block__wrapper ${!location ? '' : 'filter-block__wrapper--big'}`}
        >
          {['Сначала популярные', 'Выбрать уровень'].map((elem) => (
            <FIlterButton key={elem} text={elem} />
          ))}
        </div>
        {!location && (
          <FIlterButton
            text={'Выбрать хэштеги'}
            filterClick={setTagsDrop}
            tagsDrop={tagsDrop}
          />
        )}
      </div>
      {tagsDrop && (
        <div
          className={`tags-wrapper ${tagsDrop ? 'tags-wrapper--expanded' : 'tags-wrapper--collapsed'}`}
        >
          <ul className={`tags-list`}>
            {allTags.map((elem) => (
              <TagButton key={elem} text={elem} />
            ))}
          </ul>
          <button className="reset-btn">Сбросить все</button>
        </div>
      )}
    </div>
  )
}

export default FilterBlock
