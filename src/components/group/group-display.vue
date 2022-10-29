<template>
  <section>
    <h1>Groups</h1>
    <group-list :groups="groupStore.groups" />
  </section>
</template>

<script>
import { useGroupStore } from "../../stores/group.store";
import groupList from "./group-list.vue";
export default {
  setup() {
    const groupStore = useGroupStore();
    return { groupStore };
  },
  components: {
    groupList,
  },
};
</script>
