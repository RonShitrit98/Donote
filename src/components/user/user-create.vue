<template>
  <section class="user-create">
    <form @submit.prevent="createUser">
      <input type="text" placeholder="username" v-model="user.username" />
      <input type="password" placeholder="password" v-model="user.password" />
      <input type="submit" />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    createUser() {
      this.$emit("createUser", this.user);
    },
  },
};
</script>
