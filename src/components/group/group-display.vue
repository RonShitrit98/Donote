<template>
  <section>
    <h1>Groups</h1>
    <group-list :groups="groupStore.groups" />
    <groupCreate :newGroup="newGroup" @createGroup="createGroup" />
  </section>
</template>

<script>
import { useGroupStore } from "../../stores/group.store";
import groupList from "./group-list.vue";
import groupCreate from "./group-create.vue";
export default {
  setup() {
    const groupStore = useGroupStore();
    return { groupStore };
  },
  data(){
    return{
      newGroup:null
    }
  },
  components: {
    groupList,
    groupCreate,
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
