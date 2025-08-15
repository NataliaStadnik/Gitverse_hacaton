import {ArrowBtn, Img} from '@/assets/svg'
import './style.scss'
import OneComment from './OneComment'
import OneAnswer from './OneAnswer'

const Comments = () => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <section className="comments-block" id="#discusses">
      <div className="comments-block__header">
        <h3>Обсуждения</h3>
        <span className="comments-block__amount">5</span>
      </div>

      <form className="form">
        <div className="comments-input">
          <textarea
            name="comment"
            className="comments-input__field"
            placeholder="Добавить комментарий"
          />
          <div className="comments-input__btn">
            <div className="file-input">
              <input type="file" />
              <Img />
            </div>

            <button className="comments-input__submit" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
        </div>
      </form>

      <div className="comment-block-wrapper">
        <OneComment
          message={
            'Комментарий. Так выглядит в две строки. Если текста много, то ширина текстового блока по ширине контейнера.'
          }
        />
        <OneAnswer />
      </div>

      <div className="comment-block-wrapper">
        <OneComment message="Ещё один коммент." />
      </div>

      <button className="btn-all-comments">
        <span>Показать все комментарии</span>
        <ArrowBtn />
      </button>
    </section>
  )
}

export default Comments
