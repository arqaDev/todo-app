<template>
    <form @submit.prevent>
        <input v-model="todo.description" type="text" placeholder="Введите описание">
        <div class="create-btn">
            <button @click="createTodo">Создать</button>
        </div>
    </form>
</template>

<script>
    import date from '@/features/date'
    import { mapActions, mapState } from 'vuex'
    import store from '@/store/index'


    export default {
        data() {
            return {
                todo: {
                    id: Date.now(),
                    description: '',
                    status: 'В работе',
                    date: date(),
                    isDone: false
                }
            }
        },
        methods: {
            createTodo() {
                this.toggleVisible()
                store.commit('addTodo', this.todo)
            },
            ...mapActions([
                'toggleVisible',
            ])
        },
        computed: {
            ...mapState({
                modalVisible: state => state.modalVisible
            })
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/colors.scss';

    form {
        margin-top: 5px;
    }

    input {
        width: 319px;
        height: 40px;
        padding: 16px;
        border: 1px solid #DDE2E4;
        border-radius: 8px;
        outline: none;
        font-size: 18px;
    }

    .create-btn {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        button {
            padding: 12px 40px;
            background-color: $add-todo-btn-color;
            color: $icons-color;
            border-radius: 8px;
            border: none;
            cursor: pointer;
        }
    }
</style>