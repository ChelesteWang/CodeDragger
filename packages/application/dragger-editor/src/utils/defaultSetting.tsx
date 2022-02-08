// import { ButtonA } from "../component/Button/ButtonA";
// import { ButtonB } from "../component//Button/ButtonB";
// import { ButtonC } from "../component//Button/ButtonC";
// import Calendar from "../component//Calendar/Calendar";

// import Carousel from "../component//Carousel/Carousel";
function component() {
  return <div></div>
}
export const defalutSetting = new Map([
  ['Calendar', { y: Infinity, w: 3, h: 3, minH: 3, minW: 3 }],
  ['Button1', { y: Infinity, w: 2, h: 1 }],
  ['Button2', { y: Infinity, w: 2, h: 1 }],
  ['Button3', { y: Infinity, w: 2, h: 1 }],
  ['Carousel', { y: Infinity, w: 2, h: 1.5 }]
])

export const componentMapping = new Map<string, React.FC>([
  ['Calendar', component],
  ['Button1', component],
  ['Button2', component],
  ['Button3', component],
  ['Carousel', component]
])
