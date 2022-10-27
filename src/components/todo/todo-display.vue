<template>
  <section class="todo-display">
    <h1 class="list-title">Todos</h1>
    <ul class="display-list">
      <li v-for="todo in todos" :key="todo._id">
        <div class="todo-info-box" @click="openTodoModal(todo)">
          <title-edit
            :title="todo.title"
            @changed="updateTodo($event, 'title', todo._id)"
            @click.stop=""
          />
          <button class="remove-btn" @click.stop="removeTodo(todo._id)">
            X
          </button>
          <input
            :checked="todo.isDone"
            type="checkbox"
            @change.stop="updateTodo($event.target.checked, 'isDone', todo._id)"
            @click.stop=""
          />
        </div>
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
