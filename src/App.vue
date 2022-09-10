<template>
  <todo-modal/>
  <todo-list/>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoModal from '@/components/UI/TodoModal.vue';

export default {
  name: 'App',
  components: {
    TodoList, TodoModal
  },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 14px;
    color: #16191D;
  }

  body {
    background-color: #FFFFFF;
    min-height: 100vh;
    width: 100%;
  }
</style>
