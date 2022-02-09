import { jsonSchemaDeleteAction } from '@/api'
import { FC } from 'react'
import './index.css'

interface childProps {
  title: string
  edittime: string
  id: string
  reRender: Function
}

const Card: FC<childProps> = (props) => {
  const { title, edittime, id, reRender } = props
  return (
    <div>
      <div className='card'>
        <div
          className='delete_icon'
          onClick={(e) => {
            e.stopPropagation()
            const deleteJsonSchema = async () => {
              const result = await jsonSchemaDeleteAction(id)
              console.log(result)
            }
            deleteJsonSchema()
            reRender()
            reRender() //由于未知的原因，只渲染一次没反应，得渲染两次。
          }}
        >
          <img
            src='http://tva1.sinaimg.cn/large/005BcTWDgy1gz6k0oizorj30gy0gyq3f.jpg'
            alt='delete'
            width='30px'
            height='30px'
          />
        </div>
        <div className='card_img'></div>

        <div className='card_info'>
          {/* <div className='card_icon'>
            <img src='' />
          </div> */}
          <div className='card_text'>
            <div className='card_title'>{title}</div>
            <div className='c_edit_time'>{edittime}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
