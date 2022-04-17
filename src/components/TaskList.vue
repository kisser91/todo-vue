<script>
export default {
    name: 'task-list',
    props: {
        listId: String,
        tasks: Array
    },
    data (){
        return {
            title: ''
        }
    },
    methods: {
        add(){
            // TODO implentar eventos
        }
    }
}

</script>


<template>
    <ul class="bg-slate-300 mx-5 p-2 rounded-md">
        <li 
        class="py-2 px-4 bg-slate-400 rounded-md my-4 mx-3"
        v-for="(task,index) in tasks"
        :key="index"
        :class="{completed: task.completed}"
        >
        {{task.title}}
        </li>
        <input 
            placeholder="Añade una nueva tarea..."
            v-model="title"
            @keyup.enter="add()"
            type="text"
        >
    </ul>
</template>

