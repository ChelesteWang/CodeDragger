import ReactDOM from 'react-dom'
import './index.css'
import { NodeData, renderComponents } from '@cdl-pkg/render'

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
  if (event.type !== 'cdl_components_data') {
    return
  }
  console.log('eventeventeventeventevent');
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
  let pageHeight = 750;
  layout?.positions?.forEach(
    p => {
      const gridCSS = genGirdCSS(p)
      console.log('p ', p, 'gridCSS ', gridCSS);
      positionMap[p.i] = gridCSS;
      pageHeight = Math.max(pageHeight, gridCSS.gridRowEnd)
    }
  )

  data?.forEach(c => {
    const cssProps = positionMap[c.key]||{};
    Object.keys(cssProps).forEach(
      (cssProp: string) => {
        c.attributes.style[cssProp] = cssProps[cssProp]
      }
    )
  })

  console.log('components', data)
  const vDom = await renderComponents(data, { pageHeight })
  console.log('vDom', vDom)
  if (vDom) {
    ReactDOM.render(vDom, mountedNode)
  }
}

// mock
// ;(async () => {
//   renderData(mockmessage4, mockLayout);
// })()
