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
import { Divider } from '@mui/material'

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
                <Typography variant='h1'>低代码</Typography>
                <Typography variant='h1' sx={{ color: '#fd7901' }}>
                  工程初步实践
                </Typography>
                <Box mt={2}>
                  <Typography variant='h6'>
                    字节青训营 CodeMaster 组结课作业
                  </Typography>
                </Box>
                <Box mt={1}>
                  <Typography variant='h6'>
                    CodeDragger 低代码解决方案
                  </Typography>
                </Box>

                <Box sx={{ mt: 5 }}>
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      height: '50px',
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
                    </Link>
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
                <img
                  src='https://user-images.githubusercontent.com/40495740/152684536-5facf1ce-87f7-4040-ab09-88b512c9a125.png'
                  alt='hero'
                  width='500px'
                />
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' />
          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>
              项目亮点
            </Typography>
            <Typography variant='h6' sx={{ textAlign: 'center' }} my={2}>
              本项目是一套低代码综合实践方案
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={4}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={4}>
                    <OutlinedCard />
                  </Grid>
                  <Grid item xs={4}>
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
