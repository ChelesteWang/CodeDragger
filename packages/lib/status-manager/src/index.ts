import StatusManager from './StatusManager'
import {
  createListStatusManager,
  ListStatusManagerInitOptionType
} from './listStatus'
import {
  createPersistencePlugin,
  getFromLocalStorage
} from './plugin/PersistencePlugin'
import {
  // ObjectStatusManagerInitOptionType,
  createObjectStatusManager
} from './objectStatus'

export {
  StatusManager,
  createPersistencePlugin,
  getFromLocalStorage,
  createListStatusManager,
  createObjectStatusManager
}

export type {
  // ListStatusManagerInitOptionType,
  // ObjectStatusManagerInitOptionType
}
