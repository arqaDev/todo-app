<template>
    <section class="todo-content">
        <div class="todo-header">
            <todo-header/>
        </div>
        <div class="search-and-sort">
            <search-term
                :model-value="searchTerm"
                @update:model-value="setSearchTerm"
            />
            <sort-todos 
                :modelValue="selectedSort"
                @update:modelValue="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <div class="todo-list">
            <todo-items 
                :todos="sortedAndSearchedTodos"
            />
        </div>
    </section>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    import TodoHeader from '@/components/TodoHeader.vue'
    import TodoItems from '@/components/TodoItems.vue';
    import SearchTerm from '@/components/UI/SearchTerm.vue';
    import SortTodos from '@/components/UI/SortTodos.vue';

    export default {
        components: {
            TodoHeader, TodoItems, SearchTerm, SortTodos
        },
        computed: {
            ...mapState({
                // todos: state => state.todos,
                selectedSort: state => state.selectedSort,
                searchTerm: state => state.searchTerm,
                sortOptions: state => state.sortOptions
            }),
            ...mapGetters({
                sortedAndSearchedTodos: 'sortedAndSearchedTodos'
            })
        },
        methods: {
            setSelectedSort() {
                if (this.selectedSort === 'date') {
                    this.changeSelect('status')
                } else if (this.selectedSort === 'status'){
                    this.changeSelect('date')
                }
            },
            ...mapMutations([
                'setSearchTerm'
            ]),
            ...mapActions([
                'changeSelect'
            ])
        },
    }
</script>

<style lang="scss" scoped>
    .todo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .todo-content {
        margin: 100px 150px 102px;
    }

    .search-and-sort {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        width: 100%;
    }

</style>