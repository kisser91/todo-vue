<script>
export default {
    name: 'board-card',
    props: {
        id: String,
        name: String
    }
}
</script>

<template>
    <router-link
        class="mx-4 bg-slate-500 border-[2px] border-slate-600 my-5 p-5 rounded-md text-gray-100 hover:bg-slate-400 hover:text-lg hover:text-white"
        :to="{name: 'board', params: {name,id}}"
    >
        <span class="board-card-title">
            {{ name }}
        </span>
    </router-link>
</template>
