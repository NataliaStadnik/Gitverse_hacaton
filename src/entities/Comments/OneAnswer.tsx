import './style.scss'
import OneComment from './OneComment'

const OneAnswer = () => {
  return (
    <div className="answers">
      <OneComment message="Классный комментарий!" answerTo="chupzzz" isAnswer />
    </div>
  )
}

export default OneAnswer
