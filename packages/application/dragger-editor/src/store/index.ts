/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createPersistencePlugin,
  StatusManager,
  createObjectStatusManager
  // @ts-ignore
} from '@cdl-pkg/status-manager'
import { createContext } from 'react'



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

export const layoutManager = createObjectStatusManager({
  key: 'layout',
  state: obj,
  hooks: {
    dataChanged(data: any) {
      console.log(data)
    }
  }
})

export const Context = createContext({
  components: {},
  selectNode:''
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
    case 'replaceAll':
      componentsManager.commit('replaceAll', value)
      return componentsManager.state
    case 'undo':
      componentsManager.back()
      console.log(componentsManager.state)
      return componentsManager.state
    case 'redo':
      componentsManager.forward()
      return componentsManager.state
    default:
      new Error('Invalid action')
  }
}
