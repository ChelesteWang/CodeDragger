// import * as React from 'react'
// import { useRef } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
// import Link from '@mui/material/Link'

// const footerNavigationTitle = ['产品', '关于我们', '帮助与支持']
// const footerNavigation = [
//   { name: '快速上手', href: '#' },
//   { name: '公司介绍', href: '#' },
//   { name: '文档', href: '#' },
//   { name: '立即体验', href: '#' },
//   { name: '联系我们', href: '#' },
//   { name: '意见反馈', href: '#' },
//   { name: '下载插件', href: '#' }
// ]
const qr =
  'https://codefun-download-1256085488.cos.ap-guangzhou.myqcloud.com/site/qr/group.png'
const logo = 'https://code.fun/img/logo-dark.png'
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333333', color: '#f8f4f8' }}>
      <Container maxWidth='lg'>
        <Box sx={{ height: '150px', marginTop: '65px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              {/* <img
                style={{
                  height: '45px',
                  marginBottom: '30px',
                  marginTop: '30px',
                  width: '160px'
                }}
                src={logo}
                alt='logo'
              /> */}
              <h1>CodeDragger</h1>
              <Box sx={{ fontSize: '12px' }}>
                © 2022 字节青训营 CodeMaster 组结课大作业
              </Box>
              {/* <Box sx={{ fontSize: '12px' }}>粤ICP备 10241024号</Box> */}
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                mt={2}
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {/* {footerNavigationTitle.map((item) => {
                  return (
                    <Grid item xs={4}>
                      <Box sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {item}
                      </Box>
                    </Grid>
                  )
                })} */}

                {/* {footerNavigation.map((item) => {
                  return (
                    <Grid item xs={4}>
                      <Box sx={{ fontSize: '12px' }}>
                        <Link
                          color={'#000000'}
                          underline='none'
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </Box>
                    </Grid>
                  )
                })} */}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* <img
                style={{
                  height: '84px',
                  margin: '14px 0 8px',
                  marginTop: '30px',
                  marginBottom: '5px',
                  width: '84px'
                }}
                src={qr}
                alt='logo'
              /> */}
              {/* <Box sx={{ fontSize: '12px' }}>扫码进群咨询</Box> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
export default Footer
