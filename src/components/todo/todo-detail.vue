<template>
  <section class="todo-detail">
    <div>
      <button @click="closeModal">X</button>
      {{ todo }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped></style>
