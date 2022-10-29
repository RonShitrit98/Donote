<template>
  <section class="todo-view">
    <group-display />
      <todo-display
        v-if="todoStore.todos"
        @updateTodo="updateTodo"
        :todos="todoStore.todos"
        @removeTodo="removeTodo"
      />
     
  </section>
</template>

<script>
import { useTodoStore } from "../stores/todo.store";
import { useGroupStore } from "../stores/group.store";
import todoDisplay from "../components/todo/todo-display.vue";
import groupDisplay from "../components/group/group-display.vue";
import todoCreate from "../components/todo/todo-create.vue";
export default {
  setup() {
    const todoStore = useTodoStore();
    const groupStore = useGroupStore();
    return {
      todoStore,
      groupStore
    };
  },
  async created() {
    try {
      this.getEmptyTodo();
      this.loadTodos(this.$route.params.id);
      await this.groupStore.loadGroups()
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
    async loadTodos(id){
      this.todoStore.loadTodos(id);
    }
  },
  watch:{
    $route(newValue){
      this.loadTodos(newValue.params.id)
    }
  }
};
</script>
