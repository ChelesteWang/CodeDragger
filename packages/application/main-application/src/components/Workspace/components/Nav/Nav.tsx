import React from 'react'
import Button from '@mui/material/Button'
import './Nav.css'
import { currentAction, logoutAction } from '@/api'

export default class Hello extends React.Component {
  state = {
    username: 'Dragger'
  }
  //登出事件
  logout = () => {
    const fetchData = async () => {
      const result = await logoutAction()
      return result
    }
    const result = fetchData()
    result.then(() => {
      window.location.href = './login'
    })
    console.log(result)
  }
  //挂载时初始化
  componentDidMount() {
    const fetchInfo = async () => {
      const result = await currentAction()
      this.setState({ username: result.info.username })
    }
    fetchInfo()
  }

  render(): React.ReactNode {
    return (
      <div className='nav-bar'>
        <div className='logo'>CodeDragger LowCode</div>
        <ul className='button-list'>
          <li>
            <Button variant='contained' onClick={this.logout}>
              登出
            </Button>
          </li>
          <li>
            <Button variant='outlined'>Hello! {this.state.username}</Button>
          </li>
        </ul>
      </div>
    )
  }
}
