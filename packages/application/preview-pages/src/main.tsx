import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { renderNode, NodeData, renderComponents } from '../../../runtime/render';
import {mockmessage4} from './mock.js';


function receiveMessage(event: MessageEvent) {
  if(event.type !== 'cd_components_data') {
    return;
  }
}

window.addEventListener('message', receiveMessage);

async function processData(data: NodeData[]){
  const vDom =  await renderNode(mockmessage4[0]);
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

