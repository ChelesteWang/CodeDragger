import React from 'react'
import TabPanel from './component/TabPanelProps/TabPanelProps'

import './Left.css'
import Box from '@mui/material/Box'
import { WithDraggable } from '../../utils/WithDraggable'
import RemoteComponent from '@cdl-pkg/remote-component'

const images = [
  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/3.png'
]

const Swiper1 = ({ images }: { images: string }) => {
  return (
    <RemoteComponent
      name='620121dbec3be24090324859'
      items={images}
    ></RemoteComponent>
  )
}

// const DraggableButton1 = WithDraggable('Button1')(Button1)
const DraggableButton2 = WithDraggable('RemoteComponent')(RemoteComponent)
const DraggableBox = WithDraggable('Box')(Box)
export default class Left extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='left'>
        <div className='component'>
          {/* {['1', '2', '3'].map((item, index) => {
            const Fn = WithDraggable(item)(RemoteComponent)
            return (
              <Fn
                name='62011592ec3be240902f635a'
                shapes={'radius'}
                buttonText='Hello!'
              />
            )
          })} */}
          <div>
            <DraggableBox
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.dark'
              }}
            />
          </div>
          <div>
            <DraggableButton2
              name='62011592ec3be240902f635a'
              shapes={'radius'}
              buttonText='Hello!'
            ></DraggableButton2>
          </div>
          <div>
            <DraggableButton2
              name='62011592ec3be240902f635a'
              shapes={'radius'}
              buttonText='Hello!'
            ></DraggableButton2>
          </div>
          <div>
            <DraggableButton2
              name='620121dbec3be24090324859'
              items={images}
            ></DraggableButton2>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}
