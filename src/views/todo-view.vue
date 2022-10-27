<template>
  <h1>todo</h1>
  <todo-list
    @updateTodo="updateTodo"
    :todos="todoStore.todos"
    @removeTodo="removeTodo"
  />
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
    },
    async updateTodo(target, todoId) {
      var value = target.value;
      if (target.id === "isDone") {
        value = target.checked;
      }
      try {
        await this.todoStore.updateTodo(todoId, target.id, value);
      } catch (error) {
        console.log(error);
      }
    },
    async removeTodo(id) {
      try {
        await this.todoStore.removeTodo(id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
