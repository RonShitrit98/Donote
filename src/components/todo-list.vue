<template>
  <section>
    <h1>todo list</h1>
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <div>
          <h3>{{ todo.title }}</h3>
          <form @change="updateTodo($event, todo._id)">
            <input :value="todo.title" id="title" type="text" />
            <input :checked="todo.isDone" id="isDone" type="checkbox" />
          </form>
          <button @click="removeTodo(todo._id)">X</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    updateTodo(ev, todoId) {
      this.$emit("updateTodo", ev.target, todoId);
    },
    removeTodo(todoId) {
      this.$emit("removeTodo", todoId);
    },
  },
};
</script>
