<template>
  <section class="user-view">
    <user-detail
      v-if="userToDisplay"
      :user="userToDisplay"
      @openEdit="toggleEdit"
    />
    <div v-if="isEditing">edit Modal</div>
    <button @click="logout">Logout</button>
  </section>
</template>

<script>
import { useUserStore } from "../stores/user.store";
import userDetail from "../components/user/user-detail.vue";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  async created() {
    await this.loadUser();
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    async loadUser() {
      try {
        await this.userStore.loadUser(this.$route.params.id);
      } catch (error) {
        console.log(error);
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    async logout() {
      try {
        await this.userStore.logout();
        this.$router.push('/auth')
      } catch (error) {}
    },
  },
  computed: {
    userToDisplay() {
      return this.userStore.userToDisplay;
    },
  },
  components: {
    userDetail,
  },
};
</script>
