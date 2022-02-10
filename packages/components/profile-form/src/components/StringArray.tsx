import React, { FC, useEffect, useState } from 'react'
import './commom.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import DeleteIcon from './icons/DeleteIcon'
import Enter from './icons/Enter'
export interface Props {
  prop: string
  type: string
  values: string
  defaultValues: Array<string>
}

const imgItemStyle = {
  width: 'inherit',
  wordWrap: 'break-word'
}
const App: FC<Props> = ({ prop, type, values, defaultValues }: Props) => {
  const d = defaultValues ?? []
  const [items, setItems] = useState(d)
  const handleSetItems = (newItems: string[]) => {
    setItems(newItems)
    // TODO: 调用dispatch方法
    console.log(`update:【调用dispatch】${prop}设置为${newItems}`)
  }
  const [url, setUrl] = useState('')
  const handleDelete = (item: string) => {
    const delIndex = items.indexOf(item)
    const newItems = [...items]
    newItems.splice(delIndex, 1)
    handleSetItems(newItems)
  }
  const handleAdd = (item: string) => {
    const newItems = [...items]
    newItems.push(item)
    handleSetItems(newItems)
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
  if (!items) {
    return <div>这是空的</div>
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
          {items.map((item, i) => {
            return (
              <ListItem
                key={i}
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
