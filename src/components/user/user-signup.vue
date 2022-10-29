<template>
  <section class="user-signup">
    <form @submit.prevent="signup">
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
    signup() {
      this.$emit("signup", this.user);
    },
  },
};
</script>
