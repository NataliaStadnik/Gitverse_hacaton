import ArticleBasic, {ArticleCardDataType} from '../ArticleBasic/ArticleBasic'
import './style.scss'

type Statistic = {
  watch: number
  messages: number
  saved: number
}

type CardWithStatisticType = Statistic & ArticleCardDataType

const searchArticle: CardWithStatisticType = {
  id: 1,
  watch: 12,
  messages: 12,
  saved: 12,
  name: 'Для FreeBSD развивают опциональную поддержку компонентов базовой системы на Rust',
  tags: ['Java Script', 'Java', 'Программирование'],
  date: '11 июля 2025',
  label: 'Open Source',
  text: 'Чтобы две отдельные компьютерные системы смогли обмениваться информацией, нужно организовать способ связи — сетевой протокол. Это можно сделать с помощью разных технологий. Самые популярные из них — HTTP и FTP. Первая применяется для обмена гипертекстом, например HTML-документами. Вторая больше подходит для передачи больших файлов и проведения длинных сессий. Подробнее о FTP — в нашей статье.',
}

const SearchList = () => {
  return (
    <ul className="searches">
      {[1, 2, 3, 4, 5].map((elem) => (
        <ArticleBasic key={elem} data={searchArticle} />
      ))}
    </ul>
  )
}

export default SearchList
