import { StatusManager } from '../index'
import { MutationsType } from '../StatusManager'

interface ObjectStatusManagerInitOptionType {
  key: string
  state: Object
  mutations?: MutationsType
  hooks?: Partial<{
    beforeCommit: (oldData: any) => void
    committed: (newData: any) => void
    beforeDataChange: (oldData: any) => void
    dataChanged: (newData: any) => void
  }>
  pluginConfig?: any
}

/**
addNode
    node:添加的节点
    key:键

deleteNode
    key:键

editNode
    key:键
    path:string[] 路径
    value:值
**/

export function createObjectStatusManager(
  initOption: ObjectStatusManagerInitOptionType
) {
  return new StatusManager({
    key: initOption.key,
    state: initOption.state || {},
    hooks: initOption.hooks,
    mutations: {
      // @ts-ignore
      replaceAll(state: any, payload) {
        return payload
      },
      addNode(state: any, payload: { node: Object; key: string }) {
        let { node, key } = payload
        state[key] = node
      },
      deleteNode(state: any, payload: { key: string }) {
        delete state[payload.key]
      },
      editNode(
        state: any,
        payload: { key: string; path?: string[]; value: any }
      ) {
        let { path, key, value } = payload
        path = path || []
        if (typeof state != 'object') return
        if (state[key] != null) {
          try {
            if (path.length == 0) {
              state[key] = value
            } else {
              let node = state[key]
              for (let i = 0; i < path.length - 1; i++) {
                node = node[path[i]]
              }
              node[path[path.length - 1]] = value
            }
          } catch (e) {}
        }
      },
      ...initOption.mutations
    },
    pluginConfig: initOption.pluginConfig
  })
}

export type { ObjectStatusManagerInitOptionType }
