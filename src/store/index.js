import { createStore } from "vuex";
import todos from '@/data/data'


export default createStore({
    state: () => ({
        todos: todos,
        selectedSort: 'date',
        searchTerm: '',
        sortOptions: [
            {value: 'date', name: 'Дата'},
            {value: 'status', name: 'Статус'},
        ],
        modalVisible: false,
        isDone: false,
        status: 'В работе'
    }),
    getters: {
        getSortedTodos(state) {
            if (state.selectedSort === 'date') {
                return [...state.todos].sort(function(todo1, todo2){
                            const date1 = todo1.date.split('.').reverse().join('.');
                            const date2 = todo2.date.split('.').reverse().join('.');
                            if (date1 > date2) {
                                return -1;
                            } else if (date1 < date2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        })
            } else if (state.selectedSort === 'status') {
                return [...state.todos].sort((todo1, todo2) => todo1[state.selectedSort].localeCompare(todo2[state.selectedSort]))
            }
        },
        sortedAndSearchedTodos(state, getters) {
            return getters.getSortedTodos.filter(todo => todo.description.toLowerCase().includes(state.searchTerm.toLowerCase()))
        },
    },
    mutations: {
        changeVisible(state) {
            state.modalVisible = !state.modalVisible
        },
        addTodo(state, todo) {
            state.todos.unshift(todo)
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm
        },
    },
    actions: {
        toggleVisible({commit}) {
            commit('changeVisible')
        },
        changeSelect({commit}, payload) {
            commit('setSelectedSort', payload)
        },
    }
})
