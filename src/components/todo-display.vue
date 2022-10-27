<template>
  <section>
    <h1>todos:</h1>
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <todo-list :todo="todo" @click="openTodoModal(todo)" />
        <form @change.stop="updateTodo($event, todo._id)">
          <input :value="todo.title" id="title" type="text" />
          <input :checked="todo.isDone" id="isDone" type="checkbox" />
        </form>
        <button @click="removeTodo(todo._id)">X</button>
      </li>
    </ul>
    <todo-detail
      :todo="currTodo"
      v-if="currTodo"
      @closeModal="closeTodoModal"
    />
  </section>
</template>

<script>
import todoList from "./todo-list.vue";
import todoDetail from "./todo-detail.vue";
export default {
  data() {
    return {
      currTodo: null,
    };
  },
  components: { todoList, todoDetail },
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
    openTodoModal(todo) {
      this.currTodo = todo;
    },
    closeTodoModal() {
      this.currTodo = null;
    },
  },
};
</script>
