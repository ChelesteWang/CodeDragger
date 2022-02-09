/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createPersistencePlugin,
  StatusManager,
  createObjectStatusManager
} from '@cdl-pkg/status-manager'
import { createContext } from 'react'

//注册插件，会在对应的时间周期执行
StatusManager.registerPlugin(
  createPersistencePlugin({
    status: 'auto'
  })
)

//statusManager.trigger(name,option) 触发特定的周期钩子
let obj: any = {}
export const componentsManager = createObjectStatusManager({
  key: 'components',
  state: obj,
  hooks: {
    dataChanged(data: any) {
      console.log(data)
    }
  }
})

export const Context = createContext({
  components: {}
})

export function componentsReducer(state: any, action: any) {
  const {
    type,
    payload: { key, node, path, value }
  } = action
  switch (type) {
    case 'addNode':
      componentsManager.commit('addNode', {
        key,
        node
      })
      return componentsManager.state
    case 'deleteNode':
      componentsManager.commit('deleteNode', { key })
      return componentsManager.state
    case 'editNode':
      componentsManager.commit('editNode', { key, path, value })
      return componentsManager.state
    default:
      new Error('Invalid action')
  }
}
