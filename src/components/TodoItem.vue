<template>
    <div class="col-1" v-if="todo.isDone">
        <div class="circle active" @click="changeStatus(todo)">
            <div class="circle__img">
                <img :src="SVGLogo" alt="check" class="check">
            </div>
        </div>
    </div>
    <div class="col-1" v-else>
        <div class="circle" @click="changeStatus(todo)">
        </div>
    </div>
    <div class="col-2">{{ todo.description }}</div>
    <div class="col-3" v-if="todo.isDone">
        <div style="color: #134EC1">
            {{ todo.status }}
        </div>
    </div>
    <div class="col-3" v-else>
        <div style="color: #F89B11">
            {{ todo.status }}
        </div>
    </div>
    <div class="col-4">
        {{ todo.date }}
    </div>
    
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object
            }
        },
        data() {
            return {
                SVGLogo: require('@/assets/Vector13.svg'),
            }
        },
        methods: {
            changeStatus(todo) {
                if (todo.isDone) {
                    todo.isDone = false
                    todo.status = 'В работе'
                } else {
                    todo.isDone = true
                    todo.status = 'Выполнено'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/colors.scss';

    %todolstblocks {
        padding: 9px 22px 9px 22px;
        border-bottom: 1px solid $lines-color;
        text-align: left;
        align-items: center;
        display: flex;
        height: 58px;
    }

    .col-1 {
        @extend %todolstblocks;
        justify-content: center;
    }

    .col-2, .col-3, .col-4 {
        @extend %todolstblocks;
    }

    .circle {
        height: 20px;
        width: 20px;
        border: 1px solid $text-color;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        user-select: none;
    }

    .circle.active {
        border: 1px solid $status-color;
    }

    .circle__img {
        position: absolute;
        top: 0;
        left: 25%;
        right: 0;
        bottom: 0;
        width: 10px;
        height: 10px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

</style>