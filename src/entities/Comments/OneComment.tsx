import {ArrowAnswer, Dislike, Like} from '@/assets/svg'
import './style.scss'
import {FC, useState} from 'react'

interface OneCommentProps {
  message: string
  answerTo?: string
  isAnswer?: boolean
}

const OneComment: FC<OneCommentProps> = ({
  message,
  answerTo,
  isAnswer = false,
}) => {
  const [isModal, setModal] = useState(false)

  return (
    <div className="comment-wrapper">
      <div className="comment-wrapper__top">
        <div className="comment-wrapper__info">
          <span className="comment-wrapper__author">chupzzz</span>
          <span className="comment-wrapper__date">19 июня, 15:04</span>
        </div>
        <button
          className="comment-wrapper__btn-dots"
          onClick={() => setModal(!isModal)}
        >
          <span>...</span>
          {isModal && (
            <div className="comment-modal">
              <button>Удалить</button>
              <button>Изменить</button>
            </div>
          )}
        </button>
      </div>

      {answerTo ? (
        <p>
          <span className="answers__to">{answerTo}</span>
          <span>{message}</span>
        </p>
      ) : (
        <p>{message}</p>
      )}

      <div className="comment-estimate">
        <button className="comment-estimate__likes">
          <Like />
          <span>0</span>
        </button>
        <button className="comment-estimate__likes">
          <Dislike />
          <span>0</span>
        </button>
        {!isAnswer && (
          <button className="comment-estimate__answer">Ответить</button>
        )}
      </div>

      {isAnswer && (
        <button className="answers__more">
          <ArrowAnswer />
          <span>Показать ещё 2 комментария</span>
        </button>
      )}
    </div>
  )
}

export default OneComment
