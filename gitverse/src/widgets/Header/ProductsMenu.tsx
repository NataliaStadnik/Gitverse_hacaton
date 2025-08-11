import './style.scss'
import {FC, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ProductInMenuType} from './HeaderLink'

interface ProductsMenuProps {
  isOpen: boolean
  setOpen: (a: boolean) => void
  elem: ProductInMenuType
}

const ProductsMenu: FC<ProductsMenuProps> = ({isOpen, setOpen, elem}) => {
  const navigation = useNavigate()
  const [isHover, setHover] = useState('')

  return (
    <li>
      <Link
        className={`products-menu__item ${isHover ? 'products-menu__item--active' : ''}`}
        to={elem.to}
        onClick={() => {
          setOpen(!isOpen)
          navigation(elem.to)
        }}
        onMouseEnter={() => setHover(elem.hoverClass)}
        onMouseLeave={() => setHover('')}
      >
        {elem.svg(isHover)}
        <span>{elem.name}</span>
      </Link>
    </li>
  )
}

export default ProductsMenu
