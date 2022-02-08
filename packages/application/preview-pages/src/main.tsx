import ReactDOM from 'react-dom'
import './index.css'
<<<<<<< HEAD
import { NodeData, renderComponents } from '../../../runtime/render';
import {mockmessage4} from './mock.js';

=======
import { renderNode, NodeData, renderComponents } from '../../../runtime/render'
import { mockmessage4 } from './mock.js'
>>>>>>> main

function validateData(data: NodeData[]) {
  return true
}

function receiveMessage(event: MessageEvent) {
<<<<<<< HEAD
  if(event.type !== 'cdl_components_data') {
    return;
=======
  if (event.type !== 'cd_components_data') {
    return
>>>>>>> main
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


(async () => {
  const vDom =  await renderComponents(mockmessage4)
  console.log('vDom', vDom);
  if(vDom) {
    ReactDOM.render(
      vDom,
      document.getElementById('root')
    )
  }
})()
