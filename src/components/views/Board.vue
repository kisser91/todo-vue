<script>
    import Column from "../../components/Column.vue"
export default {
    name:'board-view',
    components:{Column},

    props: {
        name: String,
        id: String
    },
    data (){
        return {
            listName: '',
            boardList: [
                {id: 1, name: 'Todo'},
                {id: 2, name: 'Doing'}
            ]
        }
    },
    methods: {
        add(){
            this.boardList.push({name: this.listName})
        }
    }
}

</script>


<template>
        <section class="w-full h-full">
            <h3 class="text-left pl-5 mt-5 font-semibold"><span class=" font-normal">Mis paneles</span> > {{name}}</h3>
            <input 
                class="text-center p-5 rounded-md bg-slate-500 m-4 text-gray-100 font-semibold text-md"
                type="text"
                placeholder="Añade una lista"
                v-model="listName"
                @keyup.enter="add()"
            />
            <div class=" bg-fuchsia-100">
                <Column v-for="(list,index) in boardList"
                :key="index"
                :listId="list.id"
                :name="list.name"
                />

            </div>
        </section>
</template>
