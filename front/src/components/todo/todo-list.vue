<template>
  <section>
    <h1>{{todo.title}}</h1>
  </section>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>
