import ReactDOM from 'react-dom'
import './index.css'
import { NodeData, renderComponents } from '../../../runtime/render';
import {mockmessage4} from './mock.js';


function validateData(data: NodeData[]) {
  return true
}

type PositionData = any[];

interface MessagePayload {
  components: NodeData[];
  layout: {
    windowWidth: number,
    cols: number,
    positions: PositionData[]
  }
}

function receiveMessage(event: MessageEvent) {
  if(event.type !== 'cdl_components_data') {
    return;
  }
  const { components, layout }: MessagePayload = event.data;
  if (!validateData(components)) {
    return
  }
  renderData(components, layout)
}

window.addEventListener('message', receiveMessage)

async function renderData(data: NodeData[], layout= {}) {
  const vDom = await renderComponents(data)
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, document.getElementById('root'))
  }
}

// mock
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
