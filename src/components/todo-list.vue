<template>
  <h1>todo list</h1>
  <ul>
    <li v-for="todo in todos" :key="todo._id">{{ todo.title }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
};
</script>
