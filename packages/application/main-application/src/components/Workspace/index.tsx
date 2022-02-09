import { FC, useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import Card from './components/Card/index'
import Container from '@mui/material/Container'
import { jsonSchemaCreateAction, jsonSchemaFindByUserAction } from '@/api'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Workspace: FC = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([]) //依据list动态渲染组件
  const renderJsonSchema = () => {
    const fetchData = async () => {
      const result = await jsonSchemaFindByUserAction()
      console.log('success render')
      setList(result.list)
    }
    fetchData()
  }
  //simulate the componentDidMount
  useEffect(() => {
    renderJsonSchema()
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
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '260px',
                width: '294px',
                '&:hover': {
                  cursor: 'pointer',
                  opacity: 0.7
                }
              }}
            >
              <img
                onClick={() => {
                  const fetchJsonSchema = async () => {
                    const newJS = await jsonSchemaCreateAction({
                      name: 'testCreate',
                      jsonSchema: {
                        type: 'button',
                        value: '这是testButton1'
                      }
                    })

                    navigate('/editor/' + newJS.info._id, {
                      state: { _id: newJS.info._id }
                    })
                  }
                  fetchJsonSchema()
                }}
                style={{
                  width: '200px',
                  height: '200px'
                }}
                src='https://qckvp9.file.qingfuwucdn.com/file/a738055bd54b5302_1644302503654.png'
                alt='+'
              />
            </Box>

            {list.map(
              //动态渲染组件
              (
                current: { name: string; updatedAt: string; _id: string },
                index: number
              ) => {
                let editTime = changeEditTime(current.updatedAt) //取得时间差
                return (
                  <div
                    key={current._id}
                    onClick={() => {
                      navigate('/editor/' + current._id, {
                        state: { _id: current._id }
                      })
                    }}
                  >
                    <Grid
                      item
                      xs={2}
                      sm={3}
                      md={4}
                      key={index}
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Card
                        title={current.name}
                        edittime={'Edited ' + editTime + ' ago'}
                        id={current._id}
                        reRender={renderJsonSchema}
                      />
                    </Grid>
                  </div>
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
