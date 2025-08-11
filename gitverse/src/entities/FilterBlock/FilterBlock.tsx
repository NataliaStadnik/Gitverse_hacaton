import {useLocation} from 'react-router-dom'
import './style.scss'
import {FC, useState} from 'react'
import SortingBlock from '../SortingBlock/SortingBlock'
import TagButton from './ui/TagButton'
import {ArrowButton} from '@/shared'

interface FilterBlockProps {
  allTags: string[]
  tagsDrop: boolean
  setTagsDrop: (a: boolean) => void
  reset: () => void
  handleRemoveTag: (a: string) => void
  handleTagClick: (a: string) => void
  selectedTags: string[]
}

const levelOptions = ['Новичок', 'Профи', 'Все уровни']
const sortingOptions = [
  'Сначала популярные',
  'Сначала последние',
  'Высокий рейтинг',
  'Много просмотров',
]

const FilterBlock: FC<FilterBlockProps> = ({
  allTags,
  tagsDrop,
  setTagsDrop,
  reset,
  handleRemoveTag,
  handleTagClick,
  selectedTags,
}) => {
  const {pathname} = useLocation()
  const isTagPage = pathname.startsWith('/tag')

  const [isLevelOpen, setLevelOpen] = useState(false)
  const [isSortingOpen, setSortingOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0])
  const [selectedLevel, setSelectedLevel] = useState('Выбрать уровень')

  const closeAll = () => {
    setLevelOpen(false)
    setSortingOpen(false)
    setTagsDrop(false)
  }

  const toggleModal = (type: 'level' | 'sort' | 'tags', value: boolean) => {
    closeAll()
    if (type === 'level') setLevelOpen(value)
    if (type === 'sort') setSortingOpen(value)
    if (type === 'tags') setTagsDrop(value)
  }

  const handleSelectLevel = (value: string) => {
    setSelectedLevel(value)
    setLevelOpen(false)
  }

  const handleSelectSort = (value: string) => {
    setSelectedSort(value)
    setSortingOpen(false)
  }

  return (
    <div className="filter-outer">
      <div className="filter-block">
        <div
          className={`filter-block__wrapper ${!isTagPage ? '' : 'filter-block__wrapper--big'}`}
        >
          <ArrowButton
            text={selectedSort}
            filterClick={(val) => toggleModal('sort', val)}
            tagsDrop={isSortingOpen}
            updateBtnText={selectedSort}
          />

          <ArrowButton
            text={selectedLevel}
            filterClick={(val) => toggleModal('level', val)}
            tagsDrop={isLevelOpen}
            updateBtnText={selectedLevel}
          />
        </div>

        {!isTagPage && (
          <ArrowButton
            text="Выбрать хэштеги"
            filterClick={(val) => toggleModal('tags', val)}
            tagsDrop={tagsDrop}
          />
        )}
      </div>

      {isLevelOpen && (
        <SortingBlock
          options={levelOptions}
          isOpen={isLevelOpen}
          setSorting={handleSelectLevel}
          activeState={selectedLevel}
        />
      )}

      {isSortingOpen && (
        <SortingBlock
          options={sortingOptions}
          isOpen={isSortingOpen}
          setSorting={handleSelectSort}
          activeState={selectedSort}
        />
      )}

      {tagsDrop && (
        <div
          className={`tags-wrapper ${tagsDrop ? 'tags-wrapper--expanded' : 'tags-wrapper--collapsed'}`}
        >
          <ul className={`tags-list`}>
            {allTags.map((elem) => (
              <TagButton
                key={elem}
                text={elem}
                handleRemoveTag={handleRemoveTag}
                handleTagClick={handleTagClick}
                isActive={selectedTags.includes(elem)}
              />
            ))}
          </ul>
          <button className="reset-btn" onClick={reset}>
            Сбросить все
          </button>
        </div>
      )}
    </div>
  )
}

export default FilterBlock
