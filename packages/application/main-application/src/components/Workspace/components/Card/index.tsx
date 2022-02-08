import { FC } from 'react'
import './index.css'

interface childProps {
  title: string
  edittime: string
}

const Card: FC<childProps> = (props) => {
  const { title, edittime } = props
  return (
    <div>
      <div className='card'>
        <div className='card_img'></div>

        <div className='card_info'>
          {/* <div className='card_icon'>
            <img src='' />
          </div> */}
          <div className='card_text'>
            <div className='card_title'>
              {title}
              {/* Untitled */}
            </div>
            <div className='c_edit_time'>{edittime}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
