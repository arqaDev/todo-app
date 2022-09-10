<template>
    <div class="sort">
        <label>Сортировать по:</label>
        <select :value="modelValue" @change="changeOption">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>
    select {
        margin-left: 15px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>