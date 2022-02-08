import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import './SignUp.css'
import { FC, useState } from 'react'
import { registerAction } from '@/api'

const SignUp: FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [tips, setTips] = useState<string>('Please enter your information!')
  return (
    <div>
      <div className='SignUp'>
        <img
          id='img_signup'
          src='http://tva1.sinaimg.cn/large/005BcTWDly1gyrdpm4u9bj30dw0opjtf.jpg'
          alt=''
        />
        <div className='signup_text'>
          <div className='title'>We are CodeDragger</div>
          <div className='para'>Welcome to join us!</div>
          <div className='para'>{tips}</div>
        </div>

        <div className='signup_form'>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                  id='username'
                  label='username'
                  name='username'
                  autoComplete='username'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>

            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                const result = registerAction(username, password)
                result.then(
                  () => {
                    window.location.href = './login'
                  },
                  () => {
                    setTips('Input information error!')
                    console.log('fail')
                  }
                )
              }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='./login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default SignUp
