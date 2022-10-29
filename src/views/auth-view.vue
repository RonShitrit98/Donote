<template>
  <section class="auth-view">
    <h1>auth</h1>
    <user-create @createUser="createUser" />
    <user-signup @signup="signup" />
  </section>
</template>

<script>
import { useUserStore } from "../stores/user.store";
import userCreate from "../components/user/user-create.vue";
import userSignup from "../components/user/user-signup.vue";
export default {
  components: { userCreate, userSignup },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    async createUser(user) {
      try {
        await this.userStore.createUser(user);
        this.$router.push(`/user/${this.userStore.currUser._id}`);
    } catch (error) {
        console.log(error);
    }
},
async signup(credentials){
    await this.userStore.signup(credentials)
    this.$router.push(`/user/${this.userStore.currUser._id}`);
    }
  },
};
</script>
