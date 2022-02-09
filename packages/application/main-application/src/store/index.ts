import { createObjectStatusManager } from '@cdl-pkg/status-manager'
import { currentAction } from '@/api'

let userInfo = {}
try {
  userInfo = currentAction()
} catch (e) {
  localStorage.removeItem('status_manager__global__userInfo')
}
let o = {}
try {
  o = JSON.parse(
    <string>localStorage.getItem('status_manager__global__userInfo')
  )
} catch (e) {}
const userInfoStore = createObjectStatusManager({
  key: 'userInfo',
  state: o || JSON.parse(JSON.stringify(userInfo)) || {},
  hooks: {
    dataChanged(data) {
      console.log(data)
    }
  }
})

export default userInfoStore
