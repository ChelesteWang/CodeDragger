// import { Button } from '@mui/material'
import { FC, useState } from 'react'
import Content from './components/content/Content'
import Footer from './components/content/Footer'
import Nav from './components/Nav/Nav'
import './index.css'
const Workspace: FC = () => {
  // const [title] = useState<string>('Dragger.')
  // useEffect(() => {
  //   setInterval(() => {
  //     if (title.length === 1) {
  //       setTitle('Dragger.')
  //     } else {
  //       setTitle(title.slice(0, title.length - 1))
  //     }
  //     console.log(title)
  //   }, 1000)
  // }, [])
  return (
    <div>
      <Nav />
      {/* <div className='intro'>
        <div className='intro_text'>
          <div className='title'>
            We are Code<span className='title_dyn'>{title}</span>
          </div>
          <div className='title_para'>
            Hello ! Would you like to use me ? I am glad to meet you !
          </div>
          <div className='btns'>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              id='btn1'
              onClick={() => {
                window.location.href = './login'
              }}
            >
              Login
            </Button>
            <Button
              variant='outlined'
              id='btn2'
              size='large'
              onClick={() => {
                window.location.href = './register'
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div> */}
      {/* <div id='advantage'>
        <div id='title1'>Build accessible React apps with speed</div>
        <div id='title1-1'>
          Build a beautiful, modern website with flexible, fully customizable,
          atomic components.
        </div>
        <div className='points'>
          <ul>
            <li>
              <div>
                <img className='img2' src='' alt='' />
                <div className='title2'>Built for developers</div>
                <div className='title2-2'>
                  CodeDragger is built to make your life easier. Variables,
                  build tooling, documentation, and reusable components.
                </div>
              </div>
            </li>
            <li>
              <div>
                <img className='img2' src='' alt='' />
                <div className='title2'>Designed to be modern</div>
                <div className='title2-2'>
                  Designed with the latest design trends in mind. CodeDragger
                  feels modern, minimal, and beautiful.
                </div>
              </div>
            </li>
            <li>
              <div>
                <img className='img2' src='' alt='' />
                <div className='title2'>Documentation for everything</div>
                <div className='title2-2'>
                  We've written extensive documentation for components and
                  tools, so you never have to reverse engineer anything.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <Content />
      <Footer />
    </div>
  )
}

export default Workspace
