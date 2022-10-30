<template>
  <section class="user-signup">
    <form @submit.prevent="signup">
      <input type="text" placeholder="username" v-model="user.username" />
      <input type="text" placeholder="name" v-model="user.name" />
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
        name: null,
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
