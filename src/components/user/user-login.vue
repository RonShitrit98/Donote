<template>
  <section>
    <h1>login</h1>
    <form @submit.prevent="login">
      <input
        type="text"
        placeholder="username"
        v-model="credentials.username"
      />
      <input
        type="password"
        placeholder="password"
        v-model="credentials.password"
      />
      <input type="submit" />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      this.$emit("login", this.credentials);
    },
  },
};
</script>

<style lang="scss" scoped></style>
