import * as types from './mutations-types'
import Vue from 'vue'

export default {

////////////////////////// ASYNC MUTATIONS ///////////////////////////////////////

    // fetch de los paneles creados por el usuario
    [types.FETCH_BOARDS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_BOARDS_SUCCESS](state,{boards}) {
        state.fetchingData = false
        state.error = null
        state.boards = {...boards}
    },
    [types.FETCH_BOARDS_FAILURE] (state,{error}){
        state.fetchingData = false
        state.error = error
    },
    // fetch de las listas creados por el usuario
    [types.FETCH_LISTS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_LISTS_SUCCESS](state,{lists}) {
        state.fetchingData = false
        state.error = null
        state.lists = {...lists}
    },
    [types.FETCH_LISTS_FAILURE] (state,{error}){
        state.fetchingData = false
        state.error = error
    },
    // fetch de las tareas creados por el usuario
    [types.FETCH_TASKS_REQUEST](state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_TASKS_SUCCESS](state,{tasks}) {
        state.fetchingData = false
        state.error = null
        state.tasks = {...tasks}
    },
    [types.FETCH_TASKS_FAILURE] (state,{error}){
        state.fetchingData = false
        state.error = error
    },

////////////////////////// SYNC MUTATIONS ///////////////////////////////////////
    // create a new board
    [types.ADD_BOARD](state,{board}){
        Vue.set(state.boards, board.id, board.name)
    },
        // create a new board
    [types.ADD_COLUMN](state,{column}){
        Vue.set(state.lists, column.id, column)
    },
        // create a new task
    [types.ADD_TASK](state,{task}){
        Vue.set(state.tasks, task.id, task)
    },
        // delete a task from a list of task
    [types.DELETE_TASK](state,{taskId}){
        state.tasks = Object
            .values(state.task)
            .filter(task => task.id !== taskId)
    },
        // mark a task as completed
    [types.DELETE_TASK](state,{task}){
        tasks.completed = !task.completed
    },

}