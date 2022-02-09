import { StatusManager } from '../index'
import { MutationsType } from '../StatusManager'

interface ListStatusManagerInitOptionType {
  key: string
  state: Object[]
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
    position:索引

deleteNode
    position:位置

searchNode
    result:结果
    searchData:查询参数

editNode
    position:索引
    path:string[] 路径
    value:值

editNodeByKey
    key:值
    keyIndex:key对应的键，默认uid
    path:string[] 路径
    value:值
 **/

export function createListStatusManager(
  initOption: ListStatusManagerInitOptionType
) {
  return new StatusManager({
    key: initOption.key,
    state: initOption.state,
    hooks: initOption.hooks,
    mutations: {
      addNode(state: any[], payload: { node: Object; position?: number }) {
        let { node, position } = payload
        if (position == null || position >= state.length) {
          state.push(node)
        } else {
          state.splice(position, 0, node)
        }
      },
      deleteNode(state: any[], payload: { position: number }) {
        let { position } = payload
        if (position == null || position >= state.length) {
          return
        } else {
          state.splice(position, 1)
        }
      },
      searchNode(
        state: any[],
        payload: { result: Object[]; searchData: { [propName: string]: any } }
      ) {
        state.forEach((e: any, index: number) => {
          if (typeof e != 'object') return
          let ok: boolean = true
          for (let searchKey in payload.searchData) {
            if (payload.searchData[searchKey] != e[searchKey]) {
              ok = false
              break
            }
          }
          if (ok)
            payload.result.push({
              index,
              node: e
            })
        })
      },
      editNode(
        state: any[],
        payload: { position: number; path: string[]; value: any }
      ) {
        let { path, position, value } = payload
        if (position >= state.length) return
        try {
          if (path.length == 0) {
            state[position] = value
          } else {
            let node = state[position]
            for (let i = 0; i < path.length - 1; i++) {
              node = node[path[i]]
            }
            node[path[path.length - 1]] = value
          }
        } catch (e) {}
      },
      editNodeByKey(
        state: any[],
        payload: { key: string; keyIndex?: string; path?: string[]; value: any }
      ) {
        let { path, key, value, keyIndex } = payload
        keyIndex = keyIndex || 'uid'
        path = path || []
        for (let i = 0; i < state.length; i++) {
          if (typeof state[i] != 'object') continue
          if (state[i][keyIndex] == key) {
            try {
              if (path.length == 0) {
                state[i] = value
              } else {
                let node = state[i]
                for (let i = 0; i < path.length - 1; i++) {
                  node = node[path[i]]
                }
                node[path[path.length - 1]] = value
              }
            } catch (e) {}
          }
        }
      },
      ...initOption.mutations
    },
    pluginConfig: initOption.pluginConfig
  })
}

export type { ListStatusManagerInitOptionType }
