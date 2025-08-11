import {Link} from 'react-router-dom'
import './style.scss'
import {FC} from 'react'

interface ButtonProps {
  text: string
  linkTo: string
}

const Button: FC<ButtonProps> = ({text, linkTo}) => {
  return (
    <Link className="btn" to={linkTo}>
      {text}
    </Link>
  )
}

export default Button
