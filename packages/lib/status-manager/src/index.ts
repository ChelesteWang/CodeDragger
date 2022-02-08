import produce, { applyPatches, enablePatches, Patch } from 'immer'

enablePatches()

export interface MutationsType {
  [propName: string]: (state: Object, ...payload: any[]) => void
}

export type StatusManagerPluginEntryType = (
  opportunity: string,
  ctx: StatusManager,
  ...options: any
) => void
export type StatusManagerPluginObjectType = {
  entry: StatusManagerPluginEntryType
}
export type StatusManagerPluginType =
  | StatusManagerPluginEntryType
  | StatusManagerPluginObjectType

export interface InitOptionType {
  key: string
  dataType?: 'layout' | 'style' | 'other' | 'any' | 'global'
  data: Object
  mutations: MutationsType
  hooks?: Partial<{
    beforeCommit: (oldData: any) => void
    committed: (newData: any) => void
    beforeDataChange: (oldData: any) => void
    dataChanged: (newData: any) => void
  }>
  pluginConfig?: any
}

class StatusManager {
  key: string
  dataType: 'layout' | 'style' | 'other' | 'any' | 'global' = 'global'
  state: Array<any> | Map<any, any> | Set<any> | Object
  pluginConfig: any = {}
  private replaces: Patch[][] = []
  private inverseReplaces: Patch[][] = []
  private position: number = 0
  private readonly beforeCommit: (oldData: any) => void = () => {}
  private readonly committed: (newData: any) => void = () => {}
  private readonly beforeDataChange: (oldData: any) => void = () => {}
  private readonly dataChanged: (newData: any) => void = () => {}
  private readonly mutations: MutationsType

  private static plugins: Array<StatusManagerPluginType> = []

  public static registerPlugin(plugin: StatusManagerPluginType) {
    this.plugins.push(plugin)
  }

  constructor(initOption: InitOptionType) {
    this.state = produce(
      initOption.data || {},
      () => {},
      (patches, inversePatches) => {
        this.replaces.push(patches)
        this.inverseReplaces.push(inversePatches)
      }
    )
    this.mutations = initOption.mutations
    this.key = initOption.key
    this.dataType = initOption.dataType || this.dataType
    this.beforeCommit = initOption.hooks?.beforeCommit || this.beforeCommit
    this.committed = initOption.hooks?.committed || this.committed
    this.beforeDataChange =
      initOption.hooks?.beforeDataChange || this.beforeDataChange
    this.dataChanged = initOption.hooks?.dataChanged || this.dataChanged

    this.toRunPlugin('init')
  }
  public trigger(name: string, payload: any) {
    this.toRunPlugin(name, payload)
  }
  public commit(name: string, payload: any) {
    if (
      this.mutations[name] != null &&
      typeof this.mutations[name] == 'function'
    ) {
      this.beforeCommit(this.state)
      this.beforeDataChange(this.state)
      this.toRunPlugin('beforeDataChange')
      this.state = produce(
        this.state,
        (draft) => {
          this.mutations[name](draft, payload)
        },
        (patches, inversePatches) => {
          this.position++
          if (this.position >= this.replaces.length) {
            this.replaces.push(patches)
            this.inverseReplaces.push(inversePatches)
          } else {
            this.replaces[this.position] = patches
            this.inverseReplaces[this.position] = inversePatches
            this.replaces.length = this.position + 1
            this.inverseReplaces.length = this.position + 1
          }

          this.position = this.replaces.length - 1
          console.log(payload, this.replaces, this.inverseReplaces)
        }
      )
      this.toRunPlugin('dataChanged')
      this.dataChanged(this.state)
      this.committed(this.state)
    }
  }

  back(step: number = 1) {
    this.beforeDataChange(this.state)
    this.toRunPlugin('beforeDataChange')
    while (step-- > 0 && this.position > 0) {
      if (this.inverseReplaces.length > 1) {
        this.state = applyPatches(
          this.state,
          this.inverseReplaces[this.position] || []
        )
        this.position--
      } else {
        return
      }
    }
    this.toRunPlugin('dataChanged')
    this.dataChanged(this.state)
  }

  forward(step: number = 1) {
    this.beforeDataChange(this.state)

    this.toRunPlugin('beforeDataChange')
    while (step-- > 0 && this.position < this.replaces.length) {
      if (this.replaces.length > 1) {
        this.state = applyPatches(
          this.state,
          this.replaces[this.position] || []
        )
        this.position++
      } else {
        return
      }
    }
    this.toRunPlugin('dataChanged')

    this.dataChanged(this.state)
  }
  private toRunPlugin(name: string, option?: any) {
    StatusManager.plugins.forEach((e) => {
      if (typeof e == 'function') {
        e(name, this, option)
      } else {
        e.entry(name, this, option)
      }
    })
  }
}

export default StatusManager
