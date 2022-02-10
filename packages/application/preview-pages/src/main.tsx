import ReactDOM from 'react-dom'
import './index.css'
import { NodeData, renderComponents } from '@cdl-pkg/render'
import { mockmessage4, mockLayout } from './mock.js'
import { Interface } from 'readline'
import { CSSProperties } from 'react'

function validateData(data: NodeData[]) {
  return true
}

interface GridCSS {
  gridColumnStart: number;
  gridRowStart: number;
  gridColumnEnd: number;
  gridRowEnd: number;
} 

function genGirdCSS(p : PositionData): GridCSS {
  const { x, y, h, w } = p;
  return {
    gridColumnStart: x,
    gridRowStart: y,
    gridColumnEnd: x + w,
    gridRowEnd: y + h,
  }
}

interface PositionData {
  w: number
  h: number
  x: number
  y: number
  i: string
}


interface MessagePayload {
  components: NodeData[]
  layout: {
    windowWidth: number
    cols: number
    positions: PositionData[]
  }
}

function receiveMessage(event: MessageEvent) {
  if (event.type !== 'cdl_components_data') {
    return
  }
  const { components, layout }: MessagePayload = event.data
  if (!validateData(components)) {
    return
  }

  renderData(components, layout)
}

window.addEventListener('message', receiveMessage)

async function renderData(
    data: NodeData[],
    layout: {
      windowWidth: number
      cols: number
      positions: PositionData[]
    })
{
  const positionMap: Record<string, GridCSS> = {};
  
  layout.positions.forEach(
    p => {
      const gridCSS = genGirdCSS(p)
      positionMap[p.i] = gridCSS;
    }
  )
  
  data.forEach(c => {
    c.attributes.style = {
      ...c.attributes.style,
      ...positionMap[c.key]
    }
  })

  console.log('components', data)

  const vDom = await renderComponents(data)
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, document.getElementById('root'))
  }
}

// mock
;(async () => {
  renderData(mockmessage4, mockLayout);
})()
