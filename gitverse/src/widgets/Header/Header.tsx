import {AppRouter, useTheme} from '@/shared'
import './style.scss'
import {Account, LogoBlack, LogoLight, Moon, Search, Sun} from '@/assets/svg'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

type MenuLinkType = {
  name: string
  to: string
}

const mainMenu: MenuLinkType[] = [
  {name: 'Статьи', to: AppRouter.articles.path},
  {name: 'Новости', to: AppRouter.allNews.path},
  {name: 'Медиа', to: AppRouter.media.path},
]

const extraMenu: MenuLinkType[] = [
  {name: 'Продукты', to: AppRouter.products.path},
  {name: 'Документация', to: AppRouter.documentation.path},
  {name: 'Почему GitVerse', to: AppRouter.aboutGitVerse.path},
]

const Header = () => {
  const [valueSearch, setValueSearch] = useState('')
  const {toggleTheme, theme} = useTheme()
  const navigate = useNavigate()

  const handleSearch = () => {
    if (valueSearch) {
      navigate(AppRouter.searchResult.path)
    }
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link to={AppRouter.home.path}>
          {theme === 'light' ? <LogoLight /> : <LogoBlack />}
        </Link>

        <nav className="menu">
          <ul className="menu-list">
            {mainMenu.map((elem) => (
              <li key={elem.name}>
                <Link to={elem.to}>{elem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="menu">
          <ul className="menu-list menu-list__extra">
            {extraMenu.map((elem) => (
              <li key={elem.name}>
                <Link to={elem.to}>{elem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="panel-wrapper">
          <div className="input-wrapper">
            <input
              className="search"
              type="text"
              name="search"
              placeholder="Поиск"
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value.trim())}
            />
            <div className="search-btn">
              <Search colour={theme === 'dark' ? '#4a525d' : '#E1E4E8'} />
              <button onClick={handleSearch}></button>
            </div>
          </div>

          <button className="round-btn" onClick={toggleTheme}>
            {theme === 'light' ? <Sun /> : <Moon />}
          </button>

          <button className="btn-account">
            <Account colour={theme === 'dark' ? '#C9D1D9' : '#F6F8FA'} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
