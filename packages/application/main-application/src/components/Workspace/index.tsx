import { FC, useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import Card from './components/Card/index'
import {
  jsonSchemaCreateAction,
  jsonSchemaFindByUserAction
} from '@/request/request'

const Workspace: FC = () => {
  let jsonSchemaCreateObj: {
    name: 'testCreate'
    jsonSchema: {
      type: 'button'
      value: '这是testButton1'
    }
  }
  const [list, setList] = useState([]) //依据list动态渲染组件
  //simulate the componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      const result = await jsonSchemaFindByUserAction()
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
      <div
        onClick={() => {
          console.log(466)
          const fetchJsonSchema = async () => {
            const newJS = await jsonSchemaCreateAction(jsonSchemaCreateObj)
            console.log(newJS)
            window.location.href = './editor'
          }
          fetchJsonSchema()
        }}
        style={{
          background:
            'url(http://tva1.sinaimg.cn/large/005BcTWDly1gz4pvsson1j308c06ywea.jpg)',
          width: '300px',
          height: '250px',
          float: 'left',
          overflow: 'hidden',
          backgroundSize: '100% 100%',
          border: 'black 1px solid',
          borderRadius: '5px',
          margin: '30px 40px'
        }}
      ></div>
      <div>
        {list.map(
          //动态渲染组件
          (current: { name: string; updatedAt: string }, index: number) => {
            let editTime = changeEditTime(current.updatedAt) //取得时间差
            return (
              <div
                onClick={() => {
                  window.location.href = './editor'
                }}
              >
                <Card
                  title={current.name}
                  edittime={'Edited ' + editTime + ' age'}
                  //因为未知的原因，Card上无法添加onClick
                  //故在外面套了一层div用来绑定一个onClick
                  //先留个坑在这里
                  // onClick={() => {
                  //   console.log(233)
                  //   //window.location.href = './editor/' + { index }
                  // }}
                />
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Workspace
