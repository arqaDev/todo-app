<template>
    <div class="list-titles">
        <div class="title_1"></div>
        <div class="title_2">Описание</div>
        <div class="title_3">Статус</div>
        <div class="title_4">Дата</div>
    </div>
    <div class="list-body">
        <todo-item v-for="todo in todos"
            :todo="todo"
            :key="todo.id"
        />
    </div>

</template>

<script>
    import TodoItem from './TodoItem.vue';

    export default {
        components: {
            TodoItem
        },
        props: {
            todos: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/colors.scss';

    %todolstblocks {
        padding: 9px 0 9px 21px;
        border-left: 1px solid $border-left-color;
        text-align: left;
    }

    .list-titles {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 101px 870.2px 123px 123px;
    }

    .list-body {
        display: grid;
        border-top: 1px solid $lines-color;
        grid-template-columns: 101px 870.2px 123px 123px;
        margin-top: 16px;
    }

    .title_1 {
        padding: 9px 0 9px 30px;
    }
    

    .title_2, .title_3, .title_4 {
        @extend %todolstblocks;
    }

</style>