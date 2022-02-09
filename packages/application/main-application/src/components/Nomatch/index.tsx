import './index.css'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Npmatch: FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='text1'>404 not found</div>
      <div
        className='text2'
        onClick={() => {
          navigate('/login')
        }}
      >
        Click me to login！
      </div>
    </div>
  )
}

export default Npmatch
