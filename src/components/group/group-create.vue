<template>
  <div>
    <form @submit.prevent="createGroup">
      <input type="text" placeholder="Group name" v-model="newGroup.title" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newGroup: {
        title: null,
      },
    };
  },
  methods: {
    createGroup() {
      this.$emit("createGroup", this.newGroup);
    },
  },
};
</script>

<style lang="scss" scoped></style>
