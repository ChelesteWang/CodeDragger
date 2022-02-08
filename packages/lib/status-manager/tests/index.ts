// import { StatusManager } from '../src'
// //注册插件，会在对应的时间周期执行
// // StatusManager.registerPlugin(
// //   createPersistencePlugin({
// //     status: 'auto'
// //   })
// // )
//
// //statusManager.trigger(name,option) 触发特定的周期钩子
// let map = new Map();
// let statusManager = new StatusManager({
//   key: '',
//   state: map,
//   mutations: {
//     addNode(state: any, payload: any ){
//       state.set(payload.key,payload.value);
//     },
//     change(state: any, payload: any = {}) {
//       for (let key in state) {
//         delete state[key]
//       }
//       for (let key in payload) {
//         state[key] = payload[key]
//       }
//     }
//   },
//   hooks: {
//     dataChanged(data: any) {
//       console.log(data)
//     }
//   }
// })
// console.log(statusManager.state)
// statusManager.commit("addNode",{
//   key:"123123",
//   value:{
//     aaa:"123"
//   }
// })
// console.log(JSON.stringify(statusManager.state))
