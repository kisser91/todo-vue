import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    stric: debug,
    plugings: debug ? [createLogger()] : [],
    state, // estado global 
    mutations, // mutate the state
    actions, // execution of a mutation function
    getters // acess to the store
})