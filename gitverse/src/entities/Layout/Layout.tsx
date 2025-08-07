import {FC, JSX} from 'react'
import './style.scss'
import {DogHelper} from '@/shared'

interface LayoutProps {
  children: JSX.Element
  message: string
  pageTitle: string
}

const Layout: FC<LayoutProps> = ({children, message, pageTitle}) => {
  return (
    <div className="container">
      <div className="layout">
        <div className="layout__header">
          <p>breadcrumbs</p>
          <DogHelper message={message} />
        </div>

        <h2 className="title">{pageTitle}</h2>
        <div className="layout__wrapper">{children}</div>
      </div>
    </div>
  )
}

export default Layout
