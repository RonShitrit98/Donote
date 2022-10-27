<template>
  <h1>todo</h1>
  <todo-list :todos="todoStore.todos" />
  <todo-create :todo="todo" @createTodo="createTodo" />
</template>

<script>
import { useTodoStore } from "../stores/todo.store";
import todoList from "../components/todo-list.vue";
import todoCreate from "../components/todo-create.vue";
export default {
  setup() {
    const todoStore = useTodoStore();
    return {
      todoStore,
    };
  },
  async created() {
    try {
      this.getEmptyTodo();
      this.todoStore.loadTodos();
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      todo: null,
    };
  },
  components: {
    todoList,
    todoCreate,
  },
  methods: {
    async createTodo(todo) {
      try {
        await this.todoStore.createTodo(todo);
        this.getEmptyTodo();
      } catch (error) {
        console.log(error);
      }
    },
    getEmptyTodo() {
      this.todo = this.todoStore.getEmptyTodo();
      console.log(this.todo);
    },
  },
};
</script>
