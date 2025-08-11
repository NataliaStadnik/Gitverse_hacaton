import {FC} from 'react'
import './style.scss'
import {categoriesTags, CategoriesTagsType} from '@/shared'

interface AsideNavigationProps {
  items?: CategoriesTagsType[]
  active?: string
  setTypeSearch: (a: string) => void
}

const AsideNavigation: FC<AsideNavigationProps> = ({
  items = categoriesTags,
  active = categoriesTags[0].name,
  setTypeSearch,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTypeSearch(e.currentTarget.textContent || '')
  }

  return (
    <ul className="aside-nav">
      {items.map((elem) => (
        <li className="aside-nav__item" key={elem.name}>
          <button
            className={`aside-nav__btn ${!elem.svg ? 'aside-nav__circle' : 'aside-nav__svg'} ${active === elem.name ? 'aside-nav__btn--active' : ''}`}
            onClick={handleClick}
          >
            {elem?.svg}
            <span>{elem.name}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default AsideNavigation
