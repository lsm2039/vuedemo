// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as getters from './getters/getters'
// import * as mutations from './mutations'

// Vue.use(Vuex)

// const state = {
//     resturantName: '飞歌餐馆' // 默认值
//     // id: xxx  如果还有全局状态也可以在这里添加
//     // name:xxx
// }
// const store = new Vuex.Store({
//     state, // 共同维护的一个状态，state里面可以是很多个全局状态
//     getters, // 获取数据并渲染
//     actions, // 数据的异步操作
//     mutations // 处理数据的唯一途径，state的改变或赋值只能在这里
// })

import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import dialog_store from './pathData'
export default new vuex.Store({
    modules: {
        dialog: dialog_store
        //other: other,//其他组件
    }
})