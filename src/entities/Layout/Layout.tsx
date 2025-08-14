import {FC, JSX} from 'react'
import './style.scss'
import {Breadcrumbs, BreadcrumbType, DogHelper} from '@/shared'

interface LayoutProps {
  children: JSX.Element
  message: string
  pageTitle?: string
  breadcrumbs: BreadcrumbType[]
}

const Layout: FC<LayoutProps> = ({
  children,
  message,
  pageTitle,
  breadcrumbs,
}) => {
  return (
    <div className="container">
      <div className="layout">
        <div className="layout__header">
          <Breadcrumbs links={breadcrumbs} />
          <DogHelper message={message} />
        </div>

        {pageTitle && <h2 className="title">{pageTitle}</h2>}
        <div className="layout__wrapper">{children}</div>
      </div>
    </div>
  )
}

export default Layout
