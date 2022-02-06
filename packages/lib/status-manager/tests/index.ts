import StatusManager from "../src/index";
import {createPersistencePlugin} from "../src/plugin/PersistencePlugin";

StatusManager.registerPlugin(createPersistencePlugin({
    status:'auto'
}))

let statusManager = new StatusManager({
    key:'',
    data: {
        zqa: {
            xws: 1,
            zqa:[]
        }
    },
    mutations: {
        xwsAdd(state: any, payload: number) {
            state.zqa.xws += payload;
        },
        arrAdd(state: any, payload: number) {
            state.zqa.zqa.push( payload);
        },
        keyAdd(state: any, payload: { name: string, value?: any }) {
            state[payload.name] = payload.value;
        },
        change(state: any, payload: any = {}) {
            for (let key in state) {
                delete state[key];
            }
            for (let key in payload) {
                state[key]=payload[key];
            }
        }
    },
    hooks:{
        dataChanged(data:any){
            console.log(data);
        }
    }
});
console.log(statusManager.state);
statusManager.commit("xwsAdd", 111);
statusManager.commit("arrAdd", 111);
statusManager.commit("arrAdd", 222);
statusManager.commit("arrAdd", 333);
statusManager.commit("xwsAdd", 111);
statusManager.commit("keyAdd", {name: 'name', value: 'zqa'});
statusManager.commit("keyAdd", {name: 'age', value: '111'});
statusManager.commit("xwsAdd", 111);
statusManager.back()
statusManager.back()
statusManager.back()
statusManager.back()
statusManager.back()
statusManager.forward()
statusManager.forward()
statusManager.forward()
statusManager.forward()
statusManager.forward()
statusManager.commit("change",{name:"zqa",sex:"男",school:"bytedance",usage:"none"})
statusManager.commit("change",{name:"zqa",information:{
        q:"111",
        e:"dwqd",
        rrr:"dwqdq"
    }})
statusManager.commit("change",{})
statusManager.back()
statusManager.back()
statusManager.forward()
statusManager.forward()
