import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Grid from '@mui/material/Grid'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import OutlinedCard from './OutlinedCard'

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      h1: {
        fontSize: '4.5rem',
        fontWeight: '900'
      },
      h3: {
        fontSize: '3rem',
        fontWeight: '800'
      }
    }
  })
)

const Content = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
          <Box sx={{ flexGrow: 1 }} my={14} ml={3}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant='h1'>做前端</Typography>
                <Typography variant='h1' sx={{ color: '#fd7901' }}>
                  不搬砖
                </Typography>
                <Box mt={2}>
                  <Typography variant='h6'>
                    UI 设计稿智能生成前端源代码
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant='h6'>
                    8 小时工作量，10 分钟完成
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      height: '38px',
                      lineHeight: '38px',
                      width: '176px',
                      textAlign: 'center',
                      mr: 1,
                      p: 1,
                      background: '#333333',
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  >
                    <Link
                      color={'#f8f4f8'}
                      variant='h6'
                      underline='none'
                      href='#'
                    >
                      {'立即体验'}
                    </Link>{' '}
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      height: '38px',
                      lineHeight: '38px',
                      width: '176px',
                      textAlign: 'center',
                      ml: 3,
                      p: 1,
                      '&:hover': {
                        opacity: 0.7
                      }
                    }}
                  >
                    <Link
                      color={'#000000'}
                      variant='h6'
                      underline='none'
                      href='#'
                    >
                      {'观看视频'}

                      <PlayCircleOutlineIcon
                        sx={{ position: 'relative', left: '10px', top: '4px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img src='https://code.fun/img/hero.svg' alt='hero' />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>
              生成级代码
            </Typography>
            <Typography variant='h6' sx={{ textAlign: 'center' }} my={2}>
              智能生成如手写一般的代码
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <img
                  src='https://code.fun/img/production.svg'
                  alt='production'
                />
              </Grid>
              <Grid item xs={7}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={6}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={6}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={6}>
                    <OutlinedCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Content
