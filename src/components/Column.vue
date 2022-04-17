<template>
    <header class="text-black my-4 mx-5 bg-slate-400 p-4 rounded-md">
        <h3>{{ name }}</h3>
    </header>
    <TaskList 
        :listId="listId"
        :tasks="taskList"
        />
</template>


<script>
import TaskList from "../components/TaskList.vue"

export default {
    name: 'column',
    props: {
        listId: String,
        name: String
    },
    components: {TaskList},
    data(){
        return {
            taskList: [
                {id:1, title: 'Aprender Vue', completed: false},
                {id:1, title: 'Aprender Vuex', completed: false}
            ]
        }
    }
}
</script>