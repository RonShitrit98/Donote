<template>
  <section>
    <h1>{{ user.username }}</h1>
    <button @click="openEdit">Edit</button>
  </section>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    openEdit() {
      this.$emit("openEdit", { withCredentails: true });
    },
  },
};
</script>
