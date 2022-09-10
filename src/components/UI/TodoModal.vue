<template>
    <div class="modal" v-if="modalVisible" @click="hideModal">
        <div @click.stop class="modal__content">
            <h1>Создать новую задачу</h1>
            <button class="close-btn" @click="hideModal">
                <img :src="CloseSVG" alt="">
            </button>
            <h3>Описание</h3>
            <todo-form/>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import TodoForm from '@/components/TodoForm.vue'

    export default {
        components: {
            TodoForm
        },
        data() {
            return {
                CloseSVG: require('@/assets/Vector4.svg')
            }
        },
        methods: {
            hideModal() {
                this.toggleVisible()
            },
            ...mapActions([
                'toggleVisible'
            ])
            
        },
        computed: {
            ...mapState({
                modalVisible: state => state.modalVisible
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/colors.scss';

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(4px);
        z-index: 10000;
        .modal__content {
            position: relative;
            width: 400px;
            height: 281px;
            padding: 40px 40px 50px;
            border: 1px solid #DDE2E4;
            border-radius: 6px;
            box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
            background-color: $primary-color;
            h1 {
                font-size: 18px;
            }
            .close-btn {
                position: absolute;
                top: 40px;
                right: 40px;
                height: 22px;
                width: 22px;
                border-radius: 5px;
                background: $icons-color;
                border: none;
                cursor: pointer;
            }
            h3 {
                margin-top: 30px;
                font-weight: 400;
            }
        }
    }


</style>