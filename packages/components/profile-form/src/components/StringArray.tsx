import React, { FC, useState } from 'react'
import './commom.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
export interface Props {
  prop: string
  type: string
  values: string
  defaultValues: Array<string>
}
const DeleteIcon: FC = () => {
  // @ts-ignore
  return (
    <svg
      t='1644332621260'
      class='icon'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      p-id='1344'
      width='20'
      height='20'
    >
      <path
        d='M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z'
        p-id='1345'
      ></path>
      <path
        d='M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z'
        p-id='1346'
      ></path>
      <path
        d='M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z'
        p-id='1347'
      ></path>
      <path
        d='M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z'
        p-id='1348'
      ></path>
    </svg>
  )
}
const Enter: FC = () => {
  // @ts-ignore
  return (
    <svg
      t='1644335634680'
      class='icon'
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      p-id='1615'
      width='20'
      height='20'
    >
      <path
        d='M350.814815 797.392593c-5.499259 0-10.903704-2.085926-15.075556-6.257778l-113.777778-113.777778c-8.343704-8.343704-8.343704-21.807407 0-30.151111l0.18963-0.18963 113.588148-113.588148c8.343704-8.343704 21.807407-8.343704 30.151111 0s8.343704 21.807407 0 30.151111L267.188148 662.281481l98.702222 98.702223c8.343704 8.343704 8.343704 21.807407 0 30.151111-4.171852 4.171852-9.576296 6.257778-15.075555 6.257778z'
        p-id='1616'
      ></path>
      <path
        d='M604.728889 683.614815h-367.881482c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h367.881482c71.86963 0 130.37037-58.500741 130.37037-130.37037v-208.592593c0-11.757037 9.576296-21.333333 21.333334-21.333333s21.333333 9.576296 21.333333 21.333333v208.592593c0 46.08-18.014815 89.505185-50.820741 122.216296C694.139259 665.6 650.714074 683.614815 604.728889 683.614815z'
        p-id='1617'
      ></path>
    </svg>
  )
}
const imgItemStyle = {
  width: 'inherit',
  'word-wrap': 'break-word'
}
const App: FC<Props> = ({ prop, type, values, defaultValues }: Props) => {
  const [items, setItems] = useState([...defaultValues])
  const [url, setUrl] = useState('')
  const handleDelete = (item: string) => {
    const delIndex = items.indexOf(item)
    const newItems = [...items]
    newItems.splice(delIndex, 1)
    setItems(newItems)
  }
  const handleAdd = (item: string) => {
    const newItems = [...items]
    newItems.push(item)
    setItems(newItems)
  }
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '\n') return
    setUrl(event.target.value)
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      handleAdd(url)
      setUrl('')
    }
  }

  return (
    <div className='StringArray'>
      <div className='title'>{prop}</div>
      <div className='item'>
        <TextField
          label='URL'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          multiline
          InputProps={{
            endAdornment: <Enter />
          }}
          onKeyDown={handleKeyDown}
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <div className='item'>
        <List>
          {items.map((item) => {
            return (
              <ListItem
                secondaryAction={
                  <IconButton
                    aria-label='delete'
                    onClick={() => {
                      handleDelete(item)
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <div style={imgItemStyle}>{item}</div>
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

export default App
