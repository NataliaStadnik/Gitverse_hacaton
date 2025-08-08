import {FilterBlock, Layout, SearchList} from '@/entities'
import './style.scss'
import {AsideMenuType, AsideNavigation} from '@/widgets'
import {
  AiML,
  AllCategories,
  Architecture,
  Career,
  Cases,
  Datas,
  Development,
  OpenSource,
  Safety,
  UI,
} from '@/assets/svg'

const asideMenuItems: AsideMenuType[] = [
  {
    name: 'Все категории',
    svg: <AllCategories />,
  },
  {
    name: 'Архитектура',
    svg: <Architecture />,
  },
  {name: 'Данные', svg: <Datas />},
  {name: 'Карьера', svg: <Career />},
  {name: 'Разработка', svg: <Development />},
  {name: 'AI/ML', svg: <AiML />},
  {name: 'Open Source', svg: <OpenSource />},
  {name: 'UX/UI', svg: <UI />},
  {name: 'Кейсы', svg: <Cases />},
  {name: 'Безопасность', svg: <Safety />},
]

const AllNewsPage = () => {
  return (
    <Layout
      message={'Пишу тесты и документацию, пока ты пьёшь кофе'}
      pageTitle="Новости"
    >
      <>
        <AsideNavigation
          items={asideMenuItems}
          active={asideMenuItems[0].name}
        />
        <div className="layout-inner">
          <FilterBlock />
          <SearchList />
        </div>
      </>
    </Layout>
  )
}

export default AllNewsPage
