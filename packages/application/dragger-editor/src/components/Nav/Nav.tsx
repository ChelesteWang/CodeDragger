/* eslint-disable @typescript-eslint/no-explicit-any */
import { componentsManager, Context, layoutManager } from '../../store'
import Button from '@mui/material/Button'
import { useContext, useState } from 'react'
import './Nav.css'
import { jsonSchemaSave } from '../../api'
import { useParams } from 'react-router-dom'
import PreviewModal from '../PreviewModal';
import { useSnackbar } from 'notistack'

interface Iprops {
  name: string
  editTime: string
}

export default function Hello(props: { name: any; editTime: any }) {
  const { name, editTime } = props
  const { enqueueSnackbar } = useSnackbar()

  // @ts-ignore
  const { components, dispatch } = useContext(Context)
  const { id } = useParams()
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  return (
    <div className='nav-bar-editor'>
      <PreviewModal visible={previewModalVisible} close={()=>setPreviewModalVisible(false)} />
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
              dispatch({ type: 'clear', payload: {} })
            }}
          >
            清空画布
          </Button>
        </li>
        <li>
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => {
              const flag = componentsManager.back(1)
              if (flag) {
                componentsManager.forward(1)
                dispatch({ type: 'undo', payload: {} })
              } else {
                enqueueSnackbar('不能再撤回了', {
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                  },
                  variant: 'error'
                })
                console.log('不能再撤回了')
              }
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
              const flag = componentsManager.forward()
              console.log(flag, 'flag')
              if (!flag) {
                console.log(componentsManager.state)
                enqueueSnackbar('不能再重做了', {
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                  },
                  variant: 'error'
                })
                console.log('不能再重做了')
              } else {
                componentsManager.back()
                dispatch({ type: 'redo', payload: {} })
              }
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
              if (!id) {
                throw new Error('Invalid id')
              }
              await jsonSchemaSave(id, data)
            }}
          >
            保存
          </Button>
        </li>
        <li>
          <Button variant='outlined' color='inherit' onClick={
            ()=> {
              setPreviewModalVisible(true);
            } 
          }>
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
