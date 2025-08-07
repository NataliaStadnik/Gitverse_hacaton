import {Link, useLocation} from 'react-router-dom'
import './style.scss'
import {MenuLinkType} from './Header'
import {FC} from 'react'

interface HeaderLinkProps {
  elem: MenuLinkType
}

const HeaderLink: FC<HeaderLinkProps> = ({elem}) => {
  const location = useLocation()

  return (
    <li
      className={`${
        location.pathname === elem.to
          ? 'menu-list__item--active'
          : 'menu-list__item'
      } ${elem.name === 'Продукты' ? 'menu-list__extra' : ''}`}
    >
      <Link to={elem.to}>{elem.name}</Link>
    </li>
  )
}

export default HeaderLink
