import {FC, ReactNode} from 'react'
import './style.scss'

interface NewsCardLabelProps {
  children: ReactNode
}

const NewsCardLabel: FC<NewsCardLabelProps> = ({children}) => {
  return <div className="newscard-label">{children}</div>
}

export default NewsCardLabel
