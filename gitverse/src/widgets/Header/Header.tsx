import {AppRouter, useTheme} from '@/shared'
import './style.scss'
import {Account, LogoBlack, LogoLight, Moon, Search, Sun} from '@/assets/svg'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import HeaderLink from './HeaderLink'

export type MenuLinkType = {
  name: string
  to: string
}

const mainMenu: MenuLinkType[] = [
  {name: 'Статьи', to: AppRouter.articles.path},
  {name: 'Новости', to: AppRouter.allNews.path},
  {name: 'Медиа', to: AppRouter.media.path},
]

const extraMenu: MenuLinkType[] = [
  {name: 'Документация', to: AppRouter.documentation.path},
  {name: 'Почему GitVerse', to: AppRouter.aboutGitVerse.path},
]

const Header = () => {
  const [valueSearch, setValueSearch] = useState('')
  const [isInputActive, setInput] = useState(false)
  const [btnSearch, setBtn] = useState(!isInputActive)

  const {toggleTheme, theme} = useTheme()
  const navigate = useNavigate()

  const handleSearch = () => {
    if (valueSearch) {
      setBtn(true)
      navigate(AppRouter.searchResult.path)
      setValueSearch('')
    }
  }

  const handleInputClick = () => {
    setInput(true)
  }

  useEffect(() => {
    if (valueSearch) {
      setBtn(false)
    }
  }, [valueSearch])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLInputElement
      if (isInputActive && target.name !== 'search') {
        setInput(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isInputActive])

  return (
    <header className="header">
      <div className="container header__container">
        <Link to={AppRouter.home.path}>
          {theme === 'light' ? <LogoLight /> : <LogoBlack />}
        </Link>

        {!isInputActive && (
          <>
            <nav className="menu">
              <ul className="menu-list">
                {mainMenu.map((elem) => (
                  <HeaderLink key={elem.name} elem={elem} />
                ))}
              </ul>
            </nav>
            <nav className="menu">
              <ul className="menu-list">
                <HeaderLink elem={{name: 'Продукты', to: ''}} isButton />

                {extraMenu.map((elem) => (
                  <HeaderLink key={elem.name} elem={elem} />
                ))}
              </ul>
            </nav>
          </>
        )}

        <div className={`panel-wrapper ${isInputActive ? 'panel--big' : ''}`}>
          <div className={`input-wrapper ${isInputActive ? 'panel--big' : ''}`}>
            <input
              className="search"
              type="text"
              name="search"
              placeholder="Поиск"
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value.trim())}
              onClick={handleInputClick}
            />
            <div className="search-btn">
              <button onClick={handleSearch} disabled={btnSearch}></button>
              <Search />
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
