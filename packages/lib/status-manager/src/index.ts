import StatusManager from './StatusManager'
import {
  createPersistencePlugin,
  getFromLocalStorage
} from './plugin/PersistencePlugin'

export default { StatusManager, createPersistencePlugin, getFromLocalStorage }
