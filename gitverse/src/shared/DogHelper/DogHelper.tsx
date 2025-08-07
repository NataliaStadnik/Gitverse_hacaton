import {FC} from 'react'
import './style.scss'

interface DogHelperProps {
  message: string
}

const DogHelper: FC<DogHelperProps> = ({message}) => {
  return (
    <div className="dog-helper">
      <div className="message">{message}</div>
      <img src="./../src/assets/images/dog.svg" alt="dog" />
    </div>
  )
}

export default DogHelper
