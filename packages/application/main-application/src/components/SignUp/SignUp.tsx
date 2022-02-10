import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import './SignUp.css'
import { FC, useState } from 'react'
import { registerAction } from '@/api'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const SignUp: FC = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [tips, setTips] = useState<string>('Please enter your information!')
  return (
    <div>
      <div className='SignUp'>
        <img
          id='img_signup'
          src='https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
              variant='outlined'
              color='inherit'
              sx={{ mt: 3, mb: 2 }}
              onClick={async () => {
                try {
                  await registerAction(username, password)
                  navigate('/login')
                  // @ts-ignore
                } catch (e: { success; message }) {
                  enqueueSnackbar(e.message, {
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'center'
                    },
                    variant: 'error'
                  })
                  setTips(e.message)
                }
              }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='./login' variant='body2' color='inherit'>
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
