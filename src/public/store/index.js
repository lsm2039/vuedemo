import Vue from 'vue'
import vuex from 'vuex'
import app from './app'
import user from './user'
Vue.use(vuex)
const store = new vuex.Store({
    modules: {
        app,
        user
    }

})
export default store
