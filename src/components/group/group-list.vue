<template>
    <ul><li v-for="group in groups" :key="group._id">
    <h2>{{group.title}}</h2>
    </li></ul>
</template>

<script>
export default {
  props: {
    groups: Array,
  },
};
</script>
