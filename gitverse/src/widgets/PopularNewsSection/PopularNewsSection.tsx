import {ArticleBasic, ArticleCardDataType} from '@/entities'
import './style.scss'
import {AppRouter, ToDepartmentLink} from '@/shared'

const PopularNewsArticlesArray: ArticleCardDataType[] = [
  {
    id: 1,
    name: 'Бета-тестирование открытого российского игрового движка NauEngine',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 2,
    name: 'Бета-тестирование открытого российского игрового движка NauEngine',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 3,
    name: 'Бета-тестирование открытого российского игрового движка NauEngine',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 4,
    name: 'Выпуск дистрибутива Ubuntu 24.10',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 5,
    name: 'ПРелиз ядра Linux 6.12 с поддержкой Realtime-режима',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 6,
    name: 'Выпуск открытого игрового движка Open 3D Engine',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 7,
    name: 'В коде Winamp обнаружено нарушение лицензии GPL',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 8,
    name: 'Выпуск Rust 1.82',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
  {
    id: 9,
    name: 'Выпуск свободного звукового редактора Ardour 8.8',
    tags: ['SQL', 'Хранение данных', 'Программирование'],
    date: '11 июля 2025',
    label: 'Open Source',
    text: 'Каждому участнику программы Red Hat Developer разрешается бесплатное использование до 25 экземпляров дистрибутива',
  },
]

const PopularNewsSection = () => {
  return (
    <section className="popular-news">
      <div className="container popular-news__container">
        <div className="top-section">
          <h2 className="title">Популярные новости</h2>
          <ToDepartmentLink text="В раздел" to={AppRouter.allNews.path} />
        </div>

        <ul className="popular-news__list">
          {PopularNewsArticlesArray.map((elem) => (
            <li key={elem.id}>
              <ArticleBasic data={elem} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PopularNewsSection
