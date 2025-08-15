import {Img} from '@/assets/svg'
import './style.scss'

const Comments = () => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <section className="comments-block">
      <div className="comments-block__header">
        <h3>Обсуждения</h3>
        <span className="comments-block__amount">5</span>
      </div>

      <form>
        <div className="comments-input">
          <textarea
            name="comment"
            className="comments-input__field"
            placeholder="Добавить комментарий"
          />
          <div className="comments-input__btn">
            <div className="file-input">
              <Img />
              <input type="file" />
            </div>

            <button className="comments-input__submit" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Comments
