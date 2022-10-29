<template>
  <section>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
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
    signup() {
      this.$emit("signup", this.credentials);
    },
  },
};
</script>

<style lang="scss" scoped></style>
