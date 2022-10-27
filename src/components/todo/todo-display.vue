<template>
  <section>
    <h1>todos:</h1>
    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <todo-list :todo="todo" @click="openTodoModal(todo)" />
        <title-edit
          :title="todo.title"
          @changed="updateTodo($event, 'title', todo._id)"
        />
        <input
          :checked="todo.isDone"
          type="checkbox"
          @change="updateTodo($event.target.checked, 'isDone', todo._id)"
        />
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
import titleEdit from "../util/title-edit.vue";
export default {
  data() {
    return {
      currTodo: null,
    };
  },
  components: { todoList, todoDetail, titleEdit },
  props: {
    todos: Array,
  },
  methods: {
    updateTodo(value, key, id) {
      this.$emit("updateTodo", value, key, id);
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
