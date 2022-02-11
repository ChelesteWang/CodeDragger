import ReactDOM from 'react-dom'
import './index.css'
import { NodeData, renderComponents } from '@cdl-pkg/render'
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
    gridRowStart: y + 1,
    gridRowEnd: y + h + 1,
    gridColumnStart: x + 1,
    gridColumnEnd: x + w + 1,
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

  console.log('eventeventeventeventevent');

  if (event.type !== 'cdl_components_data') {
    return
  }
  const { components, layout }: MessagePayload = event.data
  if (!validateData(components)) {
    return
  }

  console.log('event', event);

  const rootElement = document.getElementById('root')

  if(rootElement) {
    renderData(rootElement, components, layout)
  }

}

window.addEventListener('message', receiveMessage)

export async function renderData(
    mountedNode: HTMLElement,
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
      console.log('p ', p, 'gridCSS ', gridCSS);
      positionMap[p.i] = gridCSS;
    }
  )

  console.log('positionMap', positionMap);

  console.log('data', data);
  data.forEach(c => {
    const cssProps = positionMap[c.key];
    Object.keys(cssProps).forEach(
      (cssProp: string) => {
        c.attributes.style[cssProp] = cssProps[cssProp]
      }
    )
  })

  console.log('components', data)

  const vDom = await renderComponents(data)
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, mountedNode)
  }
}

// mock
// ;(async () => {
//   renderData(mockmessage4, mockLayout);
// })()
