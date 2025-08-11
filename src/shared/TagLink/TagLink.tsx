import {FC} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import {AppRouter} from '../config/routeConfig'

interface TagLinkProps {
  text: string
}

const TagLink: FC<TagLinkProps> = ({text}) => {
  return (
    <Link className="tag-link" to={AppRouter.tag.path(text)}>
      #{text}
    </Link>
  )
}

export default TagLink
