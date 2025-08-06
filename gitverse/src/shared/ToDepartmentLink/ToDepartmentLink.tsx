import {Link} from 'react-router-dom'
import './style.scss'
import {FC} from 'react'

interface ToDepartmentLinkProps {
  text: string
  to: string
}

const ToDepartmentLink: FC<ToDepartmentLinkProps> = ({text, to}) => {
  return <Link className='department-link' to={to}>{text}</Link>
}

export default ToDepartmentLink
