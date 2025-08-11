import {Link, useLocation} from 'react-router-dom'
import './style.scss'
import {MenuLinkType} from './Header'
import {FC, JSX, useState} from 'react'
import ProductsMenu from './ProductsMenu'
import {AppRouter, ArrowButton} from '@/shared'
import {GlobeProduct, GProduct, ScProduct} from '@/assets/svg'

interface HeaderLinkProps {
  elem: MenuLinkType
  isButton?: boolean
}

export type ProductInMenuType = {
  name: string
  svg: (isHover: string) => JSX.Element
  to: string
  hoverClass: string
}

const ProductsList: ProductInMenuType[] = [
  {
    name: 'Giga IDE',
    svg: (isHover: string) => <GProduct classes={isHover} />,
    to: AppRouter.productGigaIDE.path,
    hoverClass: 'active',
  },
  {
    name: 'Giga IDE Cloud',
    svg: (isHover: string) => <GProduct classes={isHover} />,
    to: AppRouter.productGigaCloude.path,
    hoverClass: 'active-red',
  },
  {
    name: 'Smart Class',
    svg: (isHover: string) => <ScProduct classes={isHover} />,
    to: AppRouter.productSmartClass.path,
    hoverClass: 'active',
  },
  {
    name: 'Giga Code',
    svg: (isHover: string) => <GlobeProduct classes={isHover} />,
    to: AppRouter.productGigaCode.path,
    hoverClass: 'active',
  },
]

const HeaderLink: FC<HeaderLinkProps> = ({elem, isButton}) => {
  const location = useLocation()
  const [isOpen, setOpen] = useState(false)

  return (
    <li
      className={`${
        location.pathname === elem.to
          ? 'menu-list__item--active'
          : 'menu-list__item'
      } ${elem.name === 'Продукты' ? 'menu-list__extra' : ''}`}
    >
      {isButton ? (
        <ArrowButton
          text={elem.name}
          filterClick={setOpen}
          tagsDrop={isOpen}
          updateBtnText={elem.name}
        />
      ) : (
        <Link to={elem.to}>{elem.name}</Link>
      )}

      {isOpen && (
        <div
          className={`products-menu tags-wrapper ${isOpen ? 'tags-wrapper--expanded' : 'tags-wrapper--collapsed'}`}
        >
          <ul className="products-menu__list">
            {ProductsList.map((elem) => (
              <ProductsMenu
                key={elem.name}
                isOpen={isOpen}
                setOpen={setOpen}
                elem={elem}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default HeaderLink
