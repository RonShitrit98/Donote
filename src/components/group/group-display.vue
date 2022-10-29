<template>
  <section>
    <h1>Groups</h1>
    <group-list
      @removeGroup="removeGroup"
      @editGroup="editGroup"
      :groups="groupStore.groups"
    />
    <groupCreate :newGroup="newGroup" @createGroup="createGroup" />
  </section>
  <div v-if="groupEditId">
    <input type="text" :value="groupEditTitle" @keyup="updateGroup($event)" />
    <button @click="groupEditId = false">X</button>
  </div>
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
  data() {
    return {
      newGroup: null,
      groupEditId: null,
    };
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
    editGroup(id) {
      this.groupEditId = id;
    },
    removeGroup(id) {
      console.log(id);
    },
    async updateGroup(ev) {
      try {
        await this.groupStore.updateGroup(
          ev.target.value,
          "title",
          this.groupEditId
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    groupEditTitle() {
      const group = this.groupStore.groups.find(
        (group) => this.groupEditId === group._id
      );
      return group.title;
    },
  },
};
</script>
