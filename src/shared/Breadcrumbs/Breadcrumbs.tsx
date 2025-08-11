import {FC} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

export type BreadcrumbType = {
  text: string
  to: string
}

interface BreadcrumbsProps {
  links: BreadcrumbType[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({links}) => {
  return (
    <div className="breadcrumbs">
      {links.map((elem) => (
        <Link key={elem.text} to={elem.to}>
          {elem.text}
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumbs
