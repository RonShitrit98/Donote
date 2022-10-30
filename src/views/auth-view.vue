<template>
  <section class="auth-view">
    <h1>auth</h1>
    <user-create @signup="signup" />
    <user-signup @login="login" />
  </section>
</template>

<script>
import { useUserStore } from "../stores/user.store";
import userCreate from "../components/user/user-signup.vue";
import userSignup from "../components/user/user-login.vue";
export default {
  components: { userCreate, userSignup },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  async created() {
    await this.userStore.loadUser();
    if (this.userStore.currUser) {
      this.$router.push(`/user/${this.userStore.currUser._id}`);
    }
    console.log(this.userStore.currUser);
  },
  methods: {
    async signup(user) {
      try {
        await this.userStore.signup(user);
        this.$router.push(`/user/${this.userStore.currUser._id}`);
      } catch (error) {
        console.log(error);
      }
    },
    async login(credentials) {
      await this.userStore.login(credentials);
      this.$router.push(`/user/${this.userStore.currUser._id}`);
    },
  },
};
</script>
