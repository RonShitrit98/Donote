<template>
  <h1>home</h1>
  <group-create @createGroup="createGroup" />
</template>

<script>
import { useGroupStore } from "../stores/group.store";
import groupCreate from "../components/group/group-create.vue";
export default {
  components: { groupCreate },
  setup() {
    const groupStore = useGroupStore();
    return { groupStore };
  },
  methods: {
    async createGroup(group) {
      try {
        await this.groupStore.createGroup(group);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
