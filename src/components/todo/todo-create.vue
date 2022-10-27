<template>
  <div>
    <form @submit.prevent="createTodo">
      <input type="text" placeholder="Title" v-model="todo.title" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    createTodo() {
      this.$emit("createTodo", this.todo);
    },
  },
};
</script>
