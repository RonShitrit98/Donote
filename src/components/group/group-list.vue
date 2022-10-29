<template>
  <ul>
    <li v-for="group in groups" :key="group._id">
      <router-link :to="`/todo/${group._id}`">{{ group.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    groups: Array,
  },
};
</script>
