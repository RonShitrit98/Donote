<template>
  <h1>home</h1>
  <groupDisplay />
</template>

<script>
import { useGroupStore } from "../stores/group.store";
import groupCreate from "../components/group/group-create.vue";
import groupDisplay from "../components/group/group-display.vue";
export default {
  components: { groupCreate, groupDisplay },
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
  async created() {
    try {
      await this.groupStore.loadGroups();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
