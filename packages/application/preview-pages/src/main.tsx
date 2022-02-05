import ReactDOM from 'react-dom'
import './index.css'
import { renderNode, NodeData, renderComponents } from '../../../runtime/render'
import { mockmessage4 } from './mock.js'

function validateData(data: NodeData[]) {
  return true
}

function receiveMessage(event: MessageEvent) {
  if (event.type !== 'cd_components_data') {
    return
  }
  if (!validateData(event.data)) {
    return
  }
  renderData(event.data)
}

window.addEventListener('message', receiveMessage)

async function renderData(data: NodeData[]) {
  const vDom = await renderComponents(data)
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, document.getElementById('root'))
  }
}

;(async () => {
  const vDom = await renderComponents(mockmessage4)
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, document.getElementById('root'))
  }
})()
