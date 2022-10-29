<template>
  <section class="group-list">
    <ul>
      <li v-for="group in groups" :key="group._id">
        <router-link :to="`/todo/${group._id}`">- {{ group.title }}</router-link>
        <button @click="editGroup(group._id)">edit</button>
        <!-- <button @click="removeGroup(group._id)">X</button> -->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    groups: Array,
  },
  methods: {
    editGroup(id) {
      this.$emit("editGroup", id);
    },
    removeGroup(id) {
      this.$emit("removeGroup", id);
    },
  },
};
</script>
