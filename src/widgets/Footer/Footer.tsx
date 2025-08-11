import {Link} from 'react-router-dom'
import './style.scss'
import {AppRouter, useTheme} from '@/shared'
import {Telegram, Vk} from '@/assets/svg'
import logo from '@/assets/images/label-footer.svg'

const footerMunuItems = [
  {
    name: 'Помощь',
    items: [
      {
        text: 'Оценить',
        to: '',
      },
      {
        text: 'Поддержка',
        to: '',
      },
    ],
  },
  {
    name: 'Навигация',
    items: [
      {
        text: 'Статьи',
        to: AppRouter.articles.path,
      },
      {text: 'Новости', to: AppRouter.allNews.path},
      {text: 'Медиа', to: AppRouter.media.path},
    ],
  },
  {
    name: 'Продукты',
    items: [
      {text: 'Для образования', to: AppRouter.productSmartClass.path},
      {text: 'GagaCode', to: AppRouter.productGigaCode.path},
      {text: 'GigaIDE', to: AppRouter.productGigaIDE.path},
    ],
  },
  {
    name: 'Дополнительно',
    items: [
      {text: 'Политика конфиденциальности', to: ''},
      {text: 'Пользовательское соглашение', to: ''},
      {text: 'Согласие субъекта персональных данных', to: ''},
    ],
  },
]

const socialsMedia = [
  {
    name: 'vk',
    to: '',
    svg: <Vk />,
  },
  {
    name: 'tg',
    to: '',
    svg: <Telegram />,
  },
]

const Footer = () => {
  const {theme} = useTheme()

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="container footer__container">
          <div className="footer__left">
            <Link to={AppRouter.home.path} className="footer__logo">
              <img src={logo} alt="Логотип" />
            </Link>
            <p className="footer__laws">2025 © Все права защищены</p>

            <div className="socials">
              {socialsMedia.map((elem) => (
                <Link
                  to={elem.to}
                  key={elem.name}
                  className={`socials__link ${theme === 'dark' ? 'socials__link--dark' : ''}`}
                >
                  {elem.svg}
                </Link>
              ))}
            </div>
          </div>

          <nav className="footer-nav">
            {footerMunuItems.map((block) => (
              <div className="footer-nav__block" key={block.name}>
                <p className="footer-nav__title">{block.name}</p>
                <ul className="footer-nav__list">
                  {block.items.map((elem) => (
                    <li key={elem.text} className="footer-nav__link">
                      <Link to={elem.to}>{elem.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
