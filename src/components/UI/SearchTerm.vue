<template>
    <div class="search-term">
        <img src="@/assets/Vector.png" alt="search" class="search-term__img">
        <input
            :value="modelValue"
            @input="updateInput"
            class="search-term__input"
            type="text" placeholder="Поиск Имени, статуса или даты"
        >
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number]
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }          
        }
    }
</script>

<style lang="scss" scoped>
    .search-term {
        margin-left: 30px;
        align-items: center;
    }

    .search-term__img {
        width: 16px;
        height: 16px;
        float: left;
        cursor: pointer;
    }

    .search-term__input {
        margin-left: 16px;
        border: none;
        background-color: transparent;
        outline: none;
        width: 208px;
        line-height: 18.48px;
    }
    
    .search-term__input::placeholder {
        color: #C4C4C4;
    }
</style>