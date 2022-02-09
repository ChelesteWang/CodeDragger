import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import './SignIn.css'
import { FC, useState } from 'react'
import { loginByPasswordAction } from '@/api'
import { useNavigate } from 'react-router-dom'

const SignIn: FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [tips, setTips] = useState<string>('Please enter your information!')
  return (
    <div>
      <div className='SignIn'>
        <img
          id='img_signin'
          //src='http://tva1.sinaimg.cn/large/005BcTWDly1gyrdpm4u9bj30dw0opjtf.jpg'
          src='https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt=''
        />

        <div className='signin_text'>
          <div className='title'>We are CodeDragger</div>
          <div className='para'>
            Welcome back!Login in to your account to view it!
          </div>
          <div className='para'>{tips}</div>
        </div>

        <div className='signin_form'>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
              }}
              label='username'
              name='username'
              autoComplete='username'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button
              type='button'
              fullWidth
              variant='outlined'
              color='inherit'
              onClick={() => {
                const result = loginByPasswordAction(username, password)
                result.then(
                  () => {
                    navigate('/workspace')
                  },
                  () => {
                    setTips('Input information error!')
                    console.log('fail')
                  }
                )
              }}
              sx={{ mt: 3, mb: 2, borderRadius: 5 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href='./register' color='inherit'>
                  {'Go to register'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default SignIn
