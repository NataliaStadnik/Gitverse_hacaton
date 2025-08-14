import {FC} from 'react'
import './style.scss'
import {AppRouter, categoriesTags, CategoriesTagsType} from '@/shared'
import {Link} from 'react-router-dom'

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
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    setTypeSearch(e.currentTarget.textContent || '')
  }

  return (
    <ul className="aside-nav">
      {items.map((elem) => (
        <li className="aside-nav__item" key={elem.name}>
          {elem.to ? (
            <Link
              className={`aside-nav__btn ${!elem.svg ? 'aside-nav__circle' : 'aside-nav__svg'} ${active === elem.name ? 'aside-nav__btn--active' : ''}`}
              onClick={handleClick}
              to={AppRouter.mediaSubpages.path(elem.to)}
            >
              {elem?.svg}
              <span>{elem.name}</span>
            </Link>
          ) : (
            <button
              className={`aside-nav__btn ${!elem.svg ? 'aside-nav__circle' : 'aside-nav__svg'} ${active === elem.name ? 'aside-nav__btn--active' : ''}`}
              onClick={handleClick}
            >
              {elem?.svg}
              <span>{elem.name}</span>
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default AsideNavigation
