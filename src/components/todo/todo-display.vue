<template>
  <section class="todo-display">
    <div></div>
    <h1 class="list-title">{{ groupTitle }}</h1>
    <ul class="display-list">
      <li v-for="todo in todos" :key="todo._id">
        <div class="todo-info-box" @click="openTodoModal(todo)">
          <input
            class="todo-checkbox"
            :checked="todo.isDone"
            type="checkbox"
            @change.stop="updateTodo($event.target.checked, 'isDone', todo._id)"
            @click.stop=""
          />
          <title-edit
            :title="todo.title"
            @changed="updateTodo($event, 'title', todo._id)"
            @click.stop=""
          />
          <button class="remove-btn" @click.stop="removeTodo(todo._id)">
            X
          </button>
        </div>
      </li>
    </ul>
    <todo-create :todo="todo" @createTodo="createTodo" />
    <todo-detail
      :todo="currTodo"
      v-if="currTodo"
      @closeModal="closeTodoModal"
    />
  </section>
</template>

<script>
import { useTodoStore } from "../../stores/todo.store";
import todoList from "./todo-list.vue";
import todoCreate from "./todo-create.vue";
import todoDetail from "./todo-detail.vue";
import titleEdit from "../util/title-edit.vue";
export default {
  data() {
    return {
      currTodo: null,
      todo: null,
    };
  },
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  created() {
    this.todo = this.todoStore.getEmptyTodo();
  },
  components: { todoList, todoDetail, titleEdit, todoCreate },
  props: {
    todos: Array,
  },
  methods: {
    async createTodo(todo) {
      try {
        await this.todoStore.createTodo(todo);
        this.todo = this.todoStore.getEmptyTodo();
      } catch (error) {
        console.log(error);
      }
    },
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
  computed: {
    groupTitle() {
      return this.todoStore.currGroupTitle;
    },
  },
};
</script>
