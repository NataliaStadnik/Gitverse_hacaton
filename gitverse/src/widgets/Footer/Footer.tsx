import {Link} from 'react-router-dom'
import './style.scss'
import {AppRouter, useTheme} from '@/shared'
import {Telegram, Vk} from '@/assets/svg'

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
        to: '',
      },
      {text: 'Новости', to: ''},
      {text: 'Медиа', to: ''},
    ],
  },
  {
    name: 'Продукты',
    items: [
      {text: 'Для образования', to: ''},
      {text: 'GagaCode', to: ''},
      {text: 'GigaIDE', to: ''},
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
              <img
                src="./../src/assets/images/label-footer.svg"
                alt="Логотип"
              />
            </Link>
            <p className="footer__laws">2025 © Все права защищены</p>

            <div className="socials">
              {socialsMedia.map((elem) => (
                <Link to={elem.to} key={elem.name} className={`socials__link ${theme === 'dark' ? 'socials__link--dark' : ''}`}>
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
