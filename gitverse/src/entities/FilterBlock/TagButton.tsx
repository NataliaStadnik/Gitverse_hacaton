import {Cross} from '@/assets/svg'
import {ArticleLabel} from '@/shared'
import {FC} from 'react'

interface TagButtonProps {
  text: string
  handleRemoveTag: (a: string) => void
  handleTagClick: (a: string) => void
  isActive: boolean
}

const TagButton: FC<TagButtonProps> = ({
  text,
  handleRemoveTag,
  handleTagClick,
  isActive,
}) => {
  return (
    <li>
      <div className={`tag-btn ${isActive ? 'tag-btn__active' : ''}`}>
        <ArticleLabel text={text} />

        {isActive ? (
          <button className="cross-btn" onClick={() => handleRemoveTag(text)}>
            <Cross />
          </button>
        ) : (
          <button
            className="over-btn"
            onClick={() => handleTagClick(text)}
          ></button>
        )}
      </div>
    </li>
  )
}

export default TagButton
