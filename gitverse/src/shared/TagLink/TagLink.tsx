import {FC} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

interface TagLinkProps {
  text: string
}

const TagLink: FC<TagLinkProps> = ({text}) => {
  return (
    <Link className="tag-link" to={''}>
      #{text}
    </Link>
  )
}

export default TagLink
