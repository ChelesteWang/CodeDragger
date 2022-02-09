/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createPersistencePlugin,
  StatusManager,
  createObjectStatusManager
} from '@cdl-pkg/status-manager'

//注册插件，会在对应的时间周期执行
StatusManager.registerPlugin(
  createPersistencePlugin({
    status: 'auto'
  })
)

//statusManager.trigger(name,option) 触发特定的周期钩子
let obj: any = {}
export const statusManager = createObjectStatusManager({
  key: 'component',
  state: obj,
  hooks: {
    dataChanged(data: any) {
      console.log(data)
    }
  }, 
})

