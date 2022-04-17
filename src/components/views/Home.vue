<script>
import BoardCard from "../../components/BoardCard.vue"
import  {mapState, mapActions } from 'vuex'

export default {
    name: 'home-view',
    components: { BoardCard},
    data(){
        return {
            boardName: '',
        }
    },
    methods: {
        ...mapActions(['fetchBoards','addBoard']),
        add(){
            this.addBoard({name: this.boardName})
        },
        created (){
            this.fetchBoards({user: 1})
        }
    },

    computed:{
        ...mapState([
            'boards',
            'fetchingData',
        ])    
    }
}
</script>

//////////////////////////////////////////////////////// 

<template>
    <div class="h-full flex flex-col">
        <h3 class="text-left pl-5 mt-5 font-bold">Mis Paneles</h3>
        <span v-if="fetchingData">Cargando...</span>
        <div class=" flex flex-col bg-black">
            <input 
                type="text"
                class="text-center p-5 rounded-md bg-slate-500 m-4 text-gray-100 font-semibold text-md "
                placeholder="Añade un nuevo panel"
                v-model="boardName"
                @keyup.enter="add()" 
            />
            <board-card 
            v-for="(board,index) in boards"
            :key="index"
            :name="board.name"
            :id="board.id"
             />
        </div>
    </div>
</template>
