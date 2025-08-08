import {FC, JSX, useState} from 'react'
import './style.scss'
import {
  AiML,
  AllCategories,
  Architecture,
  Career,
  Cases,
  Datas,
  Development,
  OpenSource,
  Safety,
  UI,
} from '@/assets/svg'

export type AsideMenuType = {
  name: string
  svg?: JSX.Element
}

interface AsideNavigationProps {
  items?: AsideMenuType[]
  active?: string
}

const asideMenuItems: AsideMenuType[] = [
  {
    name: 'Все категории',
    svg: <AllCategories />,
  },
  {
    name: 'Архитектура',
    svg: <Architecture />,
  },
  {name: 'Данные', svg: <Datas />},
  {name: 'Карьера', svg: <Career />},
  {name: 'Разработка', svg: <Development />},
  {name: 'AI/ML', svg: <AiML />},
  {name: 'Open Source', svg: <OpenSource />},
  {name: 'UX/UI', svg: <UI />},
  {name: 'Кейсы', svg: <Cases />},
  {name: 'Безопасность', svg: <Safety />},
]

const AsideNavigation: FC<AsideNavigationProps> = ({
  items = asideMenuItems,
  active = asideMenuItems[0].name,
}) => {
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
