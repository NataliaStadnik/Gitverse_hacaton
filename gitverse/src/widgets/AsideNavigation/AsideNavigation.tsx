import {FC, JSX, useState} from 'react'
import './style.scss'

export type AsideMenuType = {
  name: string
  svg?: JSX.Element
}

interface AsideNavigationProps {
  items: AsideMenuType[]
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
        <li className="aside-nav__item" key={elem.name}>
          <button
            className={`aside-nav__btn ${!elem.svg ? 'aside-nav__circle' : 'aside-nav__svg'} ${typeSearch === elem.name ? 'aside-nav__btn--active' : ''}`}
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
