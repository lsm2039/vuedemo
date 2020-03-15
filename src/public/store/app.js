import { INCREMENT, DECREMENT } from './mutations_type'
const app = {
    state: {
        // 存放全局状态
        count: 0
    },
    getters: {
        // 数据操作处理 过滤等等 只读
        myCount(state) {
            return 'current count is' + (state.count)
        }
    },
    mutations: {
        // 更改操作全局状态  改变数据的业务逻辑
        [INCREMENT](state, n) {
            state.count += n
        },
        [DECREMENT](state, n) {
            state.count -= n
        }
    },
    actions: {
        // 业务逻辑 复杂业务逻辑
        async  myIncrement(context, obj) {
            console.log(obj)
            context.commit(INCREMENT)
            const newData = [1, 2, 3, 4, 5]
            return newData
        },
        myDecrement(context) {
            context.commit('decrement')
        }
    }
}
export default app
