import React from 'react'
import './Mid.css'
import Preview from './Preview'
export default class Mid extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='mid'>
        <div>
          <Preview />
        </div>
      </div>
    )
  }
}
