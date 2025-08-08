import {Cross} from '@/assets/svg'
import {ArticleLabel} from '@/shared'
import {FC, useState} from 'react'

interface TagButtonProps {
  text: string
}

const TagButton: FC<TagButtonProps> = ({text}) => {
  const [isActive, setActive] = useState(false)

  return (
    <li>
      <div className={`tag-btn ${isActive ? 'tag-btn__active' : ''}`}>
        <ArticleLabel text={text} />

        {isActive ? (
          <button className="cross-btn" onClick={() => setActive(false)}>
            <Cross />
          </button>
        ) : (
          <button className="over-btn" onClick={() => setActive(true)}></button>
        )}
      </div>
    </li>
  )
}

export default TagButton
