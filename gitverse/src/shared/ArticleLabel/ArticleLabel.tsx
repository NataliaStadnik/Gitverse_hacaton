import { FC } from 'react'
import './style.scss'

interface ArticleLabelProps {
  text: string
}

const ArticleLabel:FC<ArticleLabelProps> = ({text}) => {
  return (
   <div className='article-label'>{text}</div>
  )
}

export default ArticleLabel
