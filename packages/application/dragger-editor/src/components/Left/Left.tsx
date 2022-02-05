import React from 'react'
import TabPanel from './component/TabPanelProps/TabPanelProps'
import Box from '@mui/material/Box'
import { WithDraggable } from '@/utils/draggable'
import './Left.css'

const DraggableBox = WithDraggable('Box')(Box)
export default class Left extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='left'>
        <div className='options'>
          <TabPanel />
        </div>
        <div className='component'>
          <div>
            <DraggableBox
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}
