import StatusManager from './StatusManager'
import { createListStatusManager } from './listStatus'
import {
  createPersistencePlugin,
  getFromLocalStorage
} from './plugin/PersistencePlugin'
import { createObjectStatusManager } from './objectStatus'

export {
  StatusManager,
  createPersistencePlugin,
  getFromLocalStorage,
  createListStatusManager,
  createObjectStatusManager
}
