import {Link} from 'react-router-dom'
import './style.scss'
import {FC} from 'react'
import {ArrowBtn} from '@/assets/svg'

interface ToDepartmentLinkProps {
  text: string
  to: string
}

const ToDepartmentLink: FC<ToDepartmentLinkProps> = ({text, to}) => {
  return (
    <Link className="department-link" to={to}>
      <span>{text}</span>
      <ArrowBtn classes="department-link__arrow" />
    </Link>
  )
}

export default ToDepartmentLink
