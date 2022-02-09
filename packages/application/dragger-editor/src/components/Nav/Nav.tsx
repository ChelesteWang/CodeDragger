/* eslint-disable @typescript-eslint/no-explicit-any */
import { componentsManager, Context, layoutManager } from '../../store'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import './Nav.css'
import { jsonSchemaSave } from '../../api'
import { useParams } from 'react-router-dom'

interface Iprops {
  name: string
  editTime: string
}

export default function Hello(props: { name: any; editTime: any }) {
  const { name, editTime } = props
  const { components, dispatch } = useContext(Context)
  const { id } = useParams()
  return (
    <div className='nav-bar-editor'>
      <div className='logo'>
        <img
          width='250'
          src='https://qckvp9.file.qingfuwucdn.com/file/0a96a0d609bbee22_1644330902648.png'
          alt='lowcode logo'
        />
      </div>
      <ul className='button-list'>
        <li>
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => {
              dispatch({ type: 'undo', payload: {} })
            }}
          >
            撤回
          </Button>
        </li>
        <li>
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => {
              dispatch({ type: 'undo', payload: {} })
            }}
          >
            重做
          </Button>
        </li>
        <li>
          <Button
            variant='outlined'
            color='inherit'
            onClick={async () => {
              const data = {
                components: componentsManager.state,
                layout: JSON.parse(layoutManager.state.value)
              }
              console.log(data)
              await jsonSchemaSave(id, { jsonSchema: data })
            }}
          >
            保存
          </Button>
        </li>
        <li>
          <Button variant='outlined' color='inherit'>
            预览
          </Button>
        </li>
        <li>
          <Button variant='outlined' color='inherit'>
            创建时间：{editTime.slice(0, 10)}
          </Button>
        </li>
        <li>
          <Button variant='outlined' color='inherit'>
            项目名称：{name}
          </Button>
        </li>
      </ul>
    </div>
  )
}
