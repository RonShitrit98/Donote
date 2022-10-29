<template>
  <section class="todo-view">
    <group-display />
    <div>
      <todo-display
      v-if="todoStore.todos"
      @updateTodo="updateTodo"
      :todos="todoStore.todos"
      @removeTodo="removeTodo"
      />
      <todo-create :todo="todo" @createTodo="createTodo" />
    </div>
  </section>
</template>

<script>
import { useTodoStore } from "../stores/todo.store";
import todoDisplay from "../components/todo/todo-display.vue";
import groupDisplay from "../components/group/group-display.vue";
import todoCreate from "../components/todo/todo-create.vue";
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
    todoDisplay,
    todoCreate,
    groupDisplay,
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
    async updateTodo(value, key, id) {
      // var value = target.value;
      // if (target.id === "isDone") {
      //   value = target.checked;
      // }
      try {
        await this.todoStore.updateTodo(value, key, id);
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
