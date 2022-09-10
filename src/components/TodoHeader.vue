<template>
    <todo-modal/>
    <h1>To do list</h1>
    <div class="create-btn" @click="showModal">
        <img class="rect_1" src="../assets/Rectangle19.png" alt="plus">
        <img class="rect_2" src="../assets/Rectangle20.png" alt="plus">
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import TodoModal from './UI/TodoModal.vue';

    export default {
        components: {
            TodoModal
        },
        methods: {
            showModal() {
                this.toggleVisible()
            },
            ...mapActions([
                'toggleVisible'
            ])
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/colors.scss';

    h1{
        margin-left: 30px;
        font-size: 24px;
    }

    .create-btn {
        width: 40px;
        height: 40px;
        background-color: $create-btn-color;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }

    .rect_1, .rect_2 {
        position: absolute;
        background: $icons-color;
    }
</style>