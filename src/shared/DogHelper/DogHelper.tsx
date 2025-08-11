import {FC} from 'react'
import './style.scss'
import dog from '@/assets/images/dog.svg'

interface DogHelperProps {
  message: string
}

const DogHelper: FC<DogHelperProps> = ({message}) => {
  return (
    <div className="dog-helper">
      <div className="message">{message}</div>
      <img src={dog} alt="dog" />
    </div>
  )
}

export default DogHelper
