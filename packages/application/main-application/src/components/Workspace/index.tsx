import { FC, useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import Card from './components/Card/index'
import Container from '@mui/material/Container'
import { jsonSchemaCreateAction, jsonSchemaFindByUserAction } from '@/api'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Workspace: FC = () => {
  const [list, setList] = useState([]) //依据list动态渲染组件
  //simulate the componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      const result = await jsonSchemaFindByUserAction()
      console.log(result)
      setList(result.list)
    }
    fetchData()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps
  //计算时间差的函数
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDaysDiffBetweenDates = (dateInitial: any, dateFinal: any) => {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24)
  }
  const changeEditTime = (updatedAt: string) => {
    let diffTime: number = getDaysDiffBetweenDates(
      new Date(updatedAt),
      new Date()
    )
    if (diffTime < 1) {
      diffTime *= 24
      if (diffTime < 1) {
        diffTime *= 60
        return diffTime.toFixed(1) + ' mins' //不足一小时
      }
      return diffTime.toFixed(1) + ' hours' //不足一天
    } else {
      return Math.floor(diffTime) + ' days' //大于一天
    }
  }

  return (
    <div>
      <Nav />

      <Container maxWidth='lg'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '33.3%'
              }}
            >
              <img
                style={{
                  paddingLeft: '24px',
                  paddingTop: '24px',
                  width: '300px',
                  height: '250px'
                }}
                src='https://qckvp9.file.qingfuwucdn.com/file/a738055bd54b5302_1644302503654.png'
                alt='+'
              />
            </Box>

            {list.map(
              //动态渲染组件
              (current: { name: string; updatedAt: string }, index: number) => {
                let editTime = changeEditTime(current.updatedAt) //取得时间差
                return (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card
                      title={current.name}
                      edittime={'Edited ' + editTime + ' ago'}
                      //因为未知的原因，Card上无法添加onClick
                      //故在外面套了一层div用来绑定一个onClick
                      //先留个坑在这里
                      // onClick={() => {
                      //   console.log(233)
                      //   //window.location.href = './editor/' + { index }
                      // }}
                    />
                  </Grid>
                )
              }
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Workspace
