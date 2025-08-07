import {FC, useState} from 'react'
import './style.scss'

interface AsideNavigationProps {
  items: string[]
  active: string
}

const AsideNavigation: FC<AsideNavigationProps> = ({items, active}) => {
  const [typeSearch, setTypeSearch] = useState(active)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTypeSearch(e.currentTarget.textContent || '')
  }

  return (
    <ul className="aside-nav">
      {items.map((elem) => (
        <li className="aside-nav__item" key={elem}>
          <button
            className={`aside-nav__btn ${typeSearch === elem ? 'aside-nav__btn--active' : ''}`}
            onClick={handleClick}
          >
            {elem}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default AsideNavigation
