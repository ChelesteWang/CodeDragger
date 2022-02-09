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
import Swiper from '@/components/Landing/components/Swiper'

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
      },
      h4: {
        fontSize: '1.6rem',
        fontWeight: '700'
      }
    }
  })
)

const description = [
  {
    title: '项目工程实践',
    content:
      '使用 pnpm workspace 配合 Changeset 进行 monorepo 项目管理，搭配 prettier & Eslint & CommitLint 统一团队开发规范'
  },
  {
    title: '拖拽编辑与布局',
    content: '使用 React dnd 搭配 React-Grid-layout 实现拖拽编辑与栅格布局'
  },
  {
    title: '组件物料生产',
    content:
      '组件物料生产支持远程组件，支持自定义组件以及接入三方组件库如（zarm,antd-mobile,vant）'
  },
  {
    title: 'WASM 组件转译器',
    content:
      '使用 Rust 语言编写 wasm-nodejs 模块能够获得远超 javascript 的速度 , 将 JSON 转为 JSX 模板'
  },
  {
    title: '属性编辑表单生成',
    content:
      '解析组件树节点信息，根据不同的组件动态生成表单，对组件的各项属性进行配置。'
  },
  {
    title: '打包服务开发',
    content:
      '尝试使用基于 esbuild + rollup 的新一代方案 tsup 进行打包,大幅提高打包速度，编写云端打包服务实现产物打包'
  }
]

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
                      href='./login'
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
                  columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }}
                >
                  {description.map((item) => (
                    <Grid item xs={4}>
                      <OutlinedCard title={item.title} content={item.content} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle' sx={{ mt: 5 }} />
          <Typography variant='h3' sx={{ textAlign: 'center', mt: 5 }}>
            成员介绍
          </Typography>
          <Swiper />
        </Container>
      </ThemeProvider>
    </>
  )
}
export default Content
