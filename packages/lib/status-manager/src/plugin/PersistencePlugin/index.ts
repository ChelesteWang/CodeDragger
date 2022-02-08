import StatusManager, { InitOptionType } from '../../StatusManager'

const prefix = 'status_manager__'

export type PersistenceOptionType= {
  status?: 'auto' | 'manual'
}

export function getFromLocalStorage(
  initOption: Omit<InitOptionType, 'state'>,
  persistenceOption: PersistenceOptionType
) {
  persistenceOption = Object.assign({}, { status: 'manual' }, persistenceOption)
  initOption.pluginConfig = Object.assign({}, initOption.pluginConfig, {
    persistenceOption
  })
  initOption = Object.assign(
    {},
    {
      key: '',
      dataType: 'global'
    },
    initOption
  )

  let localStorageKey = prefix + initOption.dataType + '__' + initOption.key
  let dataString = localStorage.getItem(localStorageKey)
  let state
  try {
    state = JSON.parse(dataString || '{}')
  } catch (e) {
    state = {}
  }
  return new StatusManager(
    Object.assign({}, initOption, {
      state
    })
  )
}

const useSaveDataToLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value)

export function createPersistencePlugin(
  persistenceOption: PersistenceOptionType
) {
  persistenceOption = Object.assign({}, persistenceOption, {
    status: 'manual'
  })

  return (opportunity: string, ctx: StatusManager) => {
    let __persistenceOption = Object.assign(
      {},
      persistenceOption,
      ctx?.pluginConfig?.persistenceOption
    )
    if (
      (opportunity == 'dataChanged' && __persistenceOption.status == 'auto') ||
      opportunity == 'toSaveData'
    ) {
      useSaveDataToLocalStorage(
        prefix + ctx.dataType + '__' + ctx.key,
        JSON.stringify(ctx.state)
      )
    }
    if (opportunity == 'toSaveData') {
      useSaveDataToLocalStorage(
        prefix + ctx.dataType + '__' + ctx.key,
        JSON.stringify(ctx.state)
      )
    }
    if (opportunity == 'toClearAllData') {
      localStorage.clear()
    }
    // if (opportunity == 'toClearData') {
    // }
  }
}
