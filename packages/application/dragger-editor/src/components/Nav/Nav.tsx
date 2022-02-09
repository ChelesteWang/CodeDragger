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
  // @ts-ignore
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
              // @ts-ignore
              console.log(layoutManager.state.value)
              
              const data = {
                components: componentsManager.state,
                 // @ts-ignore
                layout: JSON.parse(layoutManager.state.value)
              }
              console.log(data)
              if(!id){
                throw new Error('Invalid id')
              }
              await jsonSchemaSave(id, data)
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
