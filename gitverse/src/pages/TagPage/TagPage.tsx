import {FilterBlock, Layout, SearchList} from '@/entities'
import {AsideNavigation} from '@/widgets'
import {asideItemsMunu} from '../SearchResult/SearchResult'
import {useParams} from 'react-router-dom'

const TagPage = () => {
  const {text} = useParams()

  return (
    <Layout
      message={'Контекстное автодополнение слов, строк и целых функций'}
      pageTitle={text || ''}
    >
      <>
        <AsideNavigation
          items={asideItemsMunu}
          active={asideItemsMunu[0].name}
        />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default TagPage
